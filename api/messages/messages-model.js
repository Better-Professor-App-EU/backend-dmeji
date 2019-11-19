const db = require("../../config/dbConfig");

module.exports = {
  addMessage,
  findMessages,
  findById,
};

function findMessages() {
  return db
    .select({ student_name: "name" }, "text", "send_to_self", "time_stamp")
    .from("messages")
    .join("students", "messages.student_id", "=", "students.id");
}

async function addMessage(message) {
  const [id] = await db("messages").insert(message, "id");

  return findById(id);
}

function findById(id) {
  return db("messages")
    .where({ id })
    .first();
}
