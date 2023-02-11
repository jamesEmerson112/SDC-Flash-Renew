/* eslint-disable no-undef */
const Pool = require('pg-pool');

// config for Pool
const config = {
  host: process.env.LOCAHOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: process.env.PORT_DB,
};

const pool = new Pool(config);

module.exports = pool;
