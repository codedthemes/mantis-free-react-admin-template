# Dot Component

**Location:** `src/components/@extended/Dot.jsx`

## Overview

Dot is a simple, versatile status indicator component that renders a small circular dot with customizable color, size, and variant. Perfect for status badges, notifications, and visual indicators.

## Dependencies

- Material-UI `Box`
- `utils/getColors` - Theme color utility

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `string` | `'primary'` | Color from theme palette |
| `size` | `number` | `8` | Dot diameter in pixels |
| `variant` | `'filled' \| 'outlined'` | `'filled'` | Dot style variant |
| `sx` | `object` | - | Additional style object |

## Variants

### Filled (Default)
Solid colored dot with no border.

```jsx
import Dot from 'components/@extended/Dot';

<Dot color="success" size={8} />
```

### Outlined
Hollow dot with colored border.

```jsx
<Dot variant="outlined" color="error" size={10} />
```

## Color Options

Supports all theme palette colors:
- `primary` - Blue
- `secondary` - Grey
- `success` - Green
- `error` - Red
- `warning` - Orange/Gold
- `info` - Cyan

## Usage Examples

### Status Indicators

```jsx
// Online status
<Stack direction="row" spacing={1} alignItems="center">
  <Dot color="success" size={8} />
  <Typography variant="body2">Online</Typography>
</Stack>

// Offline status
<Stack direction="row" spacing={1} alignItems="center">
  <Dot color="error" size={8} />
  <Typography variant="body2">Offline</Typography>
</Stack>

// Away status
<Stack direction="row" spacing={1} alignItems="center">
  <Dot color="warning" size={8} />
  <Typography variant="body2">Away</Typography>
</Stack>
```

### Table Status Column

```jsx
<TableCell>
  <Stack direction="row" spacing={1} alignItems="center">
    <Dot
      color={row.status === 'active' ? 'success' : 'error'}
      size={10}
    />
    <Typography variant="body2">
      {row.status}
    </Typography>
  </Stack>
</TableCell>
```

### Notification Badge

```jsx
<Stack direction="row" spacing={0.5} alignItems="center">
  <Dot color="error" size={6} />
  <Typography variant="caption" color="error">
    3 new messages
  </Typography>
</Stack>
```

### Legend Indicators

```jsx
<Stack spacing={1}>
  <Stack direction="row" spacing={1} alignItems="center">
    <Dot color="primary" size={12} />
    <Typography>Sales</Typography>
  </Stack>
  <Stack direction="row" spacing={1} alignItems="center">
    <Dot color="success" size={12} />
    <Typography>Revenue</Typography>
  </Stack>
  <Stack direction="row" spacing={1} alignItems="center">
    <Dot color="warning" size={12} />
    <Typography>Expenses</Typography>
  </Stack>
</Stack>
```

### Size Variations

```jsx
<Stack direction="row" spacing={2} alignItems="center">
  <Dot size={6} color="primary" />   {/* Small */}
  <Dot size={8} color="primary" />   {/* Default */}
  <Dot size={10} color="primary" />  {/* Medium */}
  <Dot size={12} color="primary" />  {/* Large */}
  <Dot size={16} color="primary" />  {/* Extra large */}
</Stack>
```

### Outlined Dots

```jsx
<Stack direction="row" spacing={1.5}>
  <Dot variant="outlined" color="primary" size={10} />
  <Dot variant="outlined" color="success" size={10} />
  <Dot variant="outlined" color="error" size={10} />
  <Dot variant="outlined" color="warning" size={10} />
</Stack>
```

### With Custom Styles

```jsx
<Dot
  color="error"
  size={8}
  sx={{
    animation: 'pulse 2s infinite',
    '@keyframes pulse': {
      '0%, 100%': { opacity: 1 },
      '50%': { opacity: 0.5 }
    }
  }}
/>
```

## Common Patterns

### User Online Status

