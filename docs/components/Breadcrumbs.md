# Breadcrumbs Component

**Location:** `src/components/@extended/Breadcrumbs.jsx`

## Overview

Breadcrumbs is an intelligent navigation component that automatically generates breadcrumb trails based on the current route and menu structure. It integrates with React Router and the application's navigation configuration.

## Dependencies

- React Router (`useLocation`, `Link`)
- Material-UI `Breadcrumbs`
- `menu-items` - Navigation configuration
- **MainCard** - Card wrapper
- Ant Design icons (Home, Apartment)

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `card` | `boolean` | `false` | Wrap breadcrumbs in MainCard |
| `custom` | `boolean` | `false` | Use custom breadcrumb links instead of auto-generated |
| `divider` | `boolean` | `false` | Show divider below breadcrumbs |
| `heading` | `string` | - | Custom heading text |
| `icon` | `boolean` | - | Show home icon only |
| `icons` | `boolean` | - | Show icons for all breadcrumb items |
| `links` | `array` | - | Custom breadcrumb links (requires `custom=true`) |
| `maxItems` | `number` | `8` | Maximum breadcrumb items to display |
| `rightAlign` | `boolean` | - | Align breadcrumbs and title horizontally |
| `separator` | `component` | `'/'` | Custom separator icon component |
| `title` | `boolean` | `true` | Show page title |
| `titleBottom` | `boolean` | `true` | Position title below breadcrumbs |
| `sx` | `object` | - | Style object for MainCard |

## Usage Examples

### Auto-Generated Breadcrumbs

The component automatically generates breadcrumbs based on the current route:

```jsx
import Breadcrumbs from 'components/@extended/Breadcrumbs';

// Automatically generates breadcrumbs from current location
<Breadcrumbs />
```

### Custom Breadcrumbs

```jsx
<Breadcrumbs
  custom
  heading="User Profile"
  links={[
    { title: 'Home', to: '/' },
    { title: 'Users', to: '/users' },
    { title: 'Profile' } // No 'to' = current page
  ]}
/>
```

### With Icons

```jsx
import { UserOutlined, TeamOutlined } from '@ant-design/icons';

<Breadcrumbs
  custom
  icons
  heading="Team Members"
  links={[
    { title: 'Home', to: '/', icon: HomeOutlined },
    { title: 'Users', to: '/users', icon: UserOutlined },
    { title: 'Team', icon: TeamOutlined }
  ]}
/>
```

### With Card Wrapper

```jsx
<Breadcrumbs
  card
  divider
  heading="Dashboard Analytics"
/>
```

### Custom Separator

```jsx
import { RightOutlined } from '@ant-design/icons';

<Breadcrumbs
  custom
  separator={RightOutlined}
  links={[
    { title: 'Home', to: '/' },
    { title: 'Products', to: '/products' },
    { title: 'Details' }
  ]}
/>
```

### Right-Aligned Layout

```jsx
<Breadcrumbs
  rightAlign
  card
  heading="Page Title"
  custom
  links={[
    { title: 'Home', to: '/' },
    { title: 'Current Page' }
  ]}
/>
```

### Title Above Breadcrumbs

```jsx
<Breadcrumbs
  titleBottom={false}
  heading="Dashboard"
  card
/>
```

## Link Object Structure

When using `custom={true}` with `links` prop:

```javascript
{
  title: 'Link Text',      // Required
  to: '/path',             // Optional - omit for current page
  icon: IconComponent      // Optional - icon component
}
```

## Automatic Route Detection

The component analyzes the current route and matches it against the navigation menu structure:

1. Reads current location from React Router
2. Traverses `menu-items` structure
3. Identifies main group/collapse and current item
4. Generates appropriate breadcrumb trail

### Navigation Structure Example

```javascript
// menu-items/index.js
{
  type: 'group',
  title: 'Dashboard',
  url: '/dashboard',
  children: [
    {
      type: 'item',
      title: 'Analytics',
      url: '/dashboard/analytics',
      breadcrumbs: true  // Enable breadcrumbs
    }
  ]
}
```

## Layout Modes

### Card Mode (default layout)
```jsx
<Breadcrumbs
  card={true}
  // Renders in MainCard with padding and optional border
/>
```

### Inline Mode
```jsx
<Breadcrumbs
  card={false}
  // Renders without card wrapper, transparent background
/>
```

## Common Patterns

### Dashboard Page Header

```jsx
<Breadcrumbs
  card={false}
  divider
  icon
  sx={{ mb: 3 }}
/>
```

### Admin Panel Navigation

```jsx
<Breadcrumbs
  card
  icons
  maxItems={6}
  rightAlign
/>
```

### Multi-Level Navigation

```jsx
<Breadcrumbs
  custom
  heading="Product Details"
  links={[
    { title: 'Home', to: '/' },
    { title: 'Catalog', to: '/catalog' },
    { title: 'Products', to: '/catalog/products' },
    { title: 'Electronics', to: '/catalog/products/electronics' },
    { title: 'Laptop X200' }
  ]}
/>
```

### Minimal Breadcrumbs

```jsx
<Breadcrumbs
  title={false}  // Hide title
  icon           // Show home icon only
  card={false}   // No card wrapper
/>
```

## Styling Details

### Icon Styles
```javascript
{
  marginRight: theme.spacing(0.75),  // 6px
  marginLeft: 0,
  width: '1rem',                      // 16px
  height: '1rem',                     // 16px
  color: theme.vars.palette.secondary.main
}
```

### Typography Variants
- Home link: `h6` variant
- Intermediate links: `h6` variant (secondary color)
- Current page: `subtitle1` variant (primary color)
- Page title: `h2` variant

### Card Wrapper Styles
When `card={false}`:
```javascript
{
  mb: 3,
  bgcolor: 'inherit',
  backgroundImage: 'none'
}
```

## Best Practices

1. **Auto-Generation:** Prefer automatic breadcrumbs over custom when possible
2. **Icon Usage:**
   - Use `icon={true}` for minimal home icon
   - Use `icons={true}` for icons on all items
   - Provide meaningful icons that represent the section
3. **Title Position:**
   - Use `titleBottom={true}` (default) for standard layout
   - Use `titleBottom={false}` when title should precede navigation
4. **Max Items:** Set appropriate `maxItems` for deep navigation (default 8)
5. **Card Wrapper:** Use `card={false}` for cleaner integration in page layouts

## Accessibility

- Uses semantic `aria-label="breadcrumb"`
- Links are keyboard navigable
- Current page is non-interactive (no link)
- Clear visual hierarchy with typography variants

## Related Components

- **MainCard**: Wrapper component for card mode
- React Router **Link**: Navigation component
- Material-UI **Breadcrumbs**: Base component

## Notes

- Automatically updates when route changes
- Respects `breadcrumbs` property in menu item configuration
- Special handling for component demo pages
- Integrates with theme color system
- Supports all Material-UI Breadcrumbs props via spread operator
