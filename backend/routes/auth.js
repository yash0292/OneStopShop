import express from "express";
import { check, validationResult } from "express-validator";
import User from "../models/Users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

//Register a user
router.post(
  "/register",
  [
    check("name", "Name can not be empty").not().isEmpty(),
    check("email", "Enter a valid email").isEmail(),
    check("username", "Username can not be empty").not().isEmpty(),
    check("password", "Must be 8 characters").isLength({ min: 8 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.json(errors);
      }
      const { name, username, email, password, confirmPassword, isAdmin } =
        req.body;
      let user = await User.findOne({ username });
      if (user) {
        return res.json("User already exists");
      }
      if (password !== confirmPassword) {
        return res.json("Passwords do not match");
      }

      let myUser = new User({ name, username, email, password, isAdmin });
      const salt = await bcrypt.genSalt(10);
      myUser.password = await bcrypt.hash(password, salt);
      await myUser.save();
      const payload = {
        user: {
          id: myUser.id,
          name: myUser.name,
        },
      };

      jwt.sign(
        payload,
        process.env.SECRET,
        {
          expiresIn: 26000,
        },
        (err, token) => {
          if (err) throw err;
          //localStorage.setItem("token", token);
          //console.log(token);
          return res.json(token);
        }
      );
    } catch (err) {
      console.log(err);
    }
  }
);

//Login user
router.post(
  "/login",
  [
    check("username", "Username can not be empty").not().isEmpty(),
    check("password", "Must be 8 characters").isLength({ min: 8 }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.json(errors);
      }

      const { username, password } = req.body;
      let user = await User.findOne({ username });
      if (!user) {
        return res.json("Invalid User");
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.json("Invalid Usename or Password");
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.SECRET,
        {
          expiresIn: 260000,
        },
        (err, token) => {
          if (err) throw err;
          return res.json(token);
        }
      );
    } catch (error) {}
  }
);

//Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.log(err);
  }
});

export default router;
