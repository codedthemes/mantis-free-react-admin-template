<!-- DESCRIPTION: The "Global Rebrand" Prompt
This prompt completely rebrands the application by replacing the Project Name, Text References, Metadata, and Logo Alt Text. -->

<!-- AGENT: [Gemini 3.0 Pro] -->

Act as a Senior Frontend Developer. Your goal is to rebrand this application from **{{OLD_BRAND}}** to **{{NEW_BRAND}}** with ZERO errors. You must update all configuration files, global text references, and asset pointers.

**INPUT VARIABLES:**

- **Old Brand:** `{{OLD_BRAND}}` (e.g., Mantis)
- **New Brand:** `{{NEW_BRAND}}` (e.g., Able Pro)
- **New Package Name:** `{{NEW_PACKAGE_NAME}}` (e.g., able-pro-react-js)

---

### **Step 1: Global Text Replacement**

**Action:**

1.  **Case Sensitive Search:** Search for `{{OLD_BRAND}}` and replace with `{{NEW_BRAND}}` in all text files (excluding `node_modules`).
2.  **Lowercase Search:** Search for `{{OLD_BRAND_LOWER}}` (lowercase) and replace with `{{NEW_BRAND_LOWER}}` (lowercase).
    - _Constraint:_ Do NOT replace external library names (e.g., `mantis-ui` if it is a third-party dependency) unless you are sure it is an internal package.
    - _Constraint:_ Check URLs carefully. Update links to documentation or repositories if they should point to the new brand, but keep them if they are historical references.

---

### **Step 2: Update Configuration Files**

**Target File:** `package.json`
**Action:**

1.  Update `"name"` property to `{{NEW_PACKAGE_NAME}}`.
2.  Update `"description"` references.

**Target File:** `public/index.html`
**Action:**

1.  Update `<title>` to `{{NEW_BRAND}} React Admin Dashboard`.
2.  Update `<meta name="title">` and `<meta name="description">` content.

**Target File:** `README.md`
**Action:**

1.  Replace the H1 title with `{{NEW_BRAND}} Material React Admin Template`.
2.  Update installation steps and descriptions to reflect `{{NEW_BRAND}}`.

---

### **Step 3: Update Components & Assets**

**Target File:** `src/components/logo/LogoMain.jsx` & `src/components/logo/LogoIcon.jsx`
**Action:**

1.  Update the `alt` text for images/SVGs to `{{NEW_BRAND}}`.
    ```jsx
    // Example
    alt = "{{NEW_BRAND}}";
    ```

**Target File:** `src/layout/Dashboard/Drawer/DrawerHeader/index.jsx`
**Action:**

1.  Ensure the Logo component is correctly wrapped and accessible.

**Target File:** `src/layout/Dashboard/Footer.jsx`
**Action:**

1.  Update copyright text to reflect the new brand or company if applicable.

---

### **Step 4: Landing Page & Content Updates**

**Target Directories:** `src/sections/landing/`, `src/pages/`
**Action:**

1.  Iterate through all Landing Page blocks (Header, Feature, Demo, Testimonial, etc.).
2.  Replace marketing copy: "Welcome to {{OLD_BRAND}}" -> "Welcome to {{NEW_BRAND}}".
3.  Update `alt` tags in `CardMedia` or `img` elements: `alt="{{OLD_BRAND}}"` -> `alt="{{NEW_BRAND}}"`.

---

### **Final Verification Checklist**

- [ ] `package.json` name is updated.
- [ ] Browser tab title reads `{{NEW_BRAND}}...`.
- [ ] "Welcome to {{OLD_BRAND}}" no longer appears on the Landing Page.
- [ ] Footer copyright is correct.
- [ ] No broken links in `package.json` dependencies.
