const db = require("../../config/dbConfig");

module.exports = {
  findProjects,
  findByStudentId
};

function findProjects() {
  return db("projects").select("id", "project_name");
}

function findByStudentId(id) {
  return db("projects")
    .where({ id })
    .first();
}

function getStudentProjects(id) {
  return db("studentsTprojects as stp")
  .join("projects as p", "p.id", "stp.project_id")
  .select("p.project_name")
  .where({ "stp.student_id": id })
}