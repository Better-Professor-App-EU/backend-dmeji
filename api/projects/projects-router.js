const express = require("express");

const Projects = require("../projects/projects-model");

const projectsRouter = express.Router();

projectsRouter.get("/", (req, res) => {
  Projects.findProjects()
    .then(projects => {
      if (projects && projects.length > 0) {
        return projects;
      } else {
        res.status(401).json({
          message: "could not fetch projects."
        });
      }
    })
    .then(projects => {
      Projects.getDeadlines()
        .then(deadlines => {
          if (deadlines && deadlines.length > 0) {
            const projectsWithDeadlines = projects.map(project => {
              const relevantDeadlines = deadlines.filter(
                deadline => project.id === deadline.project_id
              );
              return {
                ...project,
                deadlines: relevantDeadlines.map(deadline => {
                  return {
                    deadline_type: deadline.deadline_type,
                    deadline: deadline.deadline
                  };
                })
              };
            });
            res.status(200).json(projectsWithDeadlines);
          } else if (deadlines) {
            res.status(200).json(projects);
          }
        })
        .catch(err => {
          res.status(401).json({
            message: err.message
          });
        });
    })
    .catch(err => {
      res.status(500).json({
        message: "there was an error while fetching projects"
      });
    });
});

module.exports = projectsRouter;
