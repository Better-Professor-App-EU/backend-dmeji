const express = require("express");

const restrict = require("../middlewares/restrict");

const validateUser = require("../middlewares/validateUser");

const validateMessage = require("../middlewares/validateMessage");

const Messages = require("../messages/messages-model");

const messagesRouter = express.Router();

messagesRouter.get("/", restrict, (req, res) => {
  Messages.findMessages()
    .then(messages => {
      messages.map(message => {
        if (message.send_to_self === 0) {
          return (message.send_to_self = `send to ${message.student_name}`);
        } else {
          return (message.send_to_self = "yes");
        }
      });
      res.status(200).json(messages);
    })
    .catch(err => {
      res.status(500).json({
        err,
        message: "Failed to get messages"
      });
    });
});

messagesRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  Messages.findById(id)
    .then(message => {
      if (message.send_to_self === 0) {
        message.send_to_self = `no, send to student number ${message.id}`;
      } else {
        message.send_to_self = "yes";
      }
      res.status(200).json(message);
    })
    .catch(err => {
      res.status(500).json({
        err,
        message: "Failed to get message"
      });
    });
});

messagesRouter.post("/", validateMessage, validateUser, (req, res) => {
  const message = req.body;
  Messages.addMessage(message)
    .then(message => {
      res.status(200).json(message);
    })
    .catch(err => {
      res.status(500).json({
        err,
        error: message.error
      });
    });
});
module.exports = messagesRouter;
