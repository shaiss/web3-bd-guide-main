# Web3 Blockchain Project Evaluation Guide

A modern web application for evaluating blockchain projects using customizable, multi-dimensional metrics. This tool helps users assess projects across foundational, product, financial, and strategic categories, supporting repeatable, transparent, and data-driven evaluations.

## Features

- **Project Evaluations:** Create, edit, and manage blockchain project evaluations.
- **Customizable Templates:** Use or create evaluation templates with your own metrics and categories.
- **Metric Scoring:** Score projects on a variety of metrics; see overall scores and completion rates.
- **Tiering System:** Projects are automatically assigned a tier based on their evaluation score.
- **Dashboard:** View recent evaluations, storage usage, and stats at a glance.
- **Data Management:** Import/export evaluations and templates; manage local storage.
- **Responsive UI:** Works well on desktop and mobile devices.

## Evaluation Framework

Projects are evaluated across these main categories:
- **Foundational Metrics:** Team, funding, and core capabilities.
- **Product Metrics:** Product quality, adoption, and user engagement.
- **Financial Metrics:** Tokenomics, treasury health, and sustainability.
- **Strategic Alignment:** Market positioning and competitive advantages.

## Getting Started

### Prerequisites

- Node.js (18+ recommended)
- npm or bun

### Installation

```sh
git clone <YOUR_GIT_URL>
cd web3-bd-guide-main
npm install
# or, if you use bun:
# bun install
```

### Running the App

```sh
npm run dev
# or
bun run dev
```

Visit [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

- `src/pages/` — Main app pages (Dashboard, Projects, New Evaluation, etc.)
- `src/components/` — UI and feature components (dashboard, evaluation, projects, settings, etc.)
- `src/contexts/` — React contexts for state management (evaluations, templates, thresholds)
- `src/data/` — Static data (e.g., default metrics)
- `src/utils/` — Utility functions (scoring, storage, etc.)
- `public/` — Static assets

## Data Storage

- All data is stored in the browser’s local storage by default.
- You can import/export your data for backup or transfer.

## Customization

- Add or edit evaluation templates in the Templates section.
- Adjust tier thresholds and appearance in Settings.

## License

This project is licensed under the MIT License.
