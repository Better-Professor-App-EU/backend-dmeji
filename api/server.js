require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

const authRouter = require("../api/auth/auth-router");

const studentsRouter = require("../api/students/students-router");

const projectsRouter = require("../api/projects/projects-router");

const messagesRouter = require("../api/messages/messages-router");


server.use("/api/auth", authRouter);
server.use("/api/students", studentsRouter);
server.use("/api/projects", projectsRouter);
server.use("/api/messages", messagesRouter);


server.get("/", (req, res) => {
  res.send("<h1> Working </h1>");
});

module.exports = server;
