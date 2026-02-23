# Mantis Free React Admin Template - AI Instructions

## Role & Context

You are a **Frontend Template Architect**. Your goal is to build a visually consistent and easy-to-use React admin website using the **free version** of Mantis. The code should be developer-friendly, forgiving, and focused on rapid UI development. Reuse existing premade components and pages whenever possible.

## Project Overview

**Mantis Free** is a Material-UI-based admin dashboard template — a lightweight starter for building custom admin panels.

---

## Tech Stack

- **Framework**: React (Functional Components)
- **Build Tool**: Vite
- **Language**: JavaScript (JSX)
- **UI Library**: Material UI (MUI)
- **State**: Context API + React hooks (no Redux/Zustand)
- **Routing**: React Router
- **Charts**: MUI X Charts
- **Animations**: Framer Motion
- **Forms**: Formik + Yup (validation)
- **Data Fetching/Caching**: SWR (local state only, no external API)
- **Scrollbar**: simplebar-react
- **Number Formatting**: react-number-format
- **Icons**: Ant Design Icons

---

## Folder Structure & Key Files

### Source Directory `src/`

| Directory | Purpose | Items |
|-----------|---------|-------|
| `components/` | Reusable UI blocks (MainCard, Loader, Logo, etc.) | ~17 |
| `sections/` | Page-specific UI modules | ~12 |
| `layout/` | Dashboard layout (Header, Drawer, Footer) | ~21 |
| `themes/` | MUI theme config (palette, typography, overrides) | ~31 |
| `pages/` | Application views | 7 |
| `routes/` | Route definitions (MainRoutes, LoginRoutes) | 3 |
| `menu-items/` | Sidebar navigation config | 5 |
| `api/` | SWR-based local state hooks (menu drawer state) | 1 |
| `contexts/` | React Context providers (ConfigContext only) | 1 |
| `hooks/` | Custom hooks (useConfig, useLocalStorage) | 2 |
| `utils/` | Helper functions (colorUtils, getColors, getShadow, password utils) | 5 |
| `data/` | Static data/docs | 1 |
| `assets/` | Images, CSS, third-party styles | 3+ |

### Pages

| Page | Route | File |
|------|-------|------|
| Dashboard | `/`, `/dashboard/default` | [pages/dashboard/default.jsx](src/pages/dashboard/default.jsx) |
| Login | `/login` | [pages/auth/Login.jsx](src/pages/auth/Login.jsx) |
| Register | `/register` | [pages/auth/Register.jsx](src/pages/auth/Register.jsx) |
| Color | `/color` | [pages/component-overview/color.jsx](src/pages/component-overview/color.jsx) |
| Typography | `/typography` | [pages/component-overview/typography.jsx](src/pages/component-overview/typography.jsx) |
| Shadow | `/shadow` | [pages/component-overview/shadows.jsx](src/pages/component-overview/shadows.jsx) |
| Sample Page | `/sample-page` | [pages/extra-pages/sample-page.jsx](src/pages/extra-pages/sample-page.jsx) |

### Critical Files
- `src/App.jsx` — Main app component (ThemeCustomization + RouterProvider)
- `src/index.jsx` — Entry point (ConfigProvider wrapper)
- `src/config.js` — Global constants (`APP_DEFAULT_PATH`, `DRAWER_WIDTH`, `fontFamily`)
- `src/contexts/ConfigContext.jsx` — Config provider (persists to localStorage as `mantis-react-free-config`)
- `src/themes/index.jsx` — MUI theme builder (`ThemeCustomization` component)
- `src/api/menu.js` — SWR-based drawer open/close state management

---

## Architecture & Data Flow

### 1. Entry Point & Context Hierarchy
```
index.jsx
└─ ConfigProvider (fontFamily, presetColor — persisted in localStorage)
   └─ App.jsx
      └─ ThemeCustomization (MUI theme, palette, typography, overrides)
         └─ ScrollTop
            └─ RouterProvider
```

