let date1 = new Date(2019, 09, 11, 05, 0, 0);

let date2 = new Date(2019, 10, 10, 03, 0, 0);

let date3 = new Date(2019, 11, 12, 04, 0, 0);

exports.seed = function(knex) {
  return knex("projectsTdeadlines").insert([
    {
      project_id: 1,
      deadline: "review",
      deadline_type: JSON.stringify(date1)
    },
    {
      project_id: 2,
      deadline: "grade",
      deadline_type: JSON.stringify(date2)
    },
    {
      project_id: 3,
      deadline: "project topic",
      deadline_type: JSON.stringify(date3)
    }
  ]);
};
