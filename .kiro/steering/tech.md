# Technology Stack

## Build System & Tooling
- **Build Tool**: Vite 7.0.4
- **Package Manager**: npm (with package-lock.json)
- **Linting**: ESLint 9.30.1 with React-specific plugins
- **Module System**: ES Modules (`"type": "module"`)

## Frontend Stack
- **Framework**: React 19.1.0 with React DOM 19.1.0
- **Styling**: Styled Components 6.1.19 + CSS
- **Language**: JavaScript (JSX)

## Development Dependencies
- @vitejs/plugin-react for Vite React support
- eslint-plugin-react-hooks and eslint-plugin-react-refresh
- TypeScript type definitions for React (dev dependencies)

## Common Commands

### Development
```bash
npm run dev          # Start development server
npm run preview      # Preview production build
```

### Build & Deploy
```bash
npm run build        # Build for production
```

### Code Quality
```bash
npm run lint         # Run ESLint checks
```

## Configuration Notes
- ESLint configured for browser globals and JSX
- Vite configured with React plugin
- Styled Components used alongside traditional CSS files