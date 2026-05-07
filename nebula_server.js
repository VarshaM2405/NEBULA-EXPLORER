const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const Planet = require('./nebula_schema');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// REDIRECT ROUTE - FORCED PRIORITY
app.get('/', (req, res) => {
  console.log('📡 Root request received - Redirecting to Explorer HUD...');
  res.redirect('/nebula_explorer.html');
});

app.use(express.static(__dirname)); // Serve static files

mongoose.connect('mongodb://localhost:27017/nebula_db')
.then(() => console.log('🌌 Nebula Database Connected'))
.catch(err => console.error('❌ Connection Error:', err));

// GET all discoveries
app.get('/api/discoveries', async (req, res) => {
  try {
    const discoveries = await Planet.find().sort({ discoveredAt: -1 });
    res.json(discoveries);
  } catch (err) {
    res.status(500).json({ error: 'Failed to retrieve logs' });
  }
});

// POST new discovery
app.post('/api/discoveries', async (req, res) => {
  try {
    const newPlanet = new Planet(req.body);
    const saved = await newPlanet.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: 'Invalid discovery log data' });
  }
});

app.listen(PORT, () => {
  console.log('-------------------------------------------');
  console.log('🚀 Mission Control: [ONLINE]');
  console.log(`🔗 Link: http://localhost:${PORT}/nebula_explorer.html`);
  console.log('-------------------------------------------');
});
