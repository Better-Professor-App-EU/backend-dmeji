const jwt = require("jsonwebtoken");

const jwtSecret = require("../../config/jwtSecrets");

module.exports = user => {
  const payload = {
    subject: user.id,
    username: user.username
  };
  const options = {
    expiresIn: "1h"
  };

  return jwt.sign(payload, jwtSecret.secret, options);
};
