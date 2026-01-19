# Abhinav's Portfolio & Resume

A modern, interactive portfolio and resume website showcasing skills, experience, projects, and achievements.

**Live URL:** https://abhinav.cv

## Project Overview

This is a personal portfolio/resume application built with modern web technologies and containerized with Docker for easy deployment and development. The application features a responsive design with interactive components and smooth animations.

## Project Directory

```
├── README.md # Documentation
├── components.json # Component library configuration
├── docker-compose.yml # Docker Compose configuration
├── Dockerfile # Docker configuration
├── index.html # Entry file
├── package.json # Package management
├── postcss.config.js # PostCSS configuration
├── public # Static resources directory
│   ├── MyResume.pdf # Resume PDF file
│   ├── favicon.png # Icon
│   └── images # Image resources
├── src # Source code directory
│   ├── App.tsx # Entry file
│   ├── components # Components directory
│   ├── context # Context directory
│   ├── hooks # Common hooks directory
│   ├── index.css # Global styles
│   ├── lib # Utility library directory
│   ├── main.tsx # Entry file
│   ├── routes.tsx # Routing configuration
│   ├── pages # Pages directory
│   ├── services # Service modules directory
│   ├── types # Type definitions directory
├── tsconfig.app.json # TypeScript frontend configuration file
├── tsconfig.json # TypeScript configuration file
├── tsconfig.node.json # TypeScript Node.js configuration file
└── vite.config.ts # Vite configuration file
```

## Tech Stack

Vite, TypeScript, React, Supabase

## Getting Started

### Quick Start with Docker (Recommended)

The easiest way to run this project is with Docker Compose:

```bash
# Clone or download the project
# Navigate to the project directory
cd Portfolio

# Start the application
docker-compose up --build

# Access the application
# Open your browser and visit: http://localhost:5173
```

The application will be automatically built and running in a container.

### Local Development Setup

If you prefer to develop locally without Docker:

#### Environment Requirements

- Node.js ≥ 20
- npm ≥ 10 or pnpm

```bash
# Verify installation
node -v   # Should show v20.x.x or higher
npm -v    # Should show 10.x.x or higher
```

#### Setup Steps

```bash
# Step 1: Navigate to the project directory
cd Portfolio

# Step 2: Install dependencies
npm install
# or with pnpm
pnpm install

# Step 3: Start the development server
npm run dev -- --host 127.0.0.1
# or with pnpm
pnpm dev -- --host 127.0.0.1

# Step 4: Open your browser and visit
http://127.0.0.1:5173
```

### Build for Production

```bash
npm run build
```
