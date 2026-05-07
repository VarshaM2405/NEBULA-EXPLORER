const mongoose = require('mongoose');
const Planet = require('./nebula_schema');

mongoose.connect('mongodb://localhost:27017/nebula_db')
.then(async () => {
  console.log('✅ Connected to Nebula Database');
  
  await Planet.deleteMany({}); // Clear old data
  
  const planets = [
    {
      name: 'Xylos-9',
      type: 'Neon Gas Giant',
      distance: 420,
      hazardLevel: 8,
      description: 'A massive gas giant with high concentrations of neon, creating permanent violet aurorae.',
      image: 'exoplanet.png'
    },
    {
      name: 'Cryo-Prime',
      type: 'Frozen Wasteland',
      distance: 15,
      hazardLevel: 4,
      description: 'An icy world with underground thermal vents that might harbor primitive life.',
      image: 'exoplanet.png' // Using same for now, or I'll generate more later
    },
    {
      name: 'Nova Centauri',
      type: 'Binary Star System Planet',
      distance: 4.2,
      hazardLevel: 2,
      description: 'The closest habitable terrestrial world discovered outside our solar system.',
      image: 'exoplanet.png'
    }
  ];

  await Planet.insertMany(planets);
  console.log('🚀 Mission Control: Discoveries seeded successfully!');
  mongoose.connection.close();
})
.catch(err => console.error('❌ Mission Failure:', err));
