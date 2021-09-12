import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import dbConnection from "./dbConnection.js";
import Auth from "./routes/auth.js";

dotenv.config();
const app = express();
dbConnection();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use(express.json());
//Routes
app.use("/api/auth", Auth);

// app.get('/', (req ,res ,next) =>{
//     res.send("Api Running")
// });

app.listen(PORT, console.log(`Server Running On Port ${PORT}`));
