const db = require("../../config/dbConfig");

module.exports = {
  add,
  findMessages,
  findById,
  remove
};

function findMessages() {
  return db
    .select({ student_name: "name" }, "text", "send_to_self", "time_stamp")
    .from("messages")
    .join("students", "messages.student_id", "=", "students.id");
}

return db
  .select("project_name", "project_desc", "task_desc")
  .from("tasks")
  .join("projects", "tasks.project_id", "=", "projects.id");

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
