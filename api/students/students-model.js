const db = require("../../config/dbConfig");

module.exports = {
  add,
  find,
  findById,
  remove
};

function find() {
  return db("students").select("id", "name");
}

async function add(student) {
  const [id] = await db("students").insert(student);

  return findById(id);
}

function findById(id) {
  return db("students")
    .where({ id })
    .first();
}

function remove(id) {
  return db("students")
    .where({ id })
    .del();
}
