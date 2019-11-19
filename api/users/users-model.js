const db = require("../../config/dbConfig");

module.exports = {
  findUsers
};

function findUsers() {
  return db("users").select("id", "username");
}
