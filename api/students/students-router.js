const express = require("express");

const validateStudentPost = require("../middlewares/validateStudentPost");

const Students = require("../students/students-model");

const studentsRouter = express.Router();

studentsRouter.get("/", (req, res) => {
  Students.findStudents()
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

studentsRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  Students.findStudentById(id)
    .then(student => {
      res.status(200).json(student);
    })
    .catch(err => {
      res.status(500).json({
        err,
        message: "Failed to get student"
      });
    });
});

studentsRouter.post("/", validateStudentPost, (req, res) => {
  const student = req.body;
  Students.addStudent(student)
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

studentsRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  Students.removeStudent(id)
    .then(deleted => {
      if (deleted) {
        res.status(200).json({
          message: `${deleted} student(s) record was deleted`
        });
      } else {
        res.status(404).json({
          message: "The student with the specified ID does not exist."
        });
      }
    })
    .catch(error =>
      res.status(500).json({
        success: false,
        error: "This record could not be removed"
      })
    );
});
studentsRouter.get("/:id/projects", (req, res) => {
  const { id } = req.params;
  Students.getStudentProjects(id)
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({
        err,
        message: "Failed to get student"
      });
    });
});
module.exports = studentsRouter;
