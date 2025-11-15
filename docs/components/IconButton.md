# IconButton Component

**Location:** `src/components/@extended/IconButton.jsx`

## Overview

IconButton is an enhanced Material-UI IconButton with multiple style variants, color options, and built-in click/focus effects. It provides consistent styling across the application with support for outlined, dashed, light, shadow, and other variants.

## Dependencies

- Material-UI `IconButton`
- `utils/getColors` - Color palette utility
- `utils/getShadow` - Shadow utility
- `utils/colorUtils` - Alpha color utility
- Emotion styled components

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'text' \| 'contained' \| 'outlined' \| 'dashed' \| 'light' \| 'shadow'` | `'text'` | Button style variant |
| `shape` | `'square' \| 'rounded'` | `'square'` | Button shape |
| `children` | `node` | - | Icon element |
| `color` | `string` | `'primary'` | Color from theme palette |
| `ref` | `any` | - | React ref |

## Variant Types

### Text (Default)
Transparent button with colored text and hover background.

```jsx
import IconButton from 'components/@extended/IconButton';
import { SearchOutlined } from '@ant-design/icons';

<IconButton variant="text" color="primary">
  <SearchOutlined />
</IconButton>
```

### Contained
Solid background with contrast text.

```jsx
<IconButton variant="contained" color="primary">
  <PlusOutlined />
</IconButton>
```

### Light
Light colored background with colored icon.

```jsx
<IconButton variant="light" color="success">
  <CheckOutlined />
</IconButton>
```

### Shadow
Contained variant with box shadow.

```jsx
<IconButton variant="shadow" color="error">
  <DeleteOutlined />
</IconButton>
```

### Outlined
Transparent with border.

```jsx
<IconButton variant="outlined" color="primary">
  <EditOutlined />
</IconButton>
```

### Dashed
Light background with dashed border.

```jsx
<IconButton variant="dashed" color="warning">
  <MoreOutlined />
</IconButton>
```

## Shape Options

### Square (Default)
Border radius: 4px

```jsx
<IconButton shape="square">
  <SettingOutlined />
</IconButton>
```

### Rounded
Fully circular button

```jsx
<IconButton shape="rounded">
  <UserOutlined />
</IconButton>
```

## Color Options

- `primary` (Blue)
- `secondary` (Grey)
- `success` (Green)
- `error` (Red)
- `warning` (Orange/Gold)
- `info` (Cyan)

## Usage Examples

### Basic Actions

```jsx
// Delete action
<IconButton variant="light" color="error">
  <DeleteOutlined />
</IconButton>

// Edit action
<IconButton variant="text" color="primary">
  <EditOutlined />
</IconButton>

// More options
<IconButton>
  <MoreOutlined />
</IconButton>
```

### Card Header Actions

```jsx
<MainCard
  title="User Profile"
  secondary={
    <Stack direction="row" spacing={1}>
      <IconButton variant="light" color="secondary">
        <ExportOutlined />
      </IconButton>
      <IconButton variant="light" color="secondary">
        <MoreOutlined />
      </IconButton>
    </Stack>
  }
>
  {/* Card content */}
</MainCard>
```

### Table Row Actions

```jsx
<TableCell align="right">
  <Stack direction="row" spacing={0.5} justifyContent="flex-end">
    <IconButton variant="text" color="primary" size="small">
      <EyeOutlined />
    </IconButton>
    <IconButton variant="text" color="secondary" size="small">
      <EditOutlined />
    </IconButton>
    <IconButton variant="text" color="error" size="small">
      <DeleteOutlined />
    </IconButton>
  </Stack>
</TableCell>
```

### Floating Action Buttons

```jsx
<IconButton
  variant="shadow"
  color="primary"
  shape="rounded"
  size="large"
>
  <PlusOutlined style={{ fontSize: 24 }} />
</IconButton>
```

### Form Field Actions

```jsx
<TextField
  fullWidth
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton variant="text" color="secondary">
          <SearchOutlined />
        </IconButton>
      </InputAdornment>
    )
  }}
/>
```

### Navigation Icons

```jsx
<IconButton variant="light" color="primary" shape="rounded">
  <MenuOutlined />
