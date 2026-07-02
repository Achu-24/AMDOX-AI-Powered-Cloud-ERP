# AI & Dashboard Features Documentation

This documentation covers the newly integrated Analytics, AI Forecasting, and Reporting modules (Member 4 responsibility).

## Overview
The additions focus strictly on frontend presentational logic and client-side data handling, ensuring zero disruption to existing backend APIs or routing structures. All components utilize simulated JSON logic to demonstrate data visualization and predictive AI models.

## Files Added
- `src/components/dashboard/AIForecast.jsx`: Predictive analysis cards.
- `src/components/dashboard/KPICards.jsx`: Metric summaries with hover animations.
- `src/components/dashboard/DashboardCharts.jsx`: Lightweight, dependency-free CSS/SVG charts.
- `src/pages/Analytics.jsx`: Primary dashboard assembling KPIs, Charts, and Activity.
- `src/pages/Reports.jsx`: Data table interface with vanilla JS CSV export functionality.
- `src/data/sampleData.js`: Centralized mock JSON file acting as the data source.
- `src/docs/AI_FEATURES.md`: Technical documentation.

## Forecasting Logic
The forecasting operates entirely on the client side using heuristic rules mapped in `sampleData.js`. 
- **Simple Moving Average (SMA)**: Simulates predictions based on static baseline data.
- **Confidence Scoring**: Displayed via UI badges mapped to predefined certainty thresholds (e.g., Green > 80%).
- **No external APIs** (OpenAI/TensorFlow) are used to comply with project restrictions.

## Analytics & Charts
To maintain a lightweight build footprint, `DashboardCharts.jsx` utilizes native SVG and CSS `conic-gradient` mapping for data visualization. This bypasses the need for large third-party libraries like Recharts or Chart.js while maintaining a responsive, professional appearance.

## Reports Export
The CSV generation in `Reports.jsx` is implemented in pure JavaScript using Blob URIs and DOM element generation. It strictly iterates over JSON arrays, encodes the content to UTF-8, and triggers a local download without invoking backend endpoints.

## How to Run / Integrate
1. Place the created files into their respective directories as per the provided tree.
2. In your main routing file (e.g., `App.jsx`), import and map the pages:
   ```jsx
   import Analytics from './pages/Analytics';
   import Reports from './pages/Reports';
   
   // Inside your Route declarations:
   <Route path="/analytics" element={<Analytics />} />
   <Route path="/reports" element={<Reports />} />