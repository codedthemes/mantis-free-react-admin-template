# Mantis Components Documentation

Complete documentation for all components in the Mantis Free React Admin Template.

## Overview

This directory contains detailed documentation for all reusable components in the Mantis template. Each component is documented with props, usage examples, best practices, and related components.

## Component Categories

### Core Components

#### MainCard
**Location:** `src/components/MainCard.jsx`

The primary card wrapper component used throughout the template. Provides extensive customization options for borders, shadows, headers, and content.

[View Documentation](./MainCard.md)

**Key Features:**
- Flexible header with title and actions
- Customizable borders and shadows
- Modal positioning support
- Code highlighting mode

---

### Extended Components (`@extended`)

#### AnimateButton
**Location:** `src/components/@extended/AnimateButton.jsx`

Wrapper component that adds Framer Motion animations to buttons.

[View Documentation](./AnimateButton.md)

**Animation Types:** Scale, Slide, Rotate

---

#### Avatar
**Location:** `src/components/@extended/Avatar.jsx`

Enhanced Material-UI Avatar with color variants and size options.

[View Documentation](./Avatar.md)

**Sizes:** badge, xs, sm, md, lg, xl
**Types:** filled, outlined, combined

---

#### Breadcrumbs
**Location:** `src/components/@extended/Breadcrumbs.jsx`

Intelligent navigation component that auto-generates breadcrumb trails from routes.

[View Documentation](./Breadcrumbs.md)

**Features:** Auto-generated paths, Custom links, Icon support

---

#### Dot
**Location:** `src/components/@extended/Dot.jsx`

Simple status indicator component for displaying colored dots.

[View Documentation](./Dot.md)

**Use Cases:** Status badges, Notifications, Legend indicators

---

#### IconButton
**Location:** `src/components/@extended/IconButton.jsx`

Enhanced IconButton with multiple style variants and color options.

[View Documentation](./IconButton.md)

**Variants:** text, contained, outlined, dashed, light, shadow
**Shapes:** square, rounded

---

#### Transitions
**Location:** `src/components/@extended/Transitions.jsx`

Wrapper component for Material-UI transition animations.

[View Documentation](./Transitions.md)

**Types:** grow, collapse, fade, slide, zoom

---

### Card Components

#### AnalyticEcommerce
**Location:** `src/components/cards/statistics/AnalyticEcommerce.jsx`

Statistics card for displaying metrics with percentage indicators.

[View Documentation](./AnalyticEcommerce.md)

**Use Case:** Dashboard analytics, KPI displays

---

#### AuthFooter
**Location:** `src/components/cards/AuthFooter.jsx`

Footer component for authentication pages with copyright and legal links.

[View Documentation](./AuthFooter.md)

**Use Case:** Login, Register, and auth pages

---

## Component Hierarchy

```
Components
├── MainCard (Base wrapper)
│
├── @extended/
│   ├── AnimateButton (Animation wrapper)
│   ├── Avatar (User avatars)
│   ├── Breadcrumbs (Navigation)
│   ├── Dot (Status indicators)
│   ├── IconButton (Action buttons)
│   └── Transitions (Animations)
│
└── cards/
    ├── statistics/
    │   └── AnalyticEcommerce
    └── AuthFooter
```

## Design System

### Color System

