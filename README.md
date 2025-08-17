Help Desk Ticketing System

A full-stack help desk app with React (frontend) + Node/Express (backend) + MongoDB Atlas. Supports JWT auth, role-based access (REQUESTER/STAFF/MANAGER), ticket CRUD, and SLA rules that compute due times and flag tickets At Risk before breach.
Features

 Email/password login with JWT

 Roles: REQUESTER, STAFF, MANAGER (RBAC)

 Tickets: create, list, view, update; filters & search

 SLA rules per priority; auto-compute dueAt, mark At Risk 1h before breach

Clean API with Express + Mongoose

CI via GitHub Actions (Node 20, build & test)

 Jira integration (link commits/PRs by issue key, e.g., TASK-12)

 SysML diagrams (Requirements, BDD, Parametric) under /docs

Tech Stack

Frontend: React, React Router, Axios, Context/Zustand (auth state), Tailwind (optional)
Backend: Node.js, Express, Mongoose, JWT, bcrypt, Helmet, CORS
DB: MongoDB Atlas
CI: GitHub Actions

Repository Structure
TicketSystem/
  backend/
    src/
      config/        # env.js, db.js
      models/        # User.js, Ticket.js, SLA.js
      controllers/   # authController.js, ticketsController.js
      routes/        # authRoutes.js, ticketRoutes.js, slaRoutes.js
      middleware/    # auth.js (requireAuth, requireRole)
      app.js         # Express app (or server.js as entry)
      server.js
    scripts/         # seed.js
    package.json
    .env.example
  frontend/
    src/
      pages/         # Login.jsx, Register.jsx, Tasks.jsx, etc.
      components/    # Navbar, RequireAuth, etc.
      context/       # AuthContext.jsx
      api/           # axiosConfig.js (optional)
      App.js
    package.json
    .env.example
  .github/workflows/ci.yml
  docs/              # screenshots, SysML PNGs
  README.md

Getting Started
1) Prereqs

Node.js v18+ (20 recommended)

A MongoDB Atlas cluster (or local Mongo)
