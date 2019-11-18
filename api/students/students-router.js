const express = require("express");

const Students = require("../students/students-model");

const studentsRouter = express.Router();

studentsRouter.get("/", (req, res) => {
  Students.find()
    .then(students => {
      res.status(200).json(students);
    })
    .catch(err => {
      res.status(500).json({
        err,
        message: "Failed to get students"
      });
    });
});

studentsRouter.post("/", (req, res) => {
  Students.add(req.body)
    .then(student => {
      res.status(200).json(student);
    })
    .catch(err => {
      res.status(500).json({
        err,
        message: "Failed to create new student profile"
      });
    });
});

module.exports = studentsRouter;
