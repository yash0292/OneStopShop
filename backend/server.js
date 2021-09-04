import express from "express";
const app = express();
const Port = 8080;

app.listen(Port, console.log("Server Running On Port"+ Port));