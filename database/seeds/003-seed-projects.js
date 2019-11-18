exports.seed = function(knex) {
  return knex("projects")
    .truncate()
    .then(function() {
      return knex("projects").insert([
        {
          id: 1,
          project_name: "12 rules for life"
        },
        {
          id: 2,
          project_name: "Financially stupid people"
        },
        {
          id: 3,
          project_name: "Crimes and punishment"
        }
      ]);
    });
};
