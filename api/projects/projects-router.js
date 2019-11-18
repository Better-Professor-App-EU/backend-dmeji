const express = require("express");

const Projects = require("../projects/projects-model");

const projectsRouter = express.Router();

projectsRouter.get("/", (req, res) => {
  Projects.findProjects()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({
        err,
        message: "Failed to get projects"
      });
    });
});

projectsRouter.get("/student/:id/projects", (req, res) => {
  const { id } = req.params;
  Projects.findByStudentId(id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({
        err,
        message: "Failed to get project"
      });
    });
});

module.exports = projectsRouter;
