<!-- DESCRIPTION: This prompt is designed to remove all unused pages, utilities, and components from the project, attempting to keep only a clean, minimal dashboard or a specific page requested by the user. -->

<!-- AGENT : Gemini 3 Flash -->

I want to specifically focus on the **{{KEEP_PAGE_NAME}}** page/section.
Please remove all other sample pages and unnecessary components from the codebase to clean it up.

**Rules for Removal:**

1.  **Identify the Page to Keep:** Ensure you clearly understand which page or section is "{{KEEP_PAGE_NAME}}". If "{{KEEP_PAGE_NAME}}" is "minimal", remove all sample pages.
2.  **Delete Page Files:**
    - `src/pages/component-overview/`: Remove files NOT belonging to {{KEEP_PAGE_NAME}}.
    - `src/pages/extra-pages/`: Remove files NOT belonging to {{KEEP_PAGE_NAME}} (e.g., `sample-page.jsx`).
    - `src/sections/`: Remove directories/files NOT used by the dashboard or the page you are keeping.
3.  **Clean Global References (Crucial):**
    - **Layouts:** Check `src/layout/Dashboard/Drawer/DrawerContent/Navigation` and `src/layout/Dashboard/` for any hardcoded links to deleted pages.
    - **Landing/Main Page:** Check `src/pages/dashboard/` or `src/index.jsx` for imports of deleted components.
4.  **Update Routing & Navigation:**
    - `src/routes/MainRoutes.jsx`: Remove routes **AND** their imports for the pages being deleted.
    - `src/menu-items/`: 
        - Update `utilities.jsx`, `page.jsx`, and `support.jsx` to remove links to deleted pages.
        - Update `index.jsx` to exclude entire menu groups if all their items are removed.
5.  **Final Verification:** Run a global search for the deleted page names (e.g., "color", "shadow", "sample-page") to ensure no "dead" imports or navigation items remain in the codebase.

## Example

**Input:**
I want to focus on a **minimal** dashboard. Remove all other sample pages.

**Output:**

- Deleted `src/pages/component-overview/color.jsx`, `shadows.jsx`, `typography.jsx`, etc.
- Deleted `src/pages/extra-pages/sample-page.jsx`.
- Updated `src/routes/MainRoutes.jsx` to remove sample page routes.
- Updated `src/menu-items/utilities.jsx`, `src/menu-items/page.jsx`, and `src/menu-items/support.jsx` to remove menu items.
- Updated `src/menu-items/index.jsx` to only include the dashboard group.
