<!-- DESCRIPTION: This prompt guides the user/agent to set the Login page as the default landing page ('/') while maintaining the existing '/login' route for compatibility. -->

<!-- VIDEO_ID: 9bZkp7q19f0 -->

<!-- AGENT: GEMINI 3 PRO -->

Please configure the React routing to make the Login page as the default starting page of the application (`/`).

Follow these specific requirements:
1.  **Modify `src/routes/index.tsx`**:
    *   Remove the default Landing Page route that is currently serving `/`.
    *   Ensure `LoginRoutes` is imported and included in the `createBrowserRouter` array.

2.  **Modify `src/routes/LoginRoutes.tsx`**:
    *   Change the login route definition to serve at the root path `/`.
    *   **Crucially**, keep the existing `login` path (`/login`) as well. This is to ensure that redirects (like after logout) that point to `/login` do not break.
    *   The `LoginRoutes` structure should handle both `/` and `/login` pointing to the login component (e.g., `<JwtAuthLogin />`).

## Example Expected Changes

**In `src/routes/index.tsx`:**
Remove the landing page block:
```tsx
// REMOVE THIS BLOCK
// {
//   path: '/',
//   element: <SimpleLayout layout={SimpleLayoutType.LANDING} enableElevationScroll />,
//   children: [
//     {
//       index: true,
//       element: <PagesLanding />
//     }
//   ]
// },
```

**In `src/routes/LoginRoutes.tsx`:**
Update the children array for your auth provider (e.g., JWT):
```tsx
children: [
  { path: '/', element: <JwtAuthLogin /> },      // NEW: Default route
  { path: 'login', element: <JwtAuthLogin /> },  // KEEP: For compatibility/redirects
  // ... other existing routes
]
```
