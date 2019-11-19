exports.seed = function(knex) {
  return knex("usersTstudents").insert([
    {
      user_id: 1,
      student_id: 3
    },
    {
      user_id: 2,
      student_id: 2
    },
    {
      user_id: 3,
      student_id: 1
    }
  ]);
};
