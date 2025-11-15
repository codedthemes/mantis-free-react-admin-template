# Transitions Component

**Location:** `src/components/@extended/Transitions.jsx`

## Overview

Transitions is a wrapper component that provides consistent animation transitions using Material-UI's animation components. It supports five transition types (grow, collapse, fade, slide, zoom) with configurable positions and directions.

## Dependencies

- Material-UI animation components:
  - `Collapse`
  - `Fade`
  - `Grow`
  - `Slide`
  - `Zoom`
- Material-UI `Box`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `node` | - | Content to animate |
| `type` | `'grow' \| 'collapse' \| 'fade' \| 'slide' \| 'zoom'` | `'grow'` | Animation type |
| `position` | `'top-left' \| 'top' \| 'top-right' \| 'bottom-left' \| 'bottom' \| 'bottom-right'` | `'top-left'` | Transform origin position |
| `direction` | `'up' \| 'down' \| 'left' \| 'right'` | `'up'` | Direction for slide animation |
| `ref` | `any` | - | React ref |

## Animation Types

### Grow (Default)
Scales element from transform origin.

```jsx
import Transitions from 'components/@extended/Transitions';

<Transitions type="grow" position="top-left">
  <Paper>
    <MenuList>
      <MenuItem>Profile</MenuItem>
      <MenuItem>Settings</MenuItem>
    </MenuList>
  </Paper>
</Transitions>
```

**Timing:**
- Enter: 150ms
- Exit: 150ms

### Collapse
Vertical collapse/expand animation.

```jsx
<Transitions type="collapse">
  <Alert severity="info">
    This is a collapsible alert message
  </Alert>
</Transitions>
```

**Timing:** Default MUI Collapse timing

### Fade
Opacity fade in/out.

```jsx
<Transitions type="fade">
  <Box>
    <Typography>Fading content</Typography>
  </Box>
</Transitions>
```

**Timing:**
- Enter: 300ms
- Exit: 150ms

### Slide
Slides from specified direction.

```jsx
<Transitions type="slide" direction="left">
  <Drawer>
    <DrawerContent />
  </Drawer>
</Transitions>
```

**Timing:**
- Enter: 150ms
- Exit: 150ms

**Directions:** `up`, `down`, `left`, `right`

### Zoom
Zoom in/out effect.

```jsx
<Transitions type="zoom">
  <Tooltip title="Tooltip">
    <IconButton>
      <InfoOutlined />
    </IconButton>
  </Tooltip>
</Transitions>
```

**Timing:** Default MUI Zoom timing (200ms)

## Transform Origin Positions

Controls where the animation originates from:

| Position | Transform Origin | Common Use |
|----------|------------------|------------|
| `top-left` | `0 0 0` (default) | Dropdown menus |
| `top` | `top` | Top-aligned popovers |
| `top-right` | `top right` | User menu dropdowns |
| `bottom-left` | `bottom left` | Bottom-left menus |
| `bottom` | `bottom` | Bottom sheets |
| `bottom-right` | `bottom right` | Action menus |

## Usage Examples

### Dropdown Menu

```jsx
<Popper open={open} anchorEl={anchorEl}>
  <Transitions type="grow" position="top-right">
    <Paper>
      <ClickAwayListener onClickAway={handleClose}>
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </ClickAwayListener>
    </Paper>
  </Transitions>
</Popper>
```

### Expandable Panel

```jsx
<Card>
  <CardHeader
    title="Details"
    action={
      <IconButton onClick={() => setExpanded(!expanded)}>
        <ExpandMoreOutlined />
      </IconButton>
    }
  />
  <Transitions type="collapse" in={expanded}>
    <CardContent>
      <Typography>Panel content</Typography>
    </CardContent>
  </Transitions>
</Card>
```

### Notification Fade

```jsx
<Transitions type="fade" in={showNotification}>
  <Alert
    severity="success"
    onClose={() => setShowNotification(false)}
  >
    Action completed successfully!
  </Alert>
</Transitions>
```

### Drawer Slide

```jsx
<Transitions type="slide" direction="right" in={drawerOpen}>
  <Drawer variant="persistent" open={drawerOpen}>
    <DrawerContent />
  </Drawer>
</Transitions>
```

### Modal Zoom

```jsx
<Modal open={modalOpen} onClose={handleClose}>
  <Transitions type="zoom" in={modalOpen}>
    <Paper sx={modalStyle}>
      <Typography variant="h4">Modal Title</Typography>
      <Typography>Modal content</Typography>
    </Paper>
  </Transitions>
</Modal>
```

