# Editable Text Input

A simple React application demonstrating an editable text input interface with toggle functionality between edit and view modes.

## Features

- **Toggle Modes**: Switch between edit and save modes seamlessly
- **Real-time Input**: Live text input handling with immediate state updates
- **Clean UI**: Simple, intuitive interface with styled components
- **State Management**: Demonstrates React class component state management patterns

## Demo

<div style="text-align: center;">
    <img src="https://assets.ccbp.in/frontend/content/react-js/editable-text-input-output.gif" alt="editable-text-input" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>

## Tech Stack

- **React 19.1.0** - Frontend framework
- **Vite 7.0.4** - Build tool and development server
- **Styled Components 6.1.19** - CSS-in-JS styling
- **ESLint 9.30.1** - Code linting and formatting

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Code Quality

Run ESLint checks:
```bash
npm run lint
```

## Project Structure

```
src/
├── main.jsx           # React app entry point
├── App.jsx            # Main App component
├── App.css            # App-specific styles
├── index.css          # Global styles
└── components/        # Reusable components
    └── Editable/      # Editable text component
        ├── index.jsx           # Main component logic
        └── styledComponents.jsx # Styled components
```

## Component Architecture

- **Class Components**: Uses React class components with local state management
- **Styled Components**: CSS-in-JS approach for component styling
- **State Constants**: Organized state management using constant objects
- **Conditional Rendering**: Dynamic UI based on application state

## Contributing

1. Follow the existing code style and naming conventions
2. Use camelCase for JSX files and PascalCase for component names
3. Organize components in folders with `index.jsx` and `styledComponents.jsx`
4. Run `npm run lint` before committing changes