# DemandIQ Frontend

React + Vite dashboard for the Social Media -> Product Demand Predictor SIH project.

## Requirements
- Node.js 18+ (Node 20+ recommended)
- npm

## Run

Open terminal in this folder:

npm install
npm run dev

Then open the Vite URL shown in the terminal.

## Backend connection

The frontend expects Spring Boot at:

http://localhost:8080/api

This is configured in `src/api.js`.

The dashboard can still display demo data when the backend is unavailable. Once the Spring Boot backend is running, it attempts to load products, sales, social data and predictions.

## Important

The UI is intentionally built first so you can see the final dashboard. The product modal currently demonstrates the flow; connect its form to `POST /api/products` when we implement the full CRUD screens.

## Planned next modules

1. Product CRUD
2. Sales entry/import
3. Social trend data
4. Python ML prediction API
5. Prediction history
6. Real dashboard data