```jsx
<Badge
  overlap="circular"
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  badgeContent={<Dot color="success" size={12} />}
>
  <Avatar src={user.avatar} />
</Badge>
```

### Task Priority

```jsx
const getPriorityColor = (priority) => {
  switch(priority) {
    case 'high': return 'error';
    case 'medium': return 'warning';
    case 'low': return 'info';
    default: return 'secondary';
  }
};

<Stack direction="row" spacing={1} alignItems="center">
  <Dot color={getPriorityColor(task.priority)} />
  <Typography>{task.title}</Typography>
</Stack>
```

### Order Status

```jsx
<Chip
  label="Pending"
  icon={<Dot color="warning" size={8} />}
  variant="outlined"
  size="small"
/>
```

### Multi-Status List

```jsx
{items.map((item) => (
  <ListItem key={item.id}>
    <ListItemIcon>
      <Dot
        color={item.isActive ? 'success' : 'error'}
        size={10}
      />
    </ListItemIcon>
    <ListItemText primary={item.name} />
  </ListItem>
))}
```

### Chart Legend

```jsx
<Stack direction="row" spacing={3}>
  <Stack direction="row" spacing={0.5} alignItems="center">
    <Dot color="primary" size={10} />
    <Typography variant="caption">Dataset 1</Typography>
  </Stack>
  <Stack direction="row" spacing={0.5} alignItems="center">
    <Dot color="success" size={10} />
    <Typography variant="caption">Dataset 2</Typography>
  </Stack>
</Stack>
```

## Styling Details

### Default Styles
```javascript
{
  width: 8,              // Default size
  height: 8,             // Default size
  borderRadius: '50%',   // Perfect circle
  bgcolor: main          // Theme color (filled)
}
```

### Outlined Variant
```javascript
{
  border: `1px solid ${main}`,  // Colored border
  // No background color
}
```

## Recommended Sizes

| Size | Use Case |
|------|----------|
| 4-6px | Inline text indicators, dense layouts |
| 8px | Default status indicators |
| 10-12px | Table cells, list items |
| 14-16px | Prominent status displays |

## Best Practices

1. **Size Selection:**
   - Keep dots small and unobtrusive (6-12px)
   - Use consistent sizes within the same context
   - Match dot size to adjacent text size

2. **Color Usage:**
   - Use semantic colors (success=green, error=red, etc.)
   - Maintain consistency across status representations
   - Consider color-blind accessibility

3. **Variant Selection:**
   - Use `filled` for primary status indicators
   - Use `outlined` for secondary or subtle indicators
   - Match variant style with surrounding components

4. **Positioning:**
   - Align vertically with text using Stack/alignItems
   - Provide consistent spacing
   - Consider left or right position based on layout

5. **Accessibility:**
   - Always pair with descriptive text
   - Don't rely solely on color to convey meaning
   - Use ARIA labels when needed

## Animation Examples

### Pulse Effect
```jsx
<Dot
  color="error"
  sx={{
    animation: 'pulse 1.5s ease-in-out infinite',
    '@keyframes pulse': {
      '0%, 100%': { transform: 'scale(1)', opacity: 1 },
      '50%': { transform: 'scale(1.2)', opacity: 0.7 }
    }
  }}
/>
```

### Blink Effect
```jsx
<Dot
  color="warning"
  sx={{
    animation: 'blink 1s linear infinite',
    '@keyframes blink': {
      '0%, 49%': { opacity: 1 },
      '50%, 100%': { opacity: 0 }
    }
  }}
/>
```

## Related Components

- **Avatar**: Often combined for status indicators
- **Badge**: Works well as badge content
- **Chip**: Can be used as Chip icon
- **ListItemIcon**: Common container for list status

## Notes

- Extremely lightweight component
- Renders as Material-UI Box with minimal styling
- Fully customizable via sx prop
- Supports all Box component props via spread operator
- Color values resolved via theme's getColors utility
