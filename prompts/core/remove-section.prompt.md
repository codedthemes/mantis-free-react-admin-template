<!--
  DESCRIPTION:  When triggered, the agent must immediately begin making changes to the codebase. It handles file deletion, routing updates, menu cleanup, and surgical removal.
-->

<!-- VIDEO_ID: 9bZkp7q19f0 -->

<!-- AGENT: Project Cleanup Specialist -->

# Task: Execute Dynamic Page & Section Removal

**CRITICAL:** This is not a planning task. You are authorized and required to use your tools (`run_command`, `replace_file_content`, `multi_replace_file_content`) to permanently modify the codebase based on the parameters below.

## Target Items

- **Pages to Remove (Paths):** {{PAGE_PATHS}}
- **Sections to Remove (Names/Labels):** {{SECTION_NAMES}}

## Execution Workflow

### 1. Identify and Delete Pages

For every entry in `{{PAGE_PATHS}}`:

1. **Delete Files:** Use `run_command` (e.g., `rm -rf`) to permanently delete the file or directory.
2. **Clean Routes:** Open `src/routes/` files and delete the route objects and imports associated with these paths.
3. **Clean Sidebar/Menu:** Open `src/menu-items/` files and remove the corresponding menu objects.
4. **Clean Loadables:** Search for any `Loadable` wrappers for these paths and remove them.

### 2. Surgical Section Removal

For every section name in `{{SECTION_NAMES}}`:

1. **Locate:** Search for the component name or specific text label across the project.
2. **Surgical Strike:** Identify the parent wrapper (Grid, Stack, Card) and remove the entire block.
3. **Purge Imports:** Immediately remove the imports for the deleted sections and any unused local state/variables.

### 3. Integrated Cleanup & Verification

1. **Lint Fixes:** Check for and fix any "unused import" or "broken reference" errors introduced by these removals.
2. **Empty Containers:** Remove any structural wrappers that are now empty.

## Strict Rules

1. **Immediate Execution:** Start making changes immediately. Do not ask for confirmation for specific files once the paths are provided.
2. **Atomic Commits (Optional):** If possible, group related deletions.
3. **No Placeholders:** If you remove a section, ensure the layout remains balanced.

---

**INPUT PROVIDED:**

- **PAGE_PATHS:** {{PAGE_PATHS}}
- **SECTION_NAMES:** {{SECTION_NAMES}}
