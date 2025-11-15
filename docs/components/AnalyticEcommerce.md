# AnalyticEcommerce Component

**Location:** `src/components/cards/statistics/AnalyticEcommerce.jsx`

## Overview

AnalyticEcommerce is a statistics card component designed for displaying key performance metrics with percentage indicators. Perfect for dashboards, analytics displays, and e-commerce statistics.

## Dependencies

- **MainCard** - Card wrapper component
- Material-UI: `Chip`, `Grid`, `Stack`, `Typography`, `Box`
- Ant Design icons: `RiseOutlined`, `FallOutlined`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `string` | `'primary'` | Theme color for percentage chip |
| `title` | `string` | - | Metric title/label |
| `count` | `string` | - | Main metric value |
| `percentage` | `number` | - | Percentage change (optional) |
| `isLoss` | `boolean` | - | True shows fall icon, false shows rise icon |
| `extra` | `string` | - | Additional context text (highlighted) |

## Color Options

- `primary` - Blue
- `secondary` - Grey
- `success` - Green
- `error` - Red
- `warning` - Orange/Gold
- `info` - Cyan

## Usage Examples

### Basic Metric Card

```jsx
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';

<AnalyticEcommerce
  title="Total Sales"
  count="$45,678"
/>
```

### With Positive Growth

```jsx
<AnalyticEcommerce
  title="Revenue"
  count="$125,678"
  percentage={12.5}
  isLoss={false}
  color="success"
  extra="$15,235"
/>
```

### With Negative Growth

```jsx
<AnalyticEcommerce
  title="Orders"
  count="1,234"
  percentage={5.3}
  isLoss={true}
  color="error"
  extra="-68 orders"
/>
```

### Warning Indicator

```jsx
<AnalyticEcommerce
  title="Pending Approvals"
  count="23"
  percentage={8.2}
  color="warning"
  extra="3 approvals"
/>
```

## Common Patterns

### Dashboard Statistics Grid

```jsx
<Grid container spacing={3}>
  <Grid item xs={12} sm={6} md={3}>
    <AnalyticEcommerce
      title="Total Sales"
      count="$45,234"
      percentage={12.5}
      color="success"
      extra="$5,234"
    />
  </Grid>

  <Grid item xs={12} sm={6} md={3}>
    <AnalyticEcommerce
      title="Total Orders"
      count="1,234"
      percentage={5.8}
      isLoss={true}
      color="error"
      extra="-75 orders"
    />
  </Grid>

  <Grid item xs={12} sm={6} md={3}>
    <AnalyticEcommerce
      title="Active Users"
      count="3,456"
      percentage={18.2}
      color="primary"
      extra="634 users"
    />
  </Grid>

  <Grid item xs={12} sm={6} md={3}>
    <AnalyticEcommerce
      title="Conversion Rate"
      count="3.45%"
      percentage={2.1}
      color="info"
      extra="0.07%"
    />
  </Grid>
</Grid>
```

### E-commerce Metrics

```jsx
// Sales metric
<AnalyticEcommerce
  title="Total Sales"
  count="$125,678"
  percentage={15.3}
  color="success"
  extra="$16,789"
/>

// Product views
<AnalyticEcommerce
  title="Product Views"
  count="45,234"
  percentage={22.5}
  color="primary"
  extra="8,345 views"
/>

// Cart abandonment
<AnalyticEcommerce
  title="Cart Abandonment"
  count="23.5%"
  percentage={3.2}
  isLoss={true}
  color="warning"
  extra="2.1%"
/>
```

### User Analytics

```jsx
<AnalyticEcommerce
  title="New Users"
  count="1,234"
  percentage={28.5}
  color="success"
  extra="345 users"
/>

<AnalyticEcommerce
  title="Churn Rate"
  count="2.3%"
  percentage={0.5}
  isLoss={true}
  color="error"
  extra="-0.1%"
/>
```

### Without Percentage

