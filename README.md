# Building Management System (BMS) Monorepo

This repository contains a starter full-stack Building Management System implementation with:

- **Frontend:** Angular-style SPA structure for dynamic dashboards and module-based UI.
- **Backend:** .NET 8 Web API for tenant, maintenance, billing, visitor, and parking operations.
- **CI/CD:** GitHub Actions workflows for validation, build, and release artifact generation.

## Repository Structure

- `frontend/` – Angular application source
- `backend/` – .NET Web API source
- `.github/workflows/` – CI/CD pipelines

## Quick Start

### Frontend

```bash
cd frontend
npm install
npm run start
```

### Backend

```bash
cd backend/src/Bms.Api
dotnet restore
dotnet run
```

## API Base URL

- Local: `https://localhost:5001/api`

## CI/CD

- Pull requests run lint/build checks.
- Main branch pushes produce downloadable build artifacts for frontend and backend packages.
