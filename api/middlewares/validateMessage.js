module.exports = (req, res, next) => {
  let newMessage = req.body;
  if (!newMessage) {
    res.status(400).json({ message: "kindly input mandatory fields" });
  } else if (!newMessage.text) {
    res.status(400).json({
      message: "missing required text field for a new message record"
    });
  } else if (!newMessage.timestamp) {
    res.status(400).json({
      message: "missing required timestamp field for a new message record"
    });
  } else if (!newMessage.user_id) {
    res.status(400).json({
      message: "missing required user_id field for a new message record"
    });
  } else {
    next();
  }
};