</IconButton>
```

## Variant Styling Details

### Text Variant
```javascript
{
  '&:hover': {
    color: dark,
    background: color === 'secondary'
      ? withAlpha(light, 0.1)
      : lighter
  }
}
```

### Contained Variant
```javascript
{
  color: contrastText,
  background: main,
  '&:hover': {
    background: dark
  }
}
```

### Light Variant
```javascript
{
  color: main,
  background: lighter,
  '&:hover': {
    background: withAlpha(light, 0.5)
  }
}
```

### Shadow Variant
```javascript
{
  boxShadow: shadows,
  color: contrastText,
  background: main,
  '&:hover': {
    boxShadow: 'none',
    background: dark
  }
}
```

### Outlined Variant
```javascript
{
  border: '1px solid',
  borderColor: 'inherit',
  '&:hover': {
    background: 'transparent',
    color: dark,
    borderColor: dark
  }
}
```

### Dashed Variant
```javascript
{
  border: '1px dashed',
  borderColor: 'inherit',
  background: lighter,
  '&:hover': {
    color: dark,
    borderColor: dark
  }
}
```

## Interactive Effects

### Click Ripple Effect
All IconButtons include a ripple effect animation on click via `::after` pseudo-element:

- Box shadow expands on click
- Fades from opacity 0 to 1
- Smooth transition (0.5s)
- Color matches button color with 90% opacity

### Focus Visible
Keyboard focus shows:
- 2px solid outline in dark color
- 2px outline offset

### Disabled State
Non-text variants show:
- Grey background (`theme.vars.palette.grey[200]`)
- Grey text (`theme.vars.palette.grey[300]`)
- No hover effects

## Common Patterns

### CRUD Actions
```jsx
<Stack direction="row" spacing={1}>
  <IconButton variant="light" color="primary">
    <EyeOutlined />
  </IconButton>
  <IconButton variant="light" color="secondary">
    <EditOutlined />
  </IconButton>
  <IconButton variant="light" color="error">
    <DeleteOutlined />
  </IconButton>
</Stack>
```

### Status Indicators
```jsx
<IconButton variant="contained" color="success" shape="rounded" size="small">
  <CheckOutlined />
</IconButton>

<IconButton variant="contained" color="error" shape="rounded" size="small">
  <CloseOutlined />
</IconButton>
```

### Toolbar Actions
```jsx
<Stack direction="row" spacing={0.5}>
  <IconButton variant="text">
    <FilterOutlined />
  </IconButton>
  <IconButton variant="text">
    <DownloadOutlined />
  </IconButton>
  <IconButton variant="text">
    <ShareAltOutlined />
  </IconButton>
</Stack>
```

### Social Media Icons
```jsx
<Stack direction="row" spacing={1.5}>
  <IconButton variant="outlined" color="primary" shape="rounded">
    <FacebookOutlined />
  </IconButton>
  <IconButton variant="outlined" color="info" shape="rounded">
    <TwitterOutlined />
  </IconButton>
  <IconButton variant="outlined" color="error" shape="rounded">
    <YoutubeOutlined />
  </IconButton>
</Stack>
```

## Best Practices

1. **Variant Selection:**
   - Use `text` for subtle, secondary actions
   - Use `contained` or `shadow` for primary actions
   - Use `light` for card headers and toolbars
   - Use `outlined` for emphasis without fill
   - Use `dashed` sparingly for special states

2. **Shape Usage:**
   - Use `square` (default) for most cases
   - Use `rounded` for floating actions and social icons

3. **Color Selection:**
   - Use `primary` for positive/main actions
   - Use `error` for destructive actions
   - Use `secondary` for neutral actions
   - Use status colors appropriately

4. **Accessibility:**
   - Always provide aria-label for icon-only buttons
   - Ensure sufficient contrast ratios
   - Test keyboard navigation and focus states

5. **Performance:**
   - Disabled ripple for better performance (`disableRipple` prop)
   - Use appropriate sizes to match context

## Related Components

- **AnimateButton**: Often wraps IconButton for animations
- **Avatar**: Similar color and variant patterns
- Material-UI **Tooltip**: Commonly paired for icon descriptions

## Notes

- Extends MUI IconButton with custom styling
- All MUI IconButton props are supported
- `disableRipple` is set by default
- Uses theme color and shadow systems
- Custom props filtered via `shouldForwardProp`
- Click effect implemented via CSS pseudo-elements
