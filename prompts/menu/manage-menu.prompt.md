<!-- DESCRIPTION: This prompt is used to manage the menus, you can add remove menus using this -->

<!-- AGENT: Gemini 3 Pro -->

I want to **manage the application menus**.
Please follow the instructions below to remove or keep specific menus based on my request.

**My Request:**
{{USER_REQUEST_DETAILS}}
(e.g., "Remove the 'widget' and 'forms' menus" OR "Only keep 'dashboard' and 'applications'")

**Rules for Execution:**

1.  **Analyze `src/menu-items/index.jsx`:**
    - Identify the imported menu objects (e.g., `widget`, `formsTables`, `chartsMap`).
    - Determine which ones correspond to the user's request.
    - **Action:** Remove the unwanted menu objects from the `items` array in `menuItems`.
    - **Action:** Remove the corresponding `import` statements.

2.  **Update `src/routes/MainRoutes.jsx` (and others if needed):**
    - Find the routes associated with the removed menus (look for matching `path` values like `widget`, `forms`, `charts`).
    - **Action:** Remove the route definitions for the deleted menus.
    - **Action:** Remove the associated `import` statements (e.g., `const WidgetStatistics = ...`).

3.  **Clean up `src/menu-items/` (Optional but Recommended):**
    - If a menu file (e.g., `src/menu-items/widget.js`) is no longer imported by `index.jsx`, IT IS SAFE TO DELETE THE FILE.
    - **Action:** Delete the unused menu item definition file.

4.  **CRITICAL - NO COMPONENT DELETION:**
    - **Do NOT delete any components** from `src/pages/`, `src/sections/`, or `src/components/`, even if they seem unused.
    - The user explicitly requested to **retain all components**. Only remove the _navigation entry points_ (menus and routes).

5.  **Final Verification:**
    - Ensure the application builds without errors (no missing imports).
    - Verify `src/menu-items/index.jsx` only contains the desired menus.

## Example

**Input:**
Remove 'widget' and 'forms' menus.

**Output:**

- Modified `src/menu-items/index.jsx`: Removed `widget` and `formsTables` from items.
- Deleted `src/menu-items/widget.js` and `src/menu-items/forms-tables.js`.
- Modified `src/routes/MainRoutes.jsx`: Removed paths `'widget'` and `'forms'` and their imports.
- **KEPT:** `src/pages/widget/`, `src/pages/forms/` (Components remained untouched).
