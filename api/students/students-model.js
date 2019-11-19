const db = require("../../config/dbConfig");

module.exports = {
  addStudent,
  findStudents,
  findStudentById,
  removeStudent,
  getStudentProjects
};

function findStudents() {
  return db("students").select("id", "name");
}

async function addStudent(student) {
  const [id] = await db("students").insert(student, 'id');

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
function getStudentProjects(id) {
  return db("studentsTprojects as stp")
  .join("projects as p", "p.id", "stp.project_id")
  .select("p.project_name")
  .where({ "stp.student_id": id })
}