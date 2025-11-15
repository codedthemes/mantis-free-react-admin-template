# MainCard Component

**Location:** `src/components/MainCard.jsx`

## Overview

MainCard is the primary card wrapper component used throughout the Mantis template. It provides a customizable Material-UI Card with extensive styling options, built-in header support, and flexible content rendering.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `border` | `boolean` | `true` | Show/hide card border |
| `boxShadow` | `boolean` | - | Enable box shadow on card |
| `children` | `node` | - | Card content |
| `subheader` | `string \| node` | - | Subheader text or component |
| `content` | `boolean` | `true` | Wrap children in CardContent |
| `contentSX` | `object` | `{}` | Style object for CardContent |
| `darkTitle` | `boolean` | - | Use h4 variant for title (darker/larger) |
| `divider` | `boolean` | `true` | Show divider between header and content |
| `elevation` | `number` | `0` | Material-UI elevation level |
| `secondary` | `any` | - | Action component in card header |
| `shadow` | `string` | - | Custom shadow style |
| `sx` | `object \| function` | `{}` | Style object or function for Card |
| `title` | `string \| node` | - | Card title text or component |
| `codeHighlight` | `boolean` | `false` | Apply code highlighting styles |
| `codeString` | `string` | - | Code string for syntax highlighting |
| `modal` | `boolean` | `false` | Position card as centered modal |

## Usage Examples

### Basic Card

```jsx
import MainCard from 'components/MainCard';

<MainCard title="Dashboard Analytics">
  <Typography>Card content goes here</Typography>
</MainCard>
```

### Card with Actions

```jsx
<MainCard
  title="Sales Report"
  secondary={
    <IconButton>
      <MoreOutlined />
    </IconButton>
  }
>
  <SalesChart />
</MainCard>
```

### Card without Border

```jsx
<MainCard
  title="User Profile"
  border={false}
  boxShadow
>
  <UserDetails />
</MainCard>
```

### Modal Card

```jsx
<MainCard
  title="Edit Profile"
  modal
  border={false}
  boxShadow
>
  <ProfileForm />
</MainCard>
```

### Card with Custom Styles

```jsx
<MainCard
  title="Statistics"
  sx={{
    bgcolor: 'primary.lighter',
    '& .MuiCardContent-root': { py: 3 }
  }}
  contentSX={{ p: 3 }}
>
  <StatisticsGrid />
</MainCard>
```

### Card without Content Wrapper

```jsx
<MainCard title="Data Table" content={false}>
  <Table>
    {/* Table rows */}
  </Table>
</MainCard>
```

## Styling Details

### Default Styles

- Border radius: `1` (8px in theme)
- Border color: `theme.vars.palette.grey['A800']`
- Padding: `2.5` (20px) for header, varies for content

### Modal Mode

When `modal={true}`:
- Positioned absolutely at center of viewport
- Transform: `translate(-50%, -50%)`
- Width: Full width minus 50px on mobile, auto on larger screens
- Max width: 768px

### Code Highlight Mode

When `codeHighlight={true}`:
- Pre tags have no margin
- Padding: 12px
- Font family: Theme typography font family
- Font size: 0.75rem

## Design Patterns

### Standard Dashboard Card
```jsx
<MainCard title="Monthly Sales" divider>
  <MonthlyBarChart />
</MainCard>
```

### Card with Subheader
```jsx
<MainCard
  title="User Activity"
  subheader="Last 30 days"
  secondary={<Button>View All</Button>}
>
  <ActivityChart />
</MainCard>
```

### Borderless Shadow Card
```jsx
<MainCard border={false} boxShadow>
  <Grid container spacing={2}>
    {/* Grid items */}
  </Grid>
</MainCard>
```

## Related Components

- **AnalyticEcommerce**: Uses MainCard for analytics displays
- **UniqueVisitorCard**: Extends MainCard for visitor statistics
- **SaleReportCard**: Dashboard card using MainCard wrapper

## Notes

- The `sx` prop accepts both objects and functions for dynamic theming
- When `content={false}`, children are rendered directly without CardContent wrapper
- Border and boxShadow are mutually exclusive by design
- The component forwards all additional props to the underlying MUI Card component
