const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Conexão com o banco (Railway injeta DATABASE_URL automaticamente)
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false } // Railway usa SSL
});

// Teste de conexão
pool.connect((err) => {
  if (err) console.log('Erro no banco:', err);
  else console.log('Conectado ao PostgreSQL no Railway!');
});

// Rota teste: GET /
app.get('/', (req, res) => {
  res.send('Backend do Agente Imobiliário rodando no Railway!');
});

// Rota exemplo: GET /leads (lista leads)
app.get('/leads', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM leads LIMIT 10');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota exemplo: POST /leads (salva novo lead)
app.post('/leads', async (req, res) => {
  const { nome, telefone, temperatura } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO leads (nome, telefone, temperatura) VALUES ($1, $2, $3) RETURNING *',
      [nome, telefone, temperatura]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Backend rodando na porta ${port}`);
});
