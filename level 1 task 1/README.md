# Personal Developer Portfolio (Level 1 Task 1)

This project is a modern, enterprise-grade personal portfolio built with React and Vite. It serves as a comprehensive showcase of skills, projects, and achievements for an AI & Cyber Security Developer.

## Features
- **Data-Driven Architecture**: All portfolio data (projects, skills, stats) is decoupled from the UI and managed entirely in src/config/cardsConfig.js.
- **Reusable Components**: Powered by a highly polymorphic Card.jsx component that dynamically adapts to render skills, projects, and custom badges.
- **Theme Engine**: Built-in Light and Dark modes ("Emerald & Obsidian" palette) utilizing vanilla CSS variables and local storage persistence.
- **Routing**: Client-side routing with eact-router-dom (HashRouter configured to prevent 404s on static hosts).

## Pages Include:
- **Home**: Hero section, quick stats, and featured projects showcase.
- **About**: Narrative biography and educational background.
- **Projects**: Filterable catalog of full-stack, AI, and cybersecurity projects.
- **Skills**: Categorized technical proficiency matrix.
- **Contact**: Interactive section with clipboard actions for email and social links.

## Getting Started
To run this project locally:

`ash
npm install
npm run dev
`

The development server will launch on http://localhost:5173.
