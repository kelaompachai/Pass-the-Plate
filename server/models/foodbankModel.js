const { Pool } = require('pg');
require('dotenv').config();
const { TextEncoder, TextDecoder } = require('util');

const PG_URI = process.env.DATABASE_URI;
console.log('PG_URI:', PG_URI);

const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('querying database with: ', text);
    return pool.query(text, params, callback);
  },
};


