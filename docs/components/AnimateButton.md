# AnimateButton Component

**Location:** `src/components/@extended/AnimateButton.jsx`

## Overview

AnimateButton is a wrapper component that adds smooth animations to button elements using Framer Motion. It supports three animation types: scale, slide, and rotate.

## Dependencies

- `framer-motion` - Animation library
- Uses `motion.div` and `useCycle` hook

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `node` | - | Button or element to animate |
| `type` | `'scale' \| 'slide' \| 'rotate'` | `'scale'` | Animation type |
| `direction` | `'up' \| 'down' \| 'left' \| 'right'` | `'right'` | Direction for slide animation |
| `offset` | `number` | `10` | Pixel offset for slide animation |
| `scale` | `object \| number` | `{ hover: 1.05, tap: 0.954 }` | Scale values for hover and tap states |

## Animation Types

### Scale (Default)

Scales the button on hover and tap interactions.

```jsx
import AnimateButton from 'components/@extended/AnimateButton';

<AnimateButton>
  <Button variant="contained">Click Me</Button>
</AnimateButton>
```

**Custom Scale:**
```jsx
<AnimateButton scale={{ hover: 1.1, tap: 0.9 }}>
  <Button variant="contained">Bigger Scale</Button>
</AnimateButton>
```

**Numeric Scale:**
```jsx
<AnimateButton scale={1.08}>
  <Button variant="contained">Same scale for both</Button>
</AnimateButton>
```

### Slide

Slides the button in the specified direction on hover.

```jsx
<AnimateButton type="slide" direction="right" offset={10}>
  <Button variant="outlined">Slide Right</Button>
</AnimateButton>
```

**Directions:**
```jsx
// Slide up
<AnimateButton type="slide" direction="up" offset={5}>
  <Button>Slide Up</Button>
</AnimateButton>

// Slide down
<AnimateButton type="slide" direction="down" offset={8}>
  <Button>Slide Down</Button>
</AnimateButton>

// Slide left
<AnimateButton type="slide" direction="left" offset={10}>
  <Button>Slide Left</Button>
</AnimateButton>
```

### Rotate

Continuously rotates the element in a loop.

```jsx
<AnimateButton type="rotate">
  <IconButton>
    <SyncOutlined />
  </IconButton>
</AnimateButton>
```

## Usage Examples

### Primary CTA Button

```jsx
<AnimateButton scale={{ hover: 1.08, tap: 0.95 }}>
  <Button variant="contained" color="primary" size="large">
    Get Started
  </Button>
</AnimateButton>
```

### Icon Button with Rotation

```jsx
<AnimateButton type="rotate">
  <IconButton color="primary">
    <LoadingOutlined />
  </IconButton>
</AnimateButton>
```

### Slide Navigation Button

```jsx
<AnimateButton type="slide" direction="right" offset={12}>
  <Button endIcon={<RightOutlined />}>
    Next Step
  </Button>
</AnimateButton>
```

### Subtle Hover Effect

```jsx
<AnimateButton scale={{ hover: 1.02, tap: 0.98 }}>
  <Button variant="text">Learn More</Button>
</AnimateButton>
```

## Animation Details

### Scale Animation
- **Hover Scale:** 1.05 (5% larger)
- **Tap Scale:** 0.954 (slightly smaller on click)
- Smooth transitions using Framer Motion

### Slide Animation
- **Offset:** Configurable pixel movement
- **Direction Logic:**
  - `up`/`left`: Starts at offset, returns to 0
  - `down`/`right`: Starts at 0, moves to offset
- Toggles on hover start/end

### Rotate Animation
- **Rotation:** 360 degrees
- **Duration:** 2 seconds
- **Repeat:** Infinite loop
- **No delay** between rotations

## Common Patterns

### Call-to-Action Button
```jsx
<AnimateButton>
  <Button
    variant="contained"
    size="large"
    startIcon={<PlusOutlined />}
  >
    Create New
  </Button>
</AnimateButton>
```

### Navigation Arrow
```jsx
<AnimateButton type="slide" direction="right">
  <IconButton>
    <ArrowRightOutlined />
  </IconButton>
</AnimateButton>
```

### Loading Indicator
```jsx
<AnimateButton type="rotate">
  <LoadingOutlined style={{ fontSize: 24 }} />
</AnimateButton>
```

## Best Practices

1. **Performance:** Use sparingly - too many animations can impact performance
2. **Accessibility:** Ensure animations don't interfere with button functionality
3. **Scale Values:** Keep scale changes subtle (1.02-1.1 range) for professional look
4. **Type Selection:**
   - Use `scale` for most buttons (default, subtle)
   - Use `slide` for directional navigation
   - Use `rotate` only for loading/refresh indicators
5. **Offset Values:** Keep slide offsets small (5-15px) for smooth effect

## Related Components

- **IconButton**: Often wrapped with AnimateButton
- Material-UI **Button**: Primary use case for AnimateButton wrapper

## Notes

- Wraps children in `motion.div`, so any element can be animated
- Does not modify the child component's props or functionality
- Animations are hardware-accelerated via Framer Motion
- All animations use smooth easing by default
