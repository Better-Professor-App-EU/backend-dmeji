module.exports = (req, res, next) => {
  if (req.body.username && req.body.password) {
    next();
  } else {
    res.status(401).json({
      message: "kindly input username and password"
    });
  }
};
