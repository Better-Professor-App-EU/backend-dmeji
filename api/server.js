require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

const authRouter = require("./api/auth/auth-router");

server.use("api/auth/", authRouter);

server.get("/", (req, res) => {
  res.send("<h1> Yo </h1>");
});

module.exports = server;
