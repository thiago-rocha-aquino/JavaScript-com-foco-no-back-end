import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

// Initialize SQLite database
const db = new sqlite3.Database('./database.sqlite', (err) => {
  if (err) {
    console.error('Error opening database:', err);
  } else {
    console.log('Connected to SQLite database');
    // Create users table if it doesn't exist
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        phone TEXT NOT NULL,
        address TEXT NOT NULL,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/api/register', (req, res) => {
  const { name, email, phone, address } = req.body;

  const sql = `INSERT INTO users (name, email, phone, address) VALUES (?, ?, ?, ?)`;
  db.run(sql, [name, email, phone, address], function(err) {
    if (err) {
      console.error('Error registering user:', err);
      return res.status(500).json({ error: 'Error registering user' });
    }
    res.status(201).json({ 
      message: 'User registered successfully',
      userId: this.lastID 
    });
  });
});

app.get('/api/users', (req, res) => {
  const sql = `SELECT * FROM users`;
  db.all(sql, [], (err, rows) => {
    if (err) {
      console.error('Error fetching users:', err);
      return res.status(500).json({ error: 'Error fetching users' });
    }
    res.json(rows);
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
