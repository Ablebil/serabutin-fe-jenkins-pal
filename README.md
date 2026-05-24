# Serabutin Frontend

<div align="center">

### Local Services Marketplace Platform

A modern two-sided marketplace where clients post jobs and workers discover opportunities, place bids, complete work, and build trust through reviews and ratings.

<br/>

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-Frontend-646CFF?logo=vite)
![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?logo=reactrouter)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-Server_State-FF4154?logo=reactquery)
![Zustand](https://img.shields.io/badge/Zustand-Client_State-000000)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38BDF8?logo=tailwindcss)
![Docker](https://img.shields.io/badge/Docker-Deployment-2496ED?logo=docker)
![NGINX](https://img.shields.io/badge/NGINX-SPA_Serving-009639?logo=nginx)

</div>

---

## 📌 Overview

Serabutin is a modern local services marketplace platform built with **React 19**, **TypeScript**, and **Vite**.

The platform connects:

* **Clients** → users who post jobs/tasks
* **Workers** → users who browse jobs and submit bids

The application is designed with a scalable feature-first architecture, optimized server-state management, and a production-ready deployment workflow using Docker + NGINX.

---

# 📸 Preview

<img width="1919" height="941" alt="image" src="https://github.com/user-attachments/assets/2b166d4b-134e-4ecc-9b15-9d3d128d1846" />

---

# ✨ Features

## Core Marketplace Features

* 🔐 Authentication & protected routes
* 👤 Client and worker profile management
* 📌 Job posting with:

  * budget
  * location
  * schedules
  * descriptions
* 🔎 Advanced job search & filtering
* ♾ Infinite scrolling job discovery
* 💰 Worker bidding system
* ✅ Bid acceptance & cancellation flow
* ⭐ Two-way ratings & reviews
* 📍 Regency/District location integration

---

## Technical Features

* ⚡ React 19 + Vite ultra-fast SPA
* 🧠 Feature-first scalable architecture
* 🔄 TanStack Query server-state caching
* 🗂 Zustand persistent client state
* 🔒 Token refresh interceptor handling
* 🎨 Tailwind CSS v4 design system
* 🧩 Shadcn UI component primitives
* 🐳 Dockerized deployment
* 🌐 NGINX SPA routing fallback
* 📦 TypeScript project references
* 🧹 ESLint flat configuration
* 🚀 React Compiler enabled

---

# 🏗 Architecture Overview

## Frontend Architecture

The application follows a **feature-first architecture** to improve scalability, maintainability, and team collaboration.

```text
src/
├── features/
│   ├── auth/
│   ├── jobs/
│   └── user/
│
├── shared/
│   ├── api/
│   ├── components/
│   ├── hooks/
│   ├── layouts/
│   ├── lib/
│   └── ui/
│
├── routes/
└── App.tsx
```

---

## Architecture Principles

### Feature Isolation

Each feature owns:

* components
* hooks
* services
* schemas
* stores
* utilities

This minimizes coupling between domains.

### Shared Infrastructure

Reusable abstractions are centralized under `src/shared`.

### State Separation

* **Server state** → TanStack React Query
* **Client state** → Zustand

---

# 🧭 Routing System

Routing is composed in `App.tsx` using:

* React Router v7
* Nested layouts
* Protected routes
* Authentication guards

Example flow:

```text
Public Routes
├── Login
├── Register
└── Verification

Protected Routes
├── Dashboard
├── Jobs
├── Bids
├── Reviews
└── Profiles
```

---

# 🔄 Data Flow

```text
UI Components
      ↓
Feature Hooks
      ↓
Service Layer (Axios)
      ↓
API Backend
      ↓
React Query Cache
      ↓
UI Revalidation
```

---

# 🧠 State Management

## Server State — TanStack Query

Used for:

* API fetching
* caching
* pagination
* synchronization
* background refetching

Optimizations:

* `keepPreviousData`
* query invalidation
* cursor pagination
* cache-aware updates

---

## Client State — Zustand

Used for:

* authentication session
* persisted auth state
* review drafts
* lightweight UI state

---

# 🎨 Styling System

Serabutin uses:

* **Tailwind CSS v4**
* CSS-first configuration
* design tokens in `App.css`
* **Shadcn UI** primitives
* custom semantic palettes

Benefits:

* consistent UI
* scalable theming
* reusable components
* fast styling workflow

---

# 🔐 Authentication Flow

Authentication includes:

* Login
* Registration
* Verification
* Session hydration
* Route protection
* Token refresh handling

## Flow Summary

```text
User Login
    ↓
Access Token Stored
    ↓
Axios Interceptor
    ↓
Automatic Token Refresh
    ↓
Protected Routes Accessible
```

---

# 🌐 API & Services

The frontend communicates through an Axios-based service layer.

## Main Service Domains

| Domain         | Purpose                |
| -------------- | ---------------------- |
| Auth Service   | Login/register/session |
| Jobs Service   | Job CRUD & discovery   |
| Bid Service    | Bidding operations     |
| User Service   | Profiles & user data   |
| Review Service | Ratings & reviews      |

---

## API Transformation Strategy

The app handles:

* `snake_case`
* `camelCase`

transformations at API boundaries for cleaner frontend conventions.

---

# ⚡ Performance Optimizations

## Implemented Optimizations

* React Query intelligent caching
* Infinite scrolling with IntersectionObserver
* Cursor-based pagination
* React Compiler support
* Lightweight Zustand stores
* Feature-based lazy scalability
* Optimized SPA deployment via NGINX

---

# 📁 Folder Structure

```text
src/
├── features/        # Business domains
├── shared/          # Shared infrastructure
├── routes/          # Routing definitions
├── assets/          # Static assets
├── App.tsx          # Root application
└── main.tsx         # Application entry
```

---

# ⚙ Environment Variables

Create a `.env` file:

```env
VITE_API_URL=http://localhost:8080/api
```

| Variable       | Description          |
| -------------- | -------------------- |
| `VITE_API_URL` | Backend API base URL |

---

# 🚀 Installation

## Prerequisites

* Node.js 20+
* npm / pnpm
* Docker (optional)

---

## Clone Repository

```bash
git clone <repository-url>
cd serabutin-frontend
```

---

## Install Dependencies

```bash
npm install
```

---

# 💻 Local Development

Start development server:

```bash
npm run dev
```

Vite will run the application locally.

---

# 📜 Available Scripts

| Script            | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Production build         |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

---

# 🏭 Production Build

Build the application:

```bash
npm run build
```

Preview build locally:

```bash
npm run preview
```

---

# 🐳 Docker Deployment

## Build Container

```bash
docker compose build
```

## Run Application

```bash
docker compose up -d
```

Application will be exposed on:

```text
http://localhost:3000
```

---

## Deployment Stack

* Docker
* NGINX
* SPA fallback routing
* Static asset serving

---

# 🧩 Suggested Architecture Diagram

```text
┌──────────────────┐
│ React Frontend   │
│ React Router     │
│ Zustand          │
│ React Query      │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Axios Service    │
│ Interceptors     │
└────────┬─────────┘
         │
         ▼
┌──────────────────┐
│ Backend API      │
└──────────────────┘
```

---

# 🛠 Developer Experience

## Included Tooling

* ESLint flat config
* TypeScript project references
* React Compiler
* Feature-first organization
* Shared infrastructure abstractions
* Typed service architecture

---

# 📈 Scalability Considerations

The codebase is structured for long-term scalability through:

* feature modularization
* isolated business domains
* reusable shared infrastructure
* centralized API communication
* predictable state separation
* scalable routing structure

---

# ⚠ Known Gaps / Future Improvements

Current missing areas:

* ❌ Automated testing
* ❌ CI/CD pipeline
* ❌ Error boundary implementation
* ❌ `.env.example`
* ❌ Monitoring/logging integration

Potential future improvements:

* unit testing
* E2E testing
* analytics
* role-based access control
* real-time notifications
* websocket support

---

# 🤝 Contribution Guide

Contributions are welcome.

## Recommended Workflow

```bash
# Create branch
git checkout -b feature/my-feature

# Commit changes
git commit -m "feat: add new feature"

# Push branch
git push origin feature/my-feature
```

Then open a Pull Request.

---

<div align="center">

### Longlife learner

</div>
