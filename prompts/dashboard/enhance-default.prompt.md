<!-- DESCRIPTION: This feature provides real-time analytics, traffic visualization, product performance tracking, inventory management, task management, activity monitoring, customer feedback display, and event scheduling - all in one centralized dashboard view for maximum productivity and business insight. -->

<!-- AGENT : Claude Opus 4.5 -->

# Dashboard Default Prompt

## Overview

This prompt adds new features/sections to the Dashboard Default Page to create a comprehensive business command center using clean, modern JavaScript.

---

## Your Task

When I specify the default dashboard and my requirements, you will:

1. **Analyze** the target dashboard structure and existing components
2. **Implement** the requested changes following these rules:
   - Use clean, modern JavaScript
   - Follow MUI v6 Grid2 syntax (use `size` prop, not deprecated `item/xs/md/lg`)
   - Use ApexCharts for visualizations
   - Maintain responsive design (xs, sm, md, lg breakpoints)
   - Support both light and dark themes
   - Update components in `src/sections/dashboard/default/` (.jsx)
3. **Generate** complete, production-ready code with proper imports and exports

---

## Code Standards

- Use functional components with React hooks
- Implement proper loading and error states
- Use MUI components (MainCard, Stack, Grid, Typography, etc.)
- Follow existing naming conventions
- Add JSDoc comments for complex logic
- Use mock data for demonstrations

---

## Features to Add

### 1. Conversion Rate Card

**File:** `src/components/cards/statistics/AnalyticEcommerce.jsx`
**Features:**

- Current conversion rate percentage
- Trend indicator with percentage change
- Mini area chart showing 12-period trend
- Caption explaining the metric

### 2. Average Order Value (AOV) Card

**File:** `src/components/cards/statistics/AnalyticEcommerce.jsx`
**Planned Enhancements:**

- Current AOV amount
- Trend indicator with percentage change
- Mini bar chart showing 12-period trend
- Caption explaining the metric

---

### 3. Traffic Sources Chart

**File:** `src/sections/dashboard/default/TrafficSourcesChart.jsx`
**Features:**

- Period selector (Week/Month/Year)
- Sources: Direct, Organic Search, Social Media, Referral, Email
- Percentage breakdown with color legend
- Interactive tooltips

### 4. Top Products Table

**File:** `src/sections/dashboard/default/TopProductsTable.jsx`
**Planned Enhancements:**

- Product name with category
- Sales count with trend percentage
- Revenue amount
- Stock level progress bar
- Color-coded stock status

---

### 5. Quick Actions Panel

**File:** `src/sections/dashboard/default/QuickActions.jsx`
**Actions:**

- Add Product
- New Invoice
- New Order
- Add Customer
- View Reports
- Send Email
  **Features:**
- Dashed border buttons
- Hover effects with color fill
- 2x3 or 3x2 grid layout

### 6. Activity Feed

**File:** `src/sections/dashboard/default/ActivityFeed.jsx`
**Planned Enhancements:**

- "Live" indicator chip
- Event types: Order, Payment, User, Notification, Completed
- Color-coded avatars per event type
- Timestamps (relative time)
- Event descriptions

---

### 7. Customer Reviews Widget

**File:** `src/sections/dashboard/default/CustomerReviews.jsx`
**Features:**

- Customer avatar and name
- Star rating (1-5)
- Product chip/tag
- Review comment text
- Relative timestamp
- Average rating summary in header

### 8. Inventory Alerts

**File:** `src/sections/dashboard/default/InventoryAlerts.jsx`
**Planned Enhancements:**

- Status chips: Critical, Warning, Low
- Product name and SKU
- Stock level progress bar
- Current vs minimum stock count
- "Reorder" action button

---

### 9. To-Do List

**File:** `src/sections/dashboard/default/TodoList.jsx`
**Features:**

- Add new task input field
- Checkbox for completion toggle
- Priority chips (High/Medium/Low)
- Delete button per item
- Pending/Done count summary
- Strikethrough completed items

### 10. Upcoming Events

**File:** `src/sections/dashboard/default/UpcomingEvents.jsx`
**Planned Enhancements:**

- Event types: Meeting, Deadline, Launch, Sale, Team
- Color-coded avatars per type
- Date chips (Today=red, Tomorrow=yellow, Future=outlined)
- Time and description
- Dividers between items

---

## User Requirements

**Dashboard:** Default

**Changes Required:**
[DESCRIBE YOUR CHANGES HERE]

**Design Preferences:**
[OPTIONAL - SPECIFY IF NEEDED]

Now implement the requested dashboard customization with complete, working code.

---
