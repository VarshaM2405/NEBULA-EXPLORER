# 🌌 NEBULA EXPLORER: Interstellar Mission Log

![Nebula HUD](exoplanet.png)

> **"Exploring the unknown, one signal at a time."**

Nebula Explorer is a premium, full-stack Interstellar Discovery Dashboard. Built with a high-end Sci-Fi HUD aesthetic, it allows explorers to log planetary discoveries, monitor hazard levels, and visualize deep-space signals in real-time.

---

## 🛰️ MISSION FEATURES

- **🛸 Cinematic HUD**: A futuristic terminal interface with scanline animations, glitch effects, and Orbitron typography.
- **🎙️ AI Voice Briefing**: Automated robotic voice reports using Web Speech API for every discovery.
- **🎹 Mechanical Audio**: Synthesized mechanical typing clicks and reactive cosmic background hum.
- **📟 Retro Terminal**: A high-security boot-sequence authentication layer.
- **⚠️ Hazard Indexing**: Dynamic visual gauges for planetary risk assessment.

---

## 🛠️ TECH STACK

| COMPONENT | SPECIFICATION |
| :--- | :--- |
| **Frontend** | React, Tailwind CSS, Google Fonts (Orbitron/Michroma) |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB, Mongoose |
| **Sensory** | Web Speech API, Web Audio API |
| **Deployment** | Git / GitHub |

---

## ⚡ QUICK START

### 1. Initialize the Base
```bash
npm install
```

### 2. Connect to the Nebula
Ensure your local MongoDB instance is active on `mongodb://localhost:27017/nebula_db`.

### 3. Seed the Logs
```bash
node nebula_seed.js
```

### 4. Launch Mission Control
```bash
node nebula_server.js
```

### 5. Access the HUD
Open your terminal at:
👉 **[http://localhost:5000/nebula_explorer.html](http://localhost:5000/nebula_explorer.html)**

---

## 🕹️ PILOT INSTRUCTIONS
1.  **Initialize Uplink**: Click the "Initialize System" button on the entry screen.
2.  **Authenticate**: Type `SCAN` in the terminal and press Enter to unlock the HUD.
3.  **Tuning**: Toggle "Audio Uplink" in the header to activate the reactive cosmic background hum.
4.  **Deep Scan**: Interact with planetary cards to trigger AI-voiced mission briefings.

---

## 📂 DIRECTORY STRUCTURE

- `nebula_explorer.html`: The interactive HUD dashboard.
- `nebula_server.js`: Express backend & static asset server.
- `nebula_schema.js`: Discovery data structure.
- `nebula_seed.js`: Initial planetary logs.
- `exoplanet.png`: Primary sector asset.

---

## 🔒 SECURITY PROTOCOLS
This project was developed for educational and experimental purposes. Secure link active.