### 2. Configuration System
- **ConfigContext**: [src/contexts/ConfigContext.jsx](src/contexts/ConfigContext.jsx) manages:
  - `fontFamily` — the app font (default: `'Public Sans', sans-serif`)
  - `presetColor` — theme color preset
- **LocalStorage Key**: `mantis-react-free-config`
- **Constants**: [src/config.js](src/config.js) defines:
  - `APP_DEFAULT_PATH` = `/dashboard/default`
  - `DRAWER_WIDTH` = 260
  - `MINI_DRAWER_WIDTH` = 60
- **Hook**: Use `useConfig()` to access/update config globally

### 3. Theme System
- **Builder**: [src/themes/index.jsx](src/themes/index.jsx) — creates MUI theme with:
  - Custom breakpoints (`xs: 0, sm: 768, md: 1024, lg: 1266, xl: 1440`)
  - Light color scheme only (no dark mode in free version)
  - CSS variables via `cssVarPrefix: ''`
  - Component overrides from `src/themes/overrides/` (~24 override files)
- **Palette**: [src/themes/palette.js](src/themes/palette.js) — color definitions with preset support
- **Typography**: [src/themes/typography.js](src/themes/typography.js) — font config

### 4. Menu / Drawer State
- **SWR-based**: [src/api/menu.js](src/api/menu.js) uses SWR as a local state store
  - `useGetMenuMaster()` — returns `{ menuMaster, menuMasterLoading }`
  - `handlerDrawerOpen(bool)` — toggles drawer via `mutate()`
  - No network requests involved—SWR is used purely for reactive state
- **Menu Items**: Defined in [src/menu-items/](src/menu-items/) (dashboard, pages, utilities, support)

### 5. Layout Structure
- **Dashboard Layout**: [src/layout/Dashboard/](src/layout/Dashboard/) (Header, Drawer, Footer)
  - Used for all main application pages
  - Sidebar navigation driven by menu-items config
- **Auth pages** (Login/Register) render without the dashboard layout (standalone pages)
- **MainCard Component**: Primary wrapper for page content (shadows, headers, dividers)

### 6. Authentication (UI Only)
- Login and Register pages exist as **UI demonstrations only**
- Forms use Formik + Yup for validation
- Auth sections: [src/sections/auth/](src/sections/auth/)

---

## Import Organization & Sequence

All files should follow this specific import order with standard comment headers. Within each group, imports must be in **alphabetical order** (see MUI special rule).

```jsx
// React & Standard library imports
import { useEffect, useState } from 'react';

// material-ui
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'; // Always last in this group

// third-party
import { format } from 'date-fns';

// project imports
import MainCard from 'components/MainCard';
import useConfig from 'hooks/useConfig';

// assets
import PrinterFilled from '@ant-design/icons/PrinterFilled';
```

---

## Coding Standards & Best Practices

### JavaScript Strategy
- Use JavaScript with JSDoc comments for **autocomplete and basic safety**, not strict type checking
- **PropTypes or JSDoc** for component prop documentation
- Always add **JSDoc comments** for component props—enables IDE autocomplete support

### MUI Styling Rules
1. **Use `sx` prop** for direct styling on MUI components (fastest, most customizable)
2. **Avoid `styled()`** components or CSS files unless absolutely necessary
3. **Layout**: Prefer MUI components (`<Stack>`, `<Box>`, `<Grid>`) over HTML `<div>`
4. **Colors**: Use `theme.vars.palette` tokens (e.g., `primary.main`, `grey.100`) NOT hex codes
5. **Responsiveness**: Always include breakpoints (e.g., `sx={{ flexDirection: { xs: 'column', md: 'row' } }}`)
6. **Import Sorting**: Within the `@mui` group, imports must be alphabetical, with `Box` always being the **LAST** import

### Component Structure
- **Clean Props**: Export root element as a passthrough for `sx` or `className`
- **Style Props**: Allow consumers to override spacing/layout from parent
- **Props Documentation**: Use JSDoc comments for all props—enables IDE autocomplete
- **Declaration Style**: **Use normal function declarations** (e.g., `export default function ComponentName() { ... }`) rather than arrow functions for all functional components

