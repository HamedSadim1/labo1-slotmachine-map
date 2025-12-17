# Slotmachine Game

Een interactieve en visueel aantrekkelijke slotmachine webapplicatie gebouwd met moderne webtechnologieën. Geniet van het klassieke casino gevoel met spinning slots, score tracking, win rates en automatische spinning modi.

## ✨ Features

- **Interactieve Spinning Slots**: Drie slots die synchroon draaien met een realistische animatie.
- **Score & Statistieken**: Houd bij van je score, aantal spins, wins en win rate.
- **Auto-Spin Modus**: Schakel automatische spinning in voor hands-free gameplay.
- **Geluidseffecten**: Geniet van casino-achtige geluiden tijdens het spinnen.
- **Responsief Design**: Werkt perfect op desktop en mobiele apparaten.
- **Moderne UI**: Gebouwd met Tailwind CSS voor een strakke, professionele look.

## 🚀 Live Demo

[Live Demo Link] (voeg hier de deployment link toe indien beschikbaar)

## 🛠️ Technologieën

- **Frontend Framework**: React 19 met TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS v4
- **Icons**: React Icons
- **Audio**: Web Audio API voor geluidsgeneratie
- **State Management**: React useReducer voor complexe state

## 📦 Installatie

1. **Clone de repository**:

   ```bash
   git clone https://github.com/HamedSadim1/labo1-slotmachine-map.git
   cd labo1-slotmachine-map
   ```

2. **Installeer dependencies**:

   ```bash
   npm install
   ```

3. **Start de development server**:

   ```bash
   npm run dev
   ```

4. **Open je browser** naar `http://localhost:5174` (standaard Vite poort).

## 🎮 Gebruik

- **Spin**: Klik op de "Spin" knop om de slots te laten draaien.
- **Auto Spin**: Klik op "Auto Spin" om automatische spinning in te schakelen. Klik op "Stop" om te stoppen.
- **Reset**: Klik op "Reset" om de score en statistieken te resetten.
- **Statistieken**: Bekijk je score, aantal spins, wins en win rate in de onderste sectie.

## 🏗️ Project Structuur

```text
src/
├── components/
│   ├── Slot.tsx          # Individuele slot component
│   ├── Stats.tsx         # Statistieken weergave
│   ├── GameButton.tsx    # Herbruikbare knop component
├── hooks/
│   └── useSlotMachine.ts # Custom hook voor state management
├── utils/
│   ├── slotUtils.tsx     # Slot image utilities
│   └── soundUtils.ts     # Audio utilities
├── App.tsx               # Hoofdcomponent
├── main.tsx              # Applicatie entry point
└── types.d.ts            # TypeScript type declarations

public/
├── img/                  # Slot images
├── favicon.ico           # Favicon
└── manifest.json         # PWA manifest
```

## 🎯 Game Logic

- **Win Rate**: 50% kans om te winnen bij elke spin.
- **Score**: +100 punten bij een win.
- **Auto Spin**: Spins automatisch elke 1.5 seconden na een spin einde.
- **Geluid**: Sawtooth golf geluidsgeneratie voor casino sfeer.

## 🤝 Bijdragen

Bijdragen zijn welkom! Open een issue of pull request voor verbeteringen.

## 📄 Licentie

Dit project is gelicentieerd onder de MIT License.

## 👨‍💻 Auteur

Hamed Sadim - [GitHub](https://github.com/HamedSadim1)
