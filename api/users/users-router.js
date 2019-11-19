const express = require("express");

const Users = require("../users/users-model");

const usersRouter = express.Router();



usersRouter.get("/", (req, res) => {
    Users.findUsers()
      .then(users => {
        res.status(200).json(users);
      })
      .catch(err => {
        res.status(500).json({
          err,
          message: "Failed to get users"
        });
      });
  });



  module.exports = usersRouter