const { Pool } = require('pg');

const pool = new Pool({
  user: 'u0_a310',
  host: 'localhost',
  database: 'postgres',
  port: 5432,
});

module.exports = pool;

