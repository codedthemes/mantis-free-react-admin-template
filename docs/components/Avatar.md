# Avatar Component

**Location:** `src/components/@extended/Avatar.jsx`

## Overview

Avatar is an enhanced Material-UI Avatar component with support for multiple sizes, color variants, and styling types. It extends MUI Avatar with the Mantis color system and predefined size variants.

## Dependencies

- Material-UI `Avatar`
- `utils/getColors` - Color palette utility
- Emotion styled components

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `string \| node` | - | Avatar content (text, icon, image) |
| `color` | `string` | `'primary'` | Color variant from theme palette |
| `type` | `'filled' \| 'outlined' \| 'combined'` | - | Avatar styling type |
| `size` | `'badge' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Avatar size variant |

## Size Variants

| Size | Width x Height | Font Size | Use Case |
|------|---------------|-----------|----------|
| `badge` | 20 x 20px | 0.675rem | Status indicators, badges |
| `xs` | 24 x 24px | 0.75rem | Compact lists, chips |
| `sm` | 32 x 32px | 0.875rem | Table rows, small cards |
| `md` | 40 x 40px | 1rem | Default, general use |
| `lg` | 52 x 52px | 1.2rem | User profiles, prominent display |
| `xl` | 64 x 64px | 1.5rem | Profile headers, hero sections |

### Badge Size Special Feature
- Has 2px solid border
- Border color matches `theme.vars.palette.background.default`

## Type Variants

### Filled (Default)
Background filled with main color, contrast text.

```jsx
<Avatar type="filled" color="primary">
  AB
</Avatar>
```

### Outlined
Transparent background with colored border and text.

```jsx
<Avatar type="outlined" color="success">
  JD
</Avatar>
```

### Combined
Light background with colored border and text.

```jsx
<Avatar type="combined" color="error">
  ER
</Avatar>
```

## Color Options

Available colors (from theme palette):
- `primary` (default) - Blue
- `secondary` - Grey
- `success` - Green
- `error` - Red
- `warning` - Orange/Gold
- `info` - Cyan

## Usage Examples

### Text Avatar

```jsx
import Avatar from 'components/@extended/Avatar';

// Default medium size
<Avatar color="primary">JD</Avatar>

// Large avatar
<Avatar color="success" size="lg">AB</Avatar>
```

### Icon Avatar

```jsx
import { UserOutlined } from '@ant-design/icons';

<Avatar color="primary" size="md">
  <UserOutlined />
</Avatar>
```

### Image Avatar

```jsx
<Avatar src="/path/to/image.jpg" alt="User Name" />
```

### Different Types

```jsx
// Filled - solid background
<Avatar type="filled" color="primary">AB</Avatar>

// Outlined - transparent with border
<Avatar type="outlined" color="error">ER</Avatar>

// Combined - light background with border
<Avatar type="combined" color="success">SC</Avatar>
```

### Size Variations

```jsx
<Stack direction="row" spacing={1} alignItems="center">
  <Avatar size="badge" color="success">B</Avatar>
  <Avatar size="xs" color="primary">XS</Avatar>
  <Avatar size="sm" color="secondary">SM</Avatar>
  <Avatar size="md" color="warning">MD</Avatar>
  <Avatar size="lg" color="error">LG</Avatar>
  <Avatar size="xl" color="info">XL</Avatar>
</Stack>
```

## Common Patterns

### User Profile Avatar

```jsx
<Avatar
  size="lg"
  color="primary"
  type="filled"
  src={user.avatar}
  alt={user.name}
>
  {user.initials}
</Avatar>
```

### Status Badge

```jsx
<Badge
  overlap="circular"
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  badgeContent={
    <Avatar size="badge" color="success">
      <CheckOutlined style={{ fontSize: '0.5rem' }} />
    </Avatar>
  }
>
  <Avatar size="lg" src={user.avatar} />
</Badge>
```

### Avatar Group in Table

```jsx
<TableCell>
  <Stack direction="row" spacing={1} alignItems="center">
    <Avatar size="sm" color="primary">{row.initial}</Avatar>
    <Typography variant="body2">{row.name}</Typography>
  </Stack>
</TableCell>
```

### Color Variants Display

```jsx
<Stack direction="row" spacing={1}>
  <Avatar color="primary">PR</Avatar>
  <Avatar color="secondary">SE</Avatar>
  <Avatar color="success">SU</Avatar>
  <Avatar color="error">ER</Avatar>
  <Avatar color="warning">WA</Avatar>
  <Avatar color="info">IN</Avatar>
</Stack>
```

### Outlined Avatar Group

```jsx
<AvatarGroup max={4}>
  <Avatar type="outlined" color="primary">AB</Avatar>
  <Avatar type="outlined" color="success">CD</Avatar>
  <Avatar type="outlined" color="error">EF</Avatar>
  <Avatar type="outlined" color="warning">GH</Avatar>
  <Avatar type="outlined" color="info">IJ</Avatar>
</AvatarGroup>
```

## Type Styling Details

### Filled Type
```javascript
{
  color: contrastText,  // White or dark text
  background: main      // Main color background
}
```

### Outlined Type
```javascript
{
  color: main,              // Colored text
  border: '1px solid',      // Solid border
  borderColor: main,        // Main color
  background: 'transparent' // No background
}
```

### Combined Type
```javascript
{
  color: main,          // Colored text
  border: '1px solid',  // Solid border
  borderColor: light,   // Light variant border
  background: lighter   // Lighter variant background
}
```

### Default Type (No type specified)
```javascript
{
  color: main,        // Colored text
  background: lighter // Lighter variant background
}
```

## Best Practices

1. **Size Selection:**
   - Use `badge` for status indicators only
   - Use `xs`/`sm` in compact layouts (lists, tables)
   - Use `md` as default for most cases
   - Use `lg`/`xl` for profile headers or emphasis

2. **Type Selection:**
   - Use `filled` for primary user avatars
   - Use `outlined` for secondary/supporting information
   - Use `combined` for emphasis with softer appearance
   - Omit type for lightest appearance

3. **Color Usage:**
   - Use `primary` for user avatars
   - Use status colors (`success`, `error`, `warning`) for indicators
   - Use `secondary` for less important avatars

4. **Accessibility:**
   - Always provide alt text for image avatars
   - Use meaningful initials or icons
   - Ensure sufficient color contrast

## Related Components

- Material-UI **Badge**: Often combined with Avatar
- Material-UI **AvatarGroup**: Works seamlessly with this component
- **IconButton**: Similar color/size variant patterns

## Notes

- Extends MUI Avatar, so all MUI Avatar props are supported
- Uses Emotion's `shouldForwardProp` to prevent custom props from reaching DOM
- Integrates with theme color system via `utils/getColors`
- Badge size has special border styling for status indicator use cases
