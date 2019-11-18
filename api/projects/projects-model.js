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
