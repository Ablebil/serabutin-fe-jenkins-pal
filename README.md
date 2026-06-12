# Serabutin Frontend

A modern two-sided local services marketplace platform where clients post jobs and workers discover opportunities, place bids, complete work, and build trust through reviews and ratings.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-Frontend-646CFF?logo=vite)
![React Router](https://img.shields.io/badge/React_Router-v7-CA4245?logo=reactrouter)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-Server_State-FF4154?logo=reactquery)
![Zustand](https://img.shields.io/badge/Zustand-Client_State-000000)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38BDF8?logo=tailwindcss)
![Docker](https://img.shields.io/badge/Docker-Deployment-2496ED?logo=docker)
![NGINX](https://img.shields.io/badge/NGINX-SPA_Serving-009639?logo=nginx)

---

## Overview

Serabutin is a modern local services marketplace platform built with **React 19**, **TypeScript**, and **Vite**.

The platform connects:
- **Clients** - users who post jobs/tasks
- **Workers** - users who browse jobs and submit bids

The application is designed with a scalable feature-first architecture, optimized server-state management, and a production-ready deployment workflow using Docker + NGINX.

## Preview

<img width="1919" height="941" alt="Serabutin Preview" src="https://github.com/user-attachments/assets/2b166d4b-134e-4ecc-9b15-9d3d128d1846" />

## Features

### Core Marketplace Features
- Authentication & protected routes
- Client and worker profile management
- Job posting with budget, location, schedules, and descriptions
- Advanced job search & filtering
- Infinite scrolling job discovery
- Worker bidding system
- Bid acceptance & cancellation flow
- Two-way ratings & reviews
- Regency/District location integration

### Technical Features
- React 19 + Vite ultra-fast SPA
- Feature-first scalable architecture
- TanStack Query server-state caching
- Zustand persistent client state
- Token refresh interceptor handling
- Tailwind CSS v4 design system
- Shadcn UI component primitives
- Dockerized deployment
- NGINX SPA routing fallback
- TypeScript project references
- ESLint flat configuration
- React Compiler enabled

## Requirements

- Node.js >= 20
- npm or pnpm
- Docker & Docker Compose (optional, for containerized setup)

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd serabutin-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Configure the required environment variables in `.env`. See [Environment Variables](#environment-variables) for details.

### 4. Start Development Server

```bash
npm run dev
```

The application will be running locally managed by Vite.

## Running with Docker

### Build Container
```bash
docker compose build
```

### Run Application
```bash
docker compose up -d
```
Application will be exposed on `http://localhost:3000`.

## Environment Variables

| Variable       | Description          |
| -------------- | -------------------- |
| `VITE_API_URL` | Backend API base URL |

## Architecture Overview

The application follows a **feature-first architecture** to improve scalability, maintainability, and team collaboration.

### Architecture Principles
- **Feature Isolation:** Each feature owns its components, hooks, services, schemas, stores, and utilities. This minimizes coupling between domains.
- **Shared Infrastructure:** Reusable abstractions are centralized under `src/shared`.
- **State Separation:** Server state is managed by TanStack React Query, while client state is managed by Zustand.

## Routing System

Routing is composed in `App.tsx` using React Router v7, nested layouts, protected routes, and authentication guards.

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

## Data Flow

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

## State Management

### Server State — TanStack Query
Used for API fetching, caching, pagination, synchronization, and background refetching.
Optimizations include `keepPreviousData`, query invalidation, cursor pagination, and cache-aware updates.

### Client State — Zustand
Used for authentication session, persisted auth state, review drafts, and lightweight UI state.

## Styling System

Serabutin uses **Tailwind CSS v4** with a CSS-first configuration and design tokens in `App.css`. It also utilizes **Shadcn UI** primitives and custom semantic palettes to ensure consistent UI, scalable theming, and a fast styling workflow.

## Authentication Flow

Authentication includes Login, Registration, Verification, Session hydration, Route protection, and Token refresh handling.

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

## API & Services

The frontend communicates through an Axios-based service layer. The app handles `snake_case` to `camelCase` transformations at API boundaries for cleaner frontend conventions.

| Domain         | Purpose                |
| -------------- | ---------------------- |
| Auth Service   | Login/register/session |
| Jobs Service   | Job CRUD & discovery   |
| Bid Service    | Bidding operations     |
| User Service   | Profiles & user data   |
| Review Service | Ratings & reviews      |

## Performance Optimizations

- React Query intelligent caching
- Infinite scrolling with IntersectionObserver
- Cursor-based pagination
- React Compiler support
- Lightweight Zustand stores
- Feature-based lazy scalability
- Optimized SPA deployment via NGINX

## Project Structure

```text
serabutin-frontend/
├── src/
│   ├── components/ui/           # UI component primitives
│   ├── features/                # Business domains
│   ├── shared/                  # Shared infrastructure
│   ├── App.css                  # Global styles and Tailwind directives
│   ├── App.tsx                  # Root application
│   └── main.tsx                 # Application entry
├── docker-compose.prod.yaml     # Production deployment compose
├── Dockerfile                   # Multi-stage NGINX build
├── Jenkinsfile                  # Jenkins CI/CD pipeline configuration
└── package.json                 # Scripts and dependencies
```

## Available Scripts

| Script            | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Production build         |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

## CI/CD Pipeline

This project uses **Jenkins** as the automation server to handle Continuous Integration and Continuous Delivery (CI/CD). Deployments are triggered automatically via GitHub Webhooks with no manual deployment needed.

### Architecture Overview

```text
Developer Push
      │
      ▼
   GitHub (webhook trigger)
      │
      ▼
Jenkins Server (self-hosted VM)
  ├── Checkout source code
  ├── Install dependencies & Lint
  ├── Build React app (Vite)
  ├── Build multi-stage Docker image
  ├── Push image to Docker Hub
  └── Deploy to Production Server via SSH
            │
            ▼
     Production Server
  ├── Pull latest Docker image
  └── docker compose up -d
```

### Pipeline Stages (`Jenkinsfile`)

| Stage | Description |
| ----- | ----------- |
| `Checkout` | Pulls the latest source code from GitHub |
| `Install Dependencies` | Runs `npm ci` inside a `node:24-alpine` Docker agent |
| `Lint` | Runs `npm run lint` to enforce code quality |
| `Build Frontend` | Compiles the React app with Vite (`npm run build`) |
| `Docker Login` | Authenticates to Docker Hub |
| `Build Image` | Builds a multi-stage image (Node builder → NGINX static server) |
| `Push Image` | Pushes the image to Docker Hub |
| `Copy Compose Files` | SCPs `docker-compose.prod.yaml` to the production server |
| `Deploy` | SSHes into the production server, pulls the new image, and runs `docker compose up -d` |

*Note: Unlike the backend pipeline, the frontend deployment only handles container orchestration and static asset serving via NGINX without executing any database migrations.*

## Architecture Diagram

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

## Developer Experience

**Included Tooling:**
- ESLint flat config
- TypeScript project references
- React Compiler
- Feature-first organization
- Shared infrastructure abstractions
- Typed service architecture

## Scalability Considerations

The codebase is structured for long-term scalability through feature modularization, isolated business domains, reusable shared infrastructure, centralized API communication, predictable state separation, and a scalable routing structure.

## Known Gaps and Future Improvements

**Current missing areas:**
- Automated testing
- Error boundary implementation
- `.env.example`
- Monitoring/logging integration

**Potential future improvements:**
- Unit and E2E testing
- Analytics
- Role-based access control
- Real-time notifications
- WebSocket support

## Contribution Guide

Contributions are welcome.

### Recommended Workflow

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
Longlife learner