const { Pool } = require('pg');
require('dotenv').config();
const { TextEncoder, TextDecoder } = require('util');

const PG_URI = process.env.DATABASE_URI;
console.log('PG_URI:', PG_URI);

const pool = new Pool({
  connectionString: PG_URI,
});

/* Database Schema

3 tables: comment, listing, users

users table:
  username varchar(20) not null and unique
  password varchar (20) not null
  zip code varchar (5)
  id serial primary key

listing table:
  title varchar(20) not null
  listing_body varchar(100) not null
  zipcode varchar(5) not null
  id serial primary key
  user_id int foreign key that links to user(id)

comment table:
  comment_body varchar(100) not null
  id serial primary key
  listing_id int foreign key that links to listing(id)

*/

module.exports = {
  query: (text, params, callback) => {
    console.log('querying database with: ', text);
    return pool.query(text, params, callback);
  },
};


