const express = require("express");

const Messages = require("../messages/messages-model");

const messagesRouter = express.Router();

messagesRouter.get("/", (req, res) => {
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
    .then(student => {
      res.status(200).json(student);
    })
    .catch(err => {
      res.status(500).json({
        err,
        message: "Failed to get message"
      });
    });
});

module.exports = messagesRouter;
