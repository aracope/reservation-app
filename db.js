/** Database for lunchly. */

const { Client } = require("pg");

// Use the DATABASE_URL from the environment, or fall back to local lunchly
const db = new Client({
  connectionString: process.env.DATABASE_URL || "postgresql:///lunchly"
});

db.connect();

module.exports = db;