## Common Patterns

### User Profile Menu

```jsx
<Popper
  open={profileOpen}
  anchorEl={profileAnchor}
  placement="bottom-end"
>
  <Transitions type="grow" position="top-right">
    <Paper elevation={3}>
      <ClickAwayListener onClickAway={handleClose}>
        <MenuList>
          <MenuItem>
            <ListItemIcon><UserOutlined /></ListItemIcon>
            <ListItemText>Profile</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon><SettingOutlined /></ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon><LogoutOutlined /></ListItemIcon>
            <ListItemText>Logout</ListItemText>
          </MenuItem>
        </MenuList>
      </ClickAwayListener>
    </Paper>
  </Transitions>
</Popper>
```

### Notification Stack

```jsx
{notifications.map((notification) => (
  <Transitions key={notification.id} type="fade" in={notification.show}>
    <Alert
      severity={notification.type}
      sx={{ mb: 1 }}
      onClose={() => removeNotification(notification.id)}
    >
      {notification.message}
    </Alert>
  </Transitions>
))}
```

### Accordion Content

```jsx
<Accordion expanded={expanded === 'panel1'}>
  <AccordionSummary onClick={() => handleChange('panel1')}>
    <Typography>Section 1</Typography>
  </AccordionSummary>
  <Transitions type="collapse" in={expanded === 'panel1'}>
    <AccordionDetails>
      <Typography>Section 1 content</Typography>
    </AccordionDetails>
  </Transitions>
</Accordion>
```

### Search Results

```jsx
<Transitions type="grow" position="top-left" in={searchOpen}>
  <Paper sx={{ position: 'absolute', width: '100%', mt: 1 }}>
    <List>
      {results.map((result) => (
        <ListItem key={result.id} button>
          <ListItemText primary={result.title} />
        </ListItem>
      ))}
    </List>
  </Paper>
</Transitions>
```

## PopupTransition Component

A specialized transition component for popup elements with fixed timing.

```jsx
import { PopupTransition } from 'components/@extended/Transitions';

<Popover
  TransitionComponent={PopupTransition}
  anchorEl={anchorEl}
  open={open}
>
  <Paper>Popup content</Paper>
</Popover>
```

**Features:**
- Uses Zoom animation
- Fixed 200ms timeout
- Designed for Popover/Tooltip components

## Timing Summary

| Type | Appear | Enter | Exit |
|------|--------|-------|------|
| Grow | 0ms | 150ms | 150ms |
| Fade | 0ms | 300ms | 150ms |
| Slide | 0ms | 150ms | 150ms |
| Collapse | Default | Default | Default |
| Zoom | Default (200ms) | Default | Default |
| PopupTransition | 200ms | 200ms | 200ms |

## Best Practices

1. **Type Selection:**
   - Use `grow` for dropdown menus and popovers
   - Use `collapse` for expandable panels
   - Use `fade` for notifications and alerts
   - Use `slide` for drawers and side panels
   - Use `zoom` for modals and tooltips

2. **Position Selection:**
   - Match position to element's anchor point
   - `top-right` for user menus (right-aligned)
   - `top-left` for standard dropdowns (left-aligned)
   - `bottom` for bottom sheets

3. **Direction (Slide):**
   - Match drawer position (`left` drawer → `direction="right"`)
   - Consider natural reading direction

4. **Performance:**
   - Avoid nesting multiple transition types
   - Use `appear={0}` to skip initial mount animation
   - Consider reducing motion for accessibility

5. **Integration:**
   - Works with MUI's `in` prop for conditional rendering
   - Combine with ClickAwayListener for menus
   - Use with Popper/Popover for positioned elements

## Accessibility

- Respects `prefers-reduced-motion` media query (via MUI)
- Maintains focus management during transitions
- Announces content changes to screen readers
- Keyboard navigation unaffected by animations

## Related Components

- Material-UI **Popper**: Common container for transitions
- Material-UI **Modal**: Uses transitions for appear/exit
- **ClickAwayListener**: Often paired for menu closing
- Material-UI **Collapse**: Base for collapse type

## Notes

- All MUI transition props supported via spread operator
- Wraps children in Box for transform origin styling
- `PopupTransition` is optimized for popup elements
- Transition timing optimized for smooth UX
- No exit delay on grow/fade for responsive feel
