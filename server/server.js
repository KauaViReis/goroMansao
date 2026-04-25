import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './database.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'goro_super_secret_key_2026';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Listar produtos
app.get('/api/products', (req, res) => {
  try {
    const products = db.prepare('SELECT * FROM products').all();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Criar pedido
app.post('/api/orders', (req, res) => {
  const { customer_name, customer_email, total, items } = req.body;
  try {
    const insert = db.prepare('INSERT INTO orders (customer_name, customer_email, total, items) VALUES (?, ?, ?, ?)');
    const result = insert.run(customer_name, customer_email, total, JSON.stringify(items));
    res.status(201).json({ id: result.lastInsertRowid });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Registro de Usuário
app.post('/api/register', async (req, res) => {
  const { name, email, password } = req.body;
  
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  try {
    const existingUser = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
    if (existingUser) {
      return res.status(400).json({ error: 'E-mail já cadastrado' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const insert = db.prepare('INSERT INTO users (name, email, password) VALUES (?, ?, ?)');
    const result = insert.run(name, email, hashedPassword);
    
    const token = jwt.sign({ id: result.lastInsertRowid, email }, JWT_SECRET, { expiresIn: '1d' });
    res.status(201).json({ 
      user: { id: result.lastInsertRowid, name, email },
      token 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Login de Usuário
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'E-mail e senha são obrigatórios' });
  }

  try {
    const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
    if (!user) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1d' });
    res.json({ 
      user: { id: user.id, name: user.name, email: user.email },
      token 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
