<!-- DESCRIPTION: Add Scroll to Top Button to Landing Page: Implement a floating "Scroll to Top" button specifically for the Landing Page to improve navigation on long scrollable content. -->

<!-- VIDEO_ID: 9bZkp7q19f0 -->

<!-- AGENT: Claude Opus 4.5 -->

## Requirements

### 1. Feature Description
Add a **Floating "Scroll to Top" Button** to the Landing Page (`src/pages/landing.tsx`).
- **Behavior**: The button should appear when the user scrolls down (e.g., > 200px) and disappear when at the top.
- **Action**: Clicking the button should smoothly scroll the window back to the top.
- **Positioning**: Fixed at the bottom-right corner, ensuring it doesn't overlap with the existing "Preset Color" switcher if present.
- **Styling**: Circular Floating Action Button (FAB) with primary theme color.

### 2. Files to Modify/Create

| File | Action | Purpose |
|------|--------|---------|
| `src/components/ScrollToTopButton.tsx` | **CREATE** | Reusable Scroll to Top button component (if not exists) |
| `src/pages/landing.tsx` | **MODIFY** | Import and add the button to the landing page layout |

---

### 3. Implementation Details

#### **1. Reusable Component (`src/components/ScrollToTopButton.tsx`)**

If this component doesn't exist yet, create it. It uses `useScrollTrigger` for visibility.

### 4. Positioning Considerations
- The Landing page currently has a "Preset Color" switcher that slides in at `bottom: { xs: 0, sm: '25%' }` and `right: { xs: 0, sm: 16 }`.
- Ensure `ScrollToTopButton` is positioned to avoid collision, e.g., `bottom: 30px` and `right: 30px`.
- Since the Preset Color switcher takes up vertical space on the side, moving the ScrollToTop button to **bottom-right** (standard) is fine, as the color switcher is `bottom: 25%` (approx middle-bottom-right).

## Acceptance Criteria
- [ ] Scroll to Top button appears after scrolling down 200px.
- [ ] Button is hidden when at the top of the page.
- [ ] Clicking smoothly scrolls to top.
- [ ] Button does not overlap with the existing Color Preset switcher.
- [ ] Consistent styling with the rest of the Landing page.
