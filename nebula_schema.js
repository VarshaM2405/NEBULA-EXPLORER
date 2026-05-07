const mongoose = require('mongoose');

const planetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  distance: { type: Number, required: true }, // in Light Years
  hazardLevel: { type: Number, min: 1, max: 10 },
  atmosphere: String,
  temperature: String,
  composition: String,
  description: String,
  image: String, // Relative path to the image
  discoveredAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Planet', planetSchema);
