# Project Structure

## Root Level
- `package.json` - Project dependencies and scripts
- `vite.config.js` - Vite build configuration
- `eslint.config.js` - ESLint configuration
- `index.html` - Main HTML entry point
- `README.md` - Project documentation

## Source Code Organization (`src/`)
```
src/
├── main.jsx           # React app entry point
├── App.jsx            # Main App component
├── App.css            # App-specific styles
├── index.css          # Global styles
└── components/        # Reusable components
    └── Editable/      # Component-specific folder
        ├── index.jsx           # Main component logic
        └── styledComponents.jsx # Styled components
```

## Component Architecture
- **Component Folders**: Each component has its own folder under `src/components/`
- **Component Structure**: 
  - `index.jsx` - Main component logic and state management
  - `styledComponents.jsx` - Styled components definitions
- **Class Components**: Currently using React class components with state
- **Styling Pattern**: Mix of styled-components and traditional CSS classes

## Naming Conventions
- **Files**: camelCase for JSX files (`index.jsx`, `styledComponents.jsx`)
- **Components**: PascalCase for component names (`Editable`, `BgContainer`)
- **Constants**: SCREAMING_SNAKE_CASE for constants (`buttonStatusConstants`)
- **CSS Classes**: kebab-case for traditional CSS classes

## State Management
- Local component state using `this.state` and `this.setState`
- Constants objects for managing state values (e.g., `buttonStatusConstants`)

## Import/Export Patterns
- Default exports for components
- Named exports for styled components
- ES6 import/export syntax throughout