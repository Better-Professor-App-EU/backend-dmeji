const db = require("../../config/dbConfig");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db("students").select("id", "name");
}

function findBy(filter) {
  return db("students").where(filter);
}

async function add(user) {
  const [id] = await db("students").insert(student);

  return findById(id);
}

function findById(id) {
  return db("students")
    .where({ id })
    .first();
}