### Template-Specific Requirements
- **NO hardcoded menu items**—keep navigation in separate config files ([src/menu-items/](src/menu-items/))
- **NO inline mock data**—create separate data files when needed
- **Configuration-driven**: All user-facing settings should be configurable
- **Theme-first**: All styling references theme tokens, not hardcoded values

### Naming & File Organization
- **Menu items**: Organized by feature in [src/menu-items/](src/menu-items/) (each exports menu config)
- **Layout components**: In [src/layout/](src/layout/), NOT in global components
- **Reusable UI**: In [src/components/](src/components/) (MainCard, Loader, Loadable, etc.)
- **Page-specific UI**: In [src/sections/](src/sections/) (not components)
- **Commenting Pattern**: 
    - Use double-pipe divider comments for major sections within a file:
      `// ==============================|| SECTION NAME ||============================== //`
    - Use JSDoc comments for functions and components
    - Use brief descriptive comments above complex logic blocks

### State Management
- **Global Settings**: ConfigContext (fontFamily, presetColor)
- **Drawer State**: SWR-based local state in [src/api/menu.js](src/api/menu.js)
- **Page State**: React hooks (`useState`, `useReducer`) only
- **No Redux/Zustand**—keep it lightweight
- **No external API calls**—no axios, no backend integration in the free version

---

## Build & Development Workflow

### Commands
```bash
yarn install             # Install dependencies
yarn start               # Dev server (http://localhost:3000, auto-opens)
yarn build               # Vite production build
yarn preview             # Preview production build locally
```

### Configuration Files
- **vite.config.mjs**: Path aliases, port 3000, base URL from `VITE_APP_BASE_NAME`
- **jsconfig.json**: Paths aliased (e.g., `components/*` → `src/components/`)
- **eslint.config.mjs**: ESLint flat config with React/JSX/Prettier plugins
- **.prettierrc**: Prettier config

### Environment Variables
- `VITE_APP_BASE_NAME`: App base path for deployment (defaults to `/`)

### Key Principles
- **Separation of Concerns**: Components (reusable), sections (page-specific), layouts (structure)
- **Configuration-Driven**: Menu items, routes in separate config files (not hardcoded)
- **Theme-First**: All styling references theme tokens
- **Documentation**: JSDoc comments for all functions and components

---

## Critical Developer Patterns

### Adding a New Page
1. Create component in [src/pages/](src/pages/) (organize in subdirectory by feature)
2. Create lazy-loaded route in [src/routes/MainRoutes.jsx](src/routes/MainRoutes.jsx):
   ```jsx
   const NewPage = Loadable(lazy(() => import('pages/my-feature/new-page')));
   // Add to children array:
   { path: 'new-page', element: <NewPage /> }
   ```
3. Add to [src/menu-items/](src/menu-items/) if it needs sidebar navigation
4. Wrap content in `<MainCard title="Page Name">` or appropriate layout
5. Use `useConfig()` for theme/settings access

### Adding a New Menu Section
1. Create a new file in `src/menu-items/` (e.g., `myFeature.jsx`)
2. Export a menu config object:
   ```jsx
   import DashboardOutlined from '@ant-design/icons/DashboardOutlined';
   
   const myFeature = {
     id: 'group-my-feature',
     title: 'My Feature',
     type: 'group',
     children: [
       {
         id: 'my-page',
         title: 'My Page',
         type: 'item',
         url: '/my-page',
         icon: DashboardOutlined,
         breadcrumbs: false
       }
     ]
   };
   
   export default myFeature;
   ```
3. Import and add to the `items` array in [src/menu-items/index.jsx](src/menu-items/index.jsx)

### Adding Charts
Use `@mui/x-charts`:
```jsx
import { BarChart } from '@mui/x-charts/BarChart';

export default function MyChart() {
  return (
    <BarChart
      xAxis={[{ scaleType: 'band', data: ['Jan', 'Feb', 'Mar'] }]}
      series={[{ data: [4, 3, 5] }]}
      height={300}
    />
  );
}
```

---

## External Dependencies & Integrations

All third-party libraries and their exact versions are defined in `package.json` (single source of truth).

