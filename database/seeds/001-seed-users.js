const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  return knex("users")
    .truncate()
    .then(function() {
      return knex("users").insert([
        {
          id: 1,
          username: "Profsmalls",
          password: bcrypt.hashSync("user1", 11)
        },
        {
          id: 2,
          username: "Profbigs",
          password: bcrypt.hashSync("user2", 11)
        },
        {
          id: 3,
          username: "Profmediums",
          password: bcrypt.hashSync("user3", 11)
        }
      ]);
    });
};
