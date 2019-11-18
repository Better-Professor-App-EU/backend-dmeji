const db = require("../../config/dbConfig");

module.exports = {
  addStudent,
  findStudents,
  findStudentById,
  removeStudent
};

function findStudents() {
  return db("students").select("id", "name");
}

async function addStudent(student) {
  const [id] = await db("students").insert(student);

  return findById(id);
}

function findStudentById(id) {
  return db("students")
    .where({ id })
    .first();
}

function removeStudent(id) {
  return db("students")
    .where({ id })
    .del();
}
