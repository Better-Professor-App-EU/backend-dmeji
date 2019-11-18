const express = require("express");

const bcrypt = require("bcryptjs");
const validateReg = require("../middlewares/validateReg");

const Users = require("../users/users-model");

const authRouter = express.Router();

const tokenize = require("../middlewares/tokenize");

authRouter.post("register", validateReg, (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 11);
  user.password = hash;
  Users.add(user)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(error => {
      res.status(500).json({
        message: error.message
      });
    });
});

authRouter.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = tokenize(user);
        res.status(200).json({
          message: `Welcome back ${user.username}!`,
          token: token
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json({
        message: error.message
      });
    });
});

module.exports = authRouter;