```jsx
<AnalyticEcommerce
  title="Total Products"
  count="456"
  color="secondary"
  extra="23 products"
/>
```

## Layout Details

### Card Padding
- Content padding: `2.25` (18px)
- Top spacing for extra text: `2.25` (18px)

### Typography
- Title: `h6` variant, secondary text color
- Count: `h4` variant, inherit color
- Extra: `caption` variant, secondary color
- Extra highlight: `caption` variant, colored (matches color prop)

### Chip Styling
- Variant: `combined` (light background with border)
- Size: `small`
- Left margin: `1.25` (10px)
- Left padding: `1` (8px)
- Icon size: `0.75rem`

### Icon Logic
- `isLoss={false}` or undefined: Shows `RiseOutlined` (upward arrow)
- `isLoss={true}`: Shows `FallOutlined` (downward arrow)

## Responsive Behavior

The card is fully responsive and adapts to its container:
- Stacks elements vertically at all breakpoints
- Count and percentage chip aligned horizontally
- Works in any grid configuration

## Best Practices

1. **Count Formatting:**
   - Use appropriate number formatting (commas, decimals)
   - Include currency symbols when relevant
   - Keep values concise and readable

2. **Color Selection:**
   - Use `success` for positive metrics
   - Use `error` for negative metrics
   - Use `warning` for caution metrics
   - Use `primary`/`info` for neutral metrics

3. **Percentage Usage:**
   - Omit percentage if not relevant
   - Set `isLoss` appropriately based on context
   - Note: Some metrics are inverted (e.g., lower churn is better)

4. **Extra Text:**
   - Provide meaningful context
   - Keep it concise (1-3 words + value)
   - Use appropriate units ($, orders, users, etc.)

5. **Grid Layout:**
   - Use 4-column layout on desktop (md={3})
   - Stack to 2 columns on tablet (sm={6})
   - Full width on mobile (xs={12})

## Styling Customization

### Custom Card Styling

Since the component extends MainCard, you can't directly pass MainCard props. To customize, you would need to wrap or modify the component.

### Custom Color Combinations

```jsx
// Success with green
<AnalyticEcommerce
  color="success"
  title="Revenue Growth"
  count="$125K"
  percentage={15}
/>

// Error with red
<AnalyticEcommerce
  color="error"
  title="Failed Transactions"
  count="23"
  percentage={5.2}
  isLoss={true}
/>
```

## Context Message

The component includes a hardcoded message:
```
"You made an extra {extra} this year"
```

This message:
- Appears below the main metric
- Highlights the `extra` value in the theme color
- Uses caption typography
- May need customization for different use cases

## Related Components

- **MainCard**: Base card wrapper
- Material-UI **Chip**: Percentage indicator
- **Dashboard Default Page** (`src/pages/dashboard/default.jsx`): Uses this component

## Common Metrics Examples

### Sales & Revenue
```jsx
<AnalyticEcommerce
  title="Monthly Revenue"
  count="$234,567"
  percentage={18.7}
  color="success"
  extra="$37,234"
/>
```

### Traffic & Engagement
```jsx
<AnalyticEcommerce
  title="Page Views"
  count="2.3M"
  percentage={25.8}
  color="primary"
  extra="495K views"
/>
```

### Conversion Metrics
```jsx
<AnalyticEcommerce
  title="Conversion Rate"
  count="3.42%"
  percentage={0.8}
  color="success"
  extra="0.27%"
/>
```

### Performance Indicators
```jsx
<AnalyticEcommerce
  title="Avg Response Time"
  count="234ms"
  percentage={12.3}
  isLoss={true}
  color="success"  // Lower is better, but showing decrease
  extra="-33ms"
/>
```

## Notes

- The component uses `contentSX={{ p: 2.25 }}` for consistent padding
- Percentage chip uses `combined` variant for subtle appearance
- Icons are color-inherited from the chip
- Extra text message is fixed and may need localization
- All numeric values are passed as strings for flexibility
- The component is optimized for dashboard layouts
