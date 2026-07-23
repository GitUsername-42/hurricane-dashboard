# Hurricane Intelligence Dashboard

## Development Context / Handoff Document

This document summarizes the current state of the project so another developer or ChatGPT session can immediately continue development.

---

# Project Goal

Build a professional Hurricane Intelligence Dashboard using React and JavaScript.

The project is a university capstone for a React/JavaScript course.

TypeScript is intentionally **not** being used for this version.

---

# Current Technology Stack

* React
* JavaScript
* Vite
* React Query
* Zustand
* React Leaflet
* Leaflet
* Axios

---

# Working Features

The application currently works correctly.

Implemented features include:

* Live NOAA alert retrieval
* Automatic polling (30-second refresh)
* Interactive Leaflet map
* Alert markers
* Marker popups
* Alert detail drawer
* Alert filtering
* Browser notifications
* User-selectable notification types
* Zustand global state
* React Query data fetching

The application is stable.

---

# Major Decisions

## Mapping Library

Leaflet

Reason:

Earlier MapLibre implementation failed because the target development environment could not initialize WebGL.

Leaflet provides reliable rendering without requiring WebGL.

---

## Language

JavaScript

Reason:

Capstone requirements.

Future TypeScript conversion may occur after project completion.

---

## Framework

React + Vite

Reason:

Modern React ecosystem.

Fast development.

Simple deployment.

---

# Project Philosophy

Architecture should remain modular.

Recommended organization:

components/

hooks/

pages/

services/

store/

styles/

utilities/

Each component should have a single responsibility.

---

# Completed Refactor

Notification system has been modularized.

Current custom hooks:

* useAlerts
* useAlertNotifications
* useNotificationPermission

Current Zustand responsibilities:

* Alert filters
* Selected alert
* Notification preferences

Notification logic is no longer embedded directly inside MapPage.

---

# Current MapPage Responsibilities

MapPage currently:

* Loads NOAA alerts
* Initializes alert filters
* Filters alerts
* Requests notification permission
* Runs notification hook
* Renders layout

This is acceptable for MVP.

Large architectural refactors should wait until additional features are complete.

---

# Immediate Development Priorities

Priority 1

UI polish

Priority 2

NOAA polygons

Priority 3

National Hurricane Center integration

Priority 4

Analytics dashboard

Priority 5

Historical hurricane explorer

---

# Current File Organization

pages/

MapPage.jsx

components/

AlertMap

AlertSidebar

AlertDetailDrawer

NotificationSettings

MapLegend

hooks/

useAlerts

useAlertNotifications

useNotificationPermission

services/

notifications

store/

appStore

---

# Development Rules

Maintain a working build after every change.

Avoid introducing multiple architectural refactors simultaneously.

Implement one feature completely before starting another.

Test after every implementation.

Resolve warnings before moving forward.

---

# Recommended Development Workflow

For each feature:

1. Review architecture.
2. Identify files to modify.
3. Implement incrementally.
4. Verify application builds.
5. Test in browser.
6. Commit changes.

---

# Current Status

Application builds successfully.

Application runs successfully.

No known React Hook issues.

Notification refactor is complete.

Application is ready for new feature development.

---

# Next Milestone

UI Polish

Suggested tasks:

* Create application header
* Improve sidebar styling
* Modernize color palette
* Improve alert cards
* Add loading spinner
* Improve popup styling
* Responsive layout
* Theme support

Once UI polish is complete, begin NOAA polygon rendering followed by National Hurricane Center integration.

---

# Guidance for Future ChatGPT Sessions

Treat the current codebase as the stable baseline.

Do not restart the project.

Do not replace the existing architecture.

Extend the current implementation incrementally.

When proposing changes:

* List affected files first.
* Explain why each change is needed.
* Keep the application runnable after every implementation step.
* Prefer small, verifiable changes over large rewrites.
* Preserve existing functionality unless a change is explicitly requested.

The objective is to evolve the MVP into a polished, production-style Hurricane Intelligence Dashboard while maintaining stability throughout development.