All components support the Mantis color palette:
- **primary** - Blue (#1677FF)
- **secondary** - Grey
- **success** - Green (#52C41A)
- **error** - Red (#FF4D4F)
- **warning** - Orange/Gold (#FAAD14)
- **info** - Cyan (#13C2C2)

### Typography Scale

- **h1** - 38px / 600
- **h2** - 30px / 600
- **h3** - 24px / 600
- **h4** - 20px / 600
- **h5** - 16px / 600
- **h6** - 14px / 400
- **body1** - 14px / 400
- **body2** - 12px / 400

### Spacing System

Based on 8px grid system (theme spacing multiplier):
- `0.5` = 4px
- `1` = 8px
- `1.5` = 12px
- `2` = 16px
- `2.5` = 20px
- `3` = 24px

## Common Patterns

### Dashboard Card

```jsx
import MainCard from 'components/MainCard';
import IconButton from 'components/@extended/IconButton';
import { MoreOutlined } from '@ant-design/icons';

<MainCard
  title="Dashboard Card"
  secondary={
    <IconButton variant="light" color="secondary">
      <MoreOutlined />
    </IconButton>
  }
>
  {/* Card content */}
</MainCard>
```

### Statistics Grid

```jsx
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';

<Grid container spacing={3}>
  {metrics.map((metric) => (
    <Grid item xs={12} sm={6} md={3} key={metric.id}>
      <AnalyticEcommerce
        title={metric.title}
        count={metric.count}
        percentage={metric.percentage}
        color={metric.color}
        extra={metric.extra}
      />
    </Grid>
  ))}
</Grid>
```

### User Profile with Status

```jsx
import Avatar from 'components/@extended/Avatar';
import Dot from 'components/@extended/Dot';

<Stack direction="row" spacing={2} alignItems="center">
  <Badge
    overlap="circular"
    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    badgeContent={<Dot color="success" size={12} />}
  >
    <Avatar size="lg" src={user.avatar}>{user.initials}</Avatar>
  </Badge>
  <Stack>
    <Typography variant="h6">{user.name}</Typography>
    <Stack direction="row" spacing={1} alignItems="center">
      <Dot color="success" size={8} />
      <Typography variant="caption" color="success.main">Online</Typography>
    </Stack>
  </Stack>
</Stack>
```

### Animated Action Button

```jsx
import AnimateButton from 'components/@extended/AnimateButton';

<AnimateButton>
  <Button variant="contained" color="primary" startIcon={<PlusOutlined />}>
    Create New
  </Button>
</AnimateButton>
```

### Dropdown Menu

```jsx
import Transitions from 'components/@extended/Transitions';

<Popper open={open} anchorEl={anchorEl}>
  <Transitions type="grow" position="top-right">
    <Paper>
      <ClickAwayListener onClickAway={handleClose}>
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Settings</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </ClickAwayListener>
    </Paper>
  </Transitions>
</Popper>
```

## Quick Reference

### Most Used Components

| Component | Use For | Common Props |
|-----------|---------|--------------|
| MainCard | Card wrappers | title, secondary, border, boxShadow |
| IconButton | Action buttons | variant, color, shape |
| Avatar | User avatars | size, color, type |
| Dot | Status indicators | color, size, variant |
| AnalyticEcommerce | KPI cards | title, count, percentage, color |
| Transitions | Animations | type, position, direction |
| AnimateButton | Button effects | type, scale, direction |
| Breadcrumbs | Navigation | custom, links, heading |

### Import Paths

```javascript
// Core
import MainCard from 'components/MainCard';

// Extended
import AnimateButton from 'components/@extended/AnimateButton';
import Avatar from 'components/@extended/Avatar';
import Breadcrumbs from 'components/@extended/Breadcrumbs';
import Dot from 'components/@extended/Dot';
import IconButton from 'components/@extended/IconButton';
import Transitions from 'components/@extended/Transitions';

// Cards
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import AuthFooter from 'components/cards/AuthFooter';
```

## Best Practices

### Component Composition

1. **Use MainCard as base wrapper** for most card layouts
2. **Wrap buttons with AnimateButton** for enhanced UX
3. **Use IconButton over MUI IconButton** for consistent styling
4. **Prefer extended components** over base MUI components
5. **Apply Transitions** to dropdowns, modals, and dynamic content

### Consistency

1. **Color Usage**: Use semantic colors (success for positive, error for negative)
2. **Spacing**: Follow 8px grid system
3. **Typography**: Use defined variants from theme
4. **Icons**: Use Ant Design icons for consistency
5. **Shadows**: Use theme shadow system

### Performance

1. **Lazy Load**: Use React.lazy() for page-level components
2. **Memoization**: Wrap expensive components in React.memo()
3. **Transitions**: Use sparingly to avoid performance issues
4. **Icons**: Import only needed icons from @ant-design/icons

## Accessibility

All components follow accessibility best practices:

- ✅ Keyboard navigation support
- ✅ ARIA labels where appropriate
- ✅ Color contrast compliance
- ✅ Screen reader friendly
- ✅ Focus indicators

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Related Documentation

- [Material-UI Documentation](https://mui.com/material-ui/getting-started/)
- [Ant Design Icons](https://ant.design/components/icon)
- [Framer Motion](https://www.framer.com/motion/)
- [Mantis GitBook](https://codedthemes.gitbook.io/mantis)

## Contributing

When adding new components:

1. Follow existing component patterns
2. Add PropTypes validation
3. Create comprehensive documentation
4. Include usage examples
5. Test responsiveness
6. Ensure accessibility

## Support

For issues and questions:
- [GitHub Issues](https://github.com/codedthemes/mantis-free-react-admin-template/issues)
- [Documentation](https://codedthemes.gitbook.io/mantis)
- [CodedThemes Support](https://codedthemes.support-hub.io/)
