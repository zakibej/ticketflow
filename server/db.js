const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("data.db");

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    password_hash TEXT,
    created_at INTEGER
  )`);

  db.run(`CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER,
    title TEXT,
    status TEXT,
    priority TEXT,
    due_date TEXT,
    created_at INTEGER
  )`);
});

module.exports = db;
