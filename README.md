# Histopath Lab - The Morphology–Mechanism Map

An interactive, mobile-first educational web application for learning histopathology through integrated morphology, molecular mechanisms, and clinical correlation.

## Features

- **Comprehensive Learning Modules**: Structured curriculum covering normal histology, cell injury, inflammation, and neoplasia
- **Interactive Simulators**:
  - Cell Injury Model - Explore reversible vs irreversible injury outcomes
  - Inflammation Simulator - Adjust mediators to see different inflammation types
- **Assessment Engine**: MCQ-based assessments with detailed rationales
- **Glossary**: Searchable pathology terminology reference
- **Dark Mode**: Built-in dark mode support for comfortable learning
- **Offline Support**: Service worker enables offline access
- **Mobile-First Design**: Responsive layout optimized for all devices
- **Progress Tracking**: Automatic tracking of completed lessons and modules

## Technology Stack

- **React 18** with TypeScript
- **Vite** for blazing-fast development and optimized builds
- **Tailwind CSS** for utility-first styling
- **Zustand** for lightweight state management with persistence
- **Lucide React** for beautiful icons
- **Service Worker** for offline-first functionality

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The optimized build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

All app files are in the root directory:

- `App.tsx` - Main application component with routing
- `main.tsx` - Application entry point
- `index.html` - HTML template
- `types.ts` - TypeScript type definitions
- `data.ts` - Educational content and sample data
- `store.ts` - Zustand state management
- `*Screen.tsx` - Screen components (Home, Module, Lesson, etc.)
- `*Simulator.tsx` - Interactive educational components
- UI components following shadcn/ui patterns

## Educational Content

The app follows the plan outlined in `plan.md` and coding philosophy in `ultrathink.md`:

- **Normal Histology Foundations**: Understanding normal tissue architecture
- **Cell Injury & Death**: Reversible injury, necrosis types, apoptosis
- **Inflammation Spectrum**: Acute, chronic, and granulomatous inflammation
- **Molecular Pathways**: p53, RAS-MAPK, and other key pathways
- **IHC Interpretation**: Immunohistochemistry markers and panels
- **Clinical Integration**: Case-based learning with morphology-mechanism correlation

## Design Philosophy

Built following the "ultrathink" approach:
- Elegant, intuitive solutions
- Carefully planned architecture
- Beautiful, crafted code
- Ruthless simplification
- Excellence in every detail

## License

Educational use only.

## Acknowledgments

Based on educational principles from:
- Robbins & Cotran Pathologic Basis of Disease
- Pathoma (Fundamentals of Pathology)
- WHO Tumor Classification
- CAP/ASCP Guidelines
