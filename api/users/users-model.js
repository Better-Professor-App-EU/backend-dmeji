const db = require("../../config/dbConfig");

module.exports = {
  findUsers,
  findById,
  findBy,
  add
};

function findUsers() {
  return db("users").select("id", "username");
}

function findBy(filter) {
  return db("users").where(filter);
}

function add(user) {
  return db("users")
    .insert(user, "id")
    .then(([id]) => {
      return findById(id);
    });
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}
