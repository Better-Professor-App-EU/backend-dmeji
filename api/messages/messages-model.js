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

async function add(student) {
  const [id] = await db("students").insert(student);

  return findById(id);
}

function findById(id) {
  return db("students")
    .where({ id })
    .first();
}
