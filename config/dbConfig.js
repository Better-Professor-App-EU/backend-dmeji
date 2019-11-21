const knex = require("knex");

config = require("../knexfile.js");

const dbEnv = process.env.DB_ENV || "development"


module.exports = knex(config[dbEnv]);
