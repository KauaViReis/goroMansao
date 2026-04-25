import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dbPath = path.join(__dirname, 'goro.db');

const db = new Database(dbPath);

// Criar tabelas
db.exec(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    price REAL NOT NULL,
    profile TEXT,
    image_url TEXT,
    tag TEXT
  );

  CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_name TEXT,
    customer_email TEXT,
    total REAL,
    items TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

// Popular dados se estiver vazio
const row = db.prepare('SELECT count(*) as count FROM products').get();
if (row.count === 0) {
  const insert = db.prepare('INSERT INTO products (name, description, price, profile, image_url, tag) VALUES (?, ?, ?, ?, ?, ?)');
  
  insert.run(
    'Hyper Focus', 
    'Foco absoluto sem distrações. A energia que abastece o seu setup. Desenvolvido com precisão técnica para máxima performance.',
    24.90,
    'Concentração Extrema',
    '/assets/hyper_focus.png',
    'Novo Drop'
  );

  insert.run(
    'Pixel Power', 
    'A vantagem competitiva para o grind diário. Design cyberpunk, reflexos aprimorados e zero crash. O verdadeiro nectar dos deuses cibernéticos.',
    22.90,
    'Gamer / Reflexos',
    '/assets/pixel_power.png',
    'Mais Vendido'
  );

  insert.run(
    'Berserker Blood', 
    'Puro torque. Para aqueles treinos que exigem força bruta. Composto agressivo com vasodilatadores e estimulantes táticos.',
    29.90,
    'Pré-Treino / Força',
    '/assets/berserker_blood.png',
    'Elite'
  );

  insert.run(
    'Vórtex Cítrico', 
    'Explosão cítrica sem taquicardia. Foco puro e sustentável para longas sessões. Taste puro, precisão industrial na formulação.',
    19.90,
    'Explosão Cítrica',
    '/assets/vortex_citrico.png',
    'Classic'
  );

  insert.run(
    'Zero Crash', 
    'O doce da vitória, sem o crash da cafeína. Formulação avançada zero açúcar. Visão de cria para o grind diário.',
    21.90,
    'Doce / Zero Açúcar',
    '/assets/zero_crash.png',
    'Classic'
  );
}

export default db;
