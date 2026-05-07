# 🌌 Nebula Explorer: Immersive HUD

An elite, highly immersive sci-fi planetary dashboard built with **React**, **Node.js/Express**, and **MongoDB**. Featuring advanced browser APIs for a professional "WOW" demonstration.

## 🛰️ Key Features
- **Retro Terminal Login**: A boot-sequence authentication layer requiring `SCAN` command.
- **AI Mission Briefing**: Automated robotic voice reports using Web Speech API.
- **Interstellar Static Engine**: Reactive "cosmic hum" modulated by mouse movement via Web Audio API.
- **Tactile Audio Feedback**: Synthesized mechanical typing clicks for total immersion.
- **Deep Scan HUD**: High-contrast, tech-heavy UI for planetary metadata and hazard indexing.

## 🛠️ Setup & Execution

### 1. Prerequisites
- **Node.js** installed.
- **MongoDB** running locally on `mongodb://localhost:27017/nebula_db`.

### 2. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 3. Initialize Database (Optional)
Populate the database with pre-configured planetary data:
```bash
node nebula_seed.js
```

### 4. Launch the Dashboard
Start the Mission Control server:
```bash
node nebula_server.js
```

### 5. Access the HUD
Open your browser and navigate to the link displayed in your terminal:
👉 **[http://localhost:5000/nebula_explorer.html](http://localhost:5000/nebula_explorer.html)**

---

## 🕹️ Pilot Instructions
1.  **Initialize Uplink**: Click the "Initialize System" button on the entry screen to activate the audio engine.
2.  **Authenticate**: Type `SCAN` in the terminal and press Enter to unlock the HUD.
3.  **Tuning**: Toggle "Audio Uplink" in the header to activate the reactive cosmic background hum.
4.  **Deep Scan**: Interact with planetary cards to trigger AI-voiced mission briefings.

---
*Created for elite galactic exploration. Secure Link Active.*
