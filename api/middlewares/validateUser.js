module.exports = (userId) => (req, res, next) => {
    if (userId === req.user.id) {
      next();
    } else {
      res.status(403).json({
        message: "you do not have access to this information "
      });
    }
  };