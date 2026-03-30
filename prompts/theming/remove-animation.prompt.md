<!-- DESCRIPTION: This prompt guides the removal of all animations (Framer Motion & MUI) from the application. It focuses heavily on the DIFFICULT task of removing AnimateButton wrappers across 50+ files. -->

<!-- VIDEO_ID: 9bZkp7q19f0 -->

<!-- AGENT: Gemini 3 Pro (High) -->

# Remove Animations (Disable or Delete)

## Decision Logic: Disable vs. Delete

Analyze the user's request to choose the correct path:

**PATH A: "Disable" / "Turn off" / "Temporary" / "Static UI"**

> Follow **Section 1 (Configuration)**. Keep libraries installed, set durations to 0.

**PATH B: "Remove" / "Delete" / "Uninstall" / "Clean up"**

> Follow **Section 2 (Permanent Removal)**. Uninstall `framer-motion`, **refactor 50+ files** to remove animation wrappers, but **KEEP** the component files (sanitized) to prevent broken references.

---

## Role

You are a **Frontend Refactoring Specialist**.
Your task is to safely remove animation dependencies without breaking the React component tree.

---

## !Important

**Execution Rules:**
| Follow each step sequentially
| Use `grep_search` to find usages. Do not guess file paths.

---

## Section 1: Disabling (Configuration Only - Path A)

_Skip this section if user wants Permanent Removal._

1.  **Disable MUI Transitions** in `src/themes/index.tsx`:
    - Override `transitions.duration` (set all to 0).
2.  **Disable Framer Motion** in `src/App.tsx`:
    - Wrap app in `<MotionConfig transition={{ duration: 0 }}>`.
3.  **Neutralize AnimateButton**:
    - Edit `src/components/@extended/AnimateButton.tsx` to force `duration: 0` in its internal logic.

---

## Section 2: Permanent Removal (Refactor & Update - Path B)

_This is a complex refactoring task. Perform it methodically._

### Step 1: Uninstall

- Run `npm uninstall framer-motion` (or equivalent).

### Step 2: Refactor `AnimateButton` (The Hard Part)

`AnimateButton` wraps buttons in ~50 files. You must unwrap them all.

1.  **Find Usages**:
    - Run `grep_search` for `AnimateButton` in `src/`.
    - _Note: There will be many results._

2.  **Iterate & Unwrap**:
    - For **EVERY** file found:
      - Remove the import: `import AnimateButton from 'components/@extended/AnimateButton';`
      - Remove the opening tag: `<AnimateButton ...>` (and any props like `scale`, `type`).
      - Remove the closing tag: `</AnimateButton>`
      - **KEEP THE CHILDREN**. Do not delete the button inside.

    _Example Refactor:_

    ```typescript
    // BEFORE
    import AnimateButton from 'components/@extended/AnimateButton';
    // ...
    <AnimateButton scale={{ hover: 1.1 }}>
        <Button variant="contained">Submit</Button>
    </AnimateButton>

    // AFTER
    // (Import removed)
    // ...
    <Button variant="contained">Submit</Button>
    ```

### Step 3: Refactor Other Animations

1.  **Find `Animation` Component**:
    - Search in `src/sections/landing/`.
    - Unwrap references to `<Animation>`.
2.  **Find direct `motion.*` usage**:
    - Search for `<motion.` or `framer-motion` imports.
    - Convert `<motion.div>` to `<div>`.
    - Remove `initial`, `animate`, `exit`, `variants` props.

### Step 4: Sanitize Definition File (Do Not Delete)

Instead of deleting the file (which might cause issues if we missed a reference), replace its content with a standard fallback.

1.  **Modify File**: `src/components/@extended/AnimateButton.tsx`
2.  **Replace Content**:

    ```typescript
    import { ReactNode } from 'react';

    // Defaults to simple passthrough to support any leftover references
    export default function AnimateButton({ children }: { children?: ReactNode }) {
      return <>{children}</>;
    }
    ```

    _This ensures any missed references don't crash the app, while removing the dependency on framer-motion._

3.  **Modify File**: `src/components/@extended/AnimateCard.tsx`
4.  **Replace Content**:

    ```typescript
    import { ReactNode } from 'react';

    export default function Animation({ children }: { children: ReactNode }) {
      return <>{children}</>;
    }
    ```

---

## Verification Checklist

- [ ] `npm run build` passes (No "Module not found" errors).
- [ ] `AnimateButton` usages are refactored (unwrapped) in specific sections.
- [ ] `framer-motion` is uninstalled.
- [ ] `AnimateButton.tsx` is sanitized (no framer-motion imports).
