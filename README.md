# Enterprise Analytics Dashboard

## Overview

Enterprise Analytics Dashboard is a React + TypeScript analytics application built with Material UI. The project focuses on reusable components, responsive layouts, feature-based architecture, and practical enterprise dashboard functionality.

## Tech Stack

* React
* TypeScript
* Vite
* Material UI
* MUI X Charts
* MUI X Date Pickers
* React Router
* Day.js

## Getting Started

```bash
npm install
npm run dev
```

## Current Features

### Application Layout

* Responsive application shell
* Header and sidebar navigation
* Collapsible sidebar
* Active navigation state
* Route-based page navigation
* Responsive layout across screen sizes

### Dashboard

* KPI metric cards
* Revenue trend visualization
* Responsive dashboard layout
* Mock data for dashboard metrics and revenue

### Reports

* Date range filtering
* Report type filtering
* Region filtering
* Status filtering
* Apply and clear filter actions
* Loading state
* Reports summary with total value and status counts
* Responsive reports table
* Empty-results state
* Column sorting
* Pagination
* Pagination reset based on applied filter changes

### Users

* User summary metrics for total, active, and inactive users
* Name/email search with role, department, and status filters
* Sortable user table with a no-results state
* Mock user data and loading state
* User edit action is present; the edit form is not yet implemented

### Settings

* Settings route and placeholder page

## Project Structure

```text
src/
├── components/
├── features/
│   ├── dashboard/
│   ├── reports/
│   └── users/
├── constants/
├── layouts/
├── mock/
├── pages/
├── routes/
├── styles/
├── types/
└── utils/
```

## Development Status

### Completed

* Phase 1 — Dashboard
* Phase 2 — Reports

### Upcoming

* Phase 3 — Complete the user edit workflow
* Phase 4 — Implement settings
* Phase 5 — Polish & Testing
* Phase 6 — Documentation & Portfolio Presentation
