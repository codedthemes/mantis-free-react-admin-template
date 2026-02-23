<!-- DESCRIPTION: This prompt helps users remove icons from the sidebar menu list. It modifies the navigation components to hide icon rendering logic. -->

<!-- AGENT: Gemini 3 Pro -->

I want to remove all icons from the sidebar navigation menu in my project. Please update the navigation components to stop rendering icons.

Modify the following files:

1. `src/layout/Dashboard/Drawer/DrawerContent/Navigation/NavItem.jsx`
2. `src/layout/Dashboard/Drawer/DrawerContent/Navigation/NavCollapse.jsx`

**Requirements:**

- In `NavItem.jsx`:
  - Locate and remove the logic that initializes `itemIcon`.
  - Remove all `<ListItemIcon>` components, including the one that renders `itemIcon` and the one that renders a fallback `<Dot />`.
  - Ensure `ListItemText` for the menu title remains properly aligned. You may need to adjust the `pl` (padding-left) or other spacing attributes on `ListItemButton` to compensate for the missing icon space.
- In `NavCollapse.jsx`:
  - Locate and remove the logic that initializes `menuIcon` and handles the `borderIcon`.
  - Remove the `<ListItemIcon>` component that renders these icons.
  - Ensure the text and the collapse arrow (up/down/right) remain correctly positioned.
- General:
  - Keep the code clean and remove any unused imports like `ListItemIcon`, `Dot`, and icon assets (e.g., `@ant-design/icons`) if they are no longer used after your changes.
  - Make sure both vertical and horizontal layouts (if present in the files) are updated accordingly.

## Example

**Input:**
Standard Mantis sidebar with "Dashboard", "Statistics", etc., each having a leading icon.

**Output:**
A simplified sidebar with only text labels. The labels should be shifted to the left to occupy the space where the icons used to be, ensuring a clean and professional look.