Key dependencies include:
- **MUI** (core UI components, system, lab)
- **MUI X Charts** (charting)
- **React Router** (routing)
- **Formik** + **Yup** (forms & validation)
- **Framer Motion** (animations)
- **SWR** (reactive local state)
- **simplebar-react** (custom scrollbars)
- **Ant Design Icons** (icon library)

Refer to `package.json` for the exact versions in use.

---

## Common Patterns & Examples

### Using MainCard (Primary Page Wrapper)
```jsx
import MainCard from 'components/MainCard';

export default function MyPage() {
  return (
    <MainCard title="Page Title" secondary={<Button>Action</Button>}>
      {/* Page content */}
    </MainCard>
  );
}
```

### Using useConfig() Hook
```jsx
import useConfig from 'hooks/useConfig';

export default function Settings() {
  const { state, setField } = useConfig();
  return <>Current font: {state.fontFamily}</>;
}
```

### Creating Lazy-Loaded Routes
```jsx
import { lazy } from 'react';
import Loadable from 'components/Loadable';

const MyPage = Loadable(lazy(() => import('pages/my-page')));

// In route config:
{ path: '/my-page', element: <MyPage /> }
```

### Using Menu Drawer State
```jsx
import { useGetMenuMaster, handlerDrawerOpen } from 'api/menu';

export default function MyComponent() {
  const { menuMaster } = useGetMenuMaster();
  const isOpen = menuMaster.isDashboardDrawerOpened;

  return <Button onClick={() => handlerDrawerOpen(!isOpen)}>Toggle Drawer</Button>;
}
```

---

## Known Gotchas & Troubleshooting

| Issue | Solution |
|-------|----------|
| **Routes don't load** | Must use `Loadable()` wrapper for lazy imports—direct `lazy()` fails |
| **Styling not updating** | Use `sx` prop with theme tokens, not hex codes; use `theme.vars.palette` |
| **MUI CSS variables** | This project uses MUI CSS variables via `cssVarPrefix: ''`—access colors with `theme.vars.palette` |
| **No dark mode** | Free version only supports light theme; dark mode requires manual setup |
| **Auth pages are UI-only** | Login/Register have no backend—they are form demos. Add your own auth provider if needed |
| **No axios** | There is no HTTP client configured. Add axios or use `fetch` if you need API calls |
| **Chart library** | Uses `@mui/x-charts` |
| **Package manager** | Uses Yarn 4 (see `.yarnrc.yml` and `yarn.lock`). Use `yarn` commands, not `npm` |
| **CSS import order** | Third-party CSS must load in correct order in [src/index.jsx](src/index.jsx) |

---

## Quick Reference

### File Locations by Use Case
- **Need to add a page?** → [src/pages/](src/pages/)
- **Need to change theme?** → [src/themes/](src/themes/)
- **Need new menu item?** → [src/menu-items/](src/menu-items/)
- **Need reusable component?** → [src/components/](src/components/)
- **Need page-specific UI?** → [src/sections/](src/sections/)
- **Need to modify layout?** → [src/layout/](src/layout/)
- **Need to add a route?** → [src/routes/MainRoutes.jsx](src/routes/MainRoutes.jsx)
- **Need to change config?** → [src/config.js](src/config.js)

### Key Hooks
- `useConfig()` — Access theme/layout settings (fontFamily, presetColor)
- `useLocalStorage()` — Persist data to localStorage
- `useGetMenuMaster()` — Access drawer open/close state

### Debugging Tips
1. **Styling issues?** Use DevTools to inspect MUI `sx` props; verify theme tokens applied via `theme.vars.palette`
2. **Component errors?** Check browser console and React DevTools for component tree and state
3. **Routes not matching?** Check [src/routes/MainRoutes.jsx](src/routes/MainRoutes.jsx) and verify `Loadable()` wrapper is used
4. **Menu not showing?** Verify menu item is imported in [src/menu-items/index.jsx](src/menu-items/index.jsx)
5. **Performance?** Check Network tab for large bundles; ensure lazy route loading is properly configured
