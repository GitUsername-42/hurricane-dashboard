# Hurricane Intelligence Dashboard

## Development Roadmap

### Project Summary

The Hurricane Intelligence Dashboard is a React/JavaScript web application that visualizes live NOAA weather alerts and, eventually, National Hurricane Center (NHC) tropical cyclone data. The application is intended as a capstone project for a React/JavaScript course and emphasizes modern frontend architecture, real-time data integration, GIS visualization, and scalable application design.

---

# Technology Stack

## Core

* React
* JavaScript (no TypeScript for this version)
* Vite
* React Query (TanStack Query)
* Zustand
* React Leaflet
* Leaflet
* Axios

## Future

* Chart.js or Recharts
* Turf.js
* Framer Motion
* React Router
* Netlify or Vercel deployment

---

# Current Status (Stable MVP v0.1)

## Completed

### Infrastructure

* React + Vite project
* Zustand global state
* React Query data layer
* Leaflet map
* Component-based architecture
* Custom hooks

### NOAA Integration

* Live NOAA alerts
* Automatic refresh every 30 seconds
* Marker rendering
* Popup details
* Alert detail drawer

### Alert Filtering

* Filter by alert type
* Zustand-managed filters
* Live updates

### Browser Notifications

* Permission request
* New alert detection
* User-selectable notification types
* Enable/disable notifications

### Code Quality

* React Hook issues resolved
* Refactor stabilized
* Working application

---

# Current Architecture

App

* MapPage

  * AlertSidebar

    * NotificationSettings
  * AlertMap
  * MapLegend
  * AlertDetailDrawer

Hooks

* useAlerts
* useAlertNotifications
* useNotificationPermission

Store

* appStore (Zustand)

Services

* notifications
* NOAA API service(s)

---

# Development Milestones

## Milestone 1 — UI Polish

Goals

* Responsive layout
* Header
* Footer/status bar
* Better typography
* Modern color palette
* Loading spinner
* Error banner
* Better marker icons
* Improved alert drawer
* Theme support (light/dark)

Deliverable

Professional-looking MVP suitable for demonstration.

---

## Milestone 2 — Geographic Visualization

Goals

* Draw NOAA alert polygons
* Toggle markers/polygons
* Highlight selected alert
* Zoom to selected alert
* Severity-based styling
* Interactive legend

Deliverable

Operational GIS-style dashboard.

---

## Milestone 3 — Hurricane Intelligence

Goals

Integrate live National Hurricane Center data.

Features

* Active tropical systems
* Forecast tracks
* Forecast cones
* Past tracks
* Storm category
* Wind speed
* Pressure
* Advisory history

Deliverable

True Hurricane Intelligence Dashboard.

---

## Milestone 4 — Analytics

Goals

* Alert totals
* Alerts by type
* Alerts by state
* Severity counts
* Timeline charts
* Live dashboard statistics

Deliverable

Operational analytics dashboard.

---

## Milestone 5 — Historical Storm Explorer

Goals

* Historical hurricane database
* Search by year
* Search by category
* Replay storm paths
* Historical/current comparison

Deliverable

Educational and research capabilities.

---

## Milestone 6 — Production Readiness

Goals

* Accessibility improvements
* Testing
* Error handling
* Performance optimization
* Deployment
* Documentation

Deliverable

Production-quality capstone submission.

---

# Development Standards

## Architecture

* One responsibility per component
* Custom hooks contain reusable logic
* Services contain API interactions
* Zustand stores application state only
* Components remain presentation-focused whenever practical

## Coding Style

* Functional components
* React Hooks
* Descriptive variable names
* Small reusable components
* Keep files focused and maintainable

## Workflow

Every feature should follow this sequence:

1. Design
2. Implement
3. Verify in browser
4. Resolve warnings/errors
5. Commit or create restore point

Never continue development on a broken build.

---

# Git Workflow

main

Stable versions only.

Feature branches

feature/ui-polish

feature/polygons

feature/nhc

feature/analytics

feature/history

Merge only after successful testing.

---

# Definition of Done

A milestone is complete when:

* Application compiles
* No React warnings
* No console errors
* Feature functions correctly
* Existing features remain operational
* Code is documented where appropriate
* Changes are committed
