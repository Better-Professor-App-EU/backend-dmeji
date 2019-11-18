module.exports = (req, res, next) => {
    if (!req.body.name) {
      res.status(401).json({
        message: "kindly provide a name"
      });
    } else {
      next();
    }
  };