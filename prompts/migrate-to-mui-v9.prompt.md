---
mode: agent
description: Migrate a React project from any MUI version to v9
---

I have a React project using MUI (Material UI). Please check the official migration guide at
https://mui.com/material-ui/migration/upgrade-to-v9/ and migrate my project from its current
MUI version to v9.

Steps to follow:

1. Read the migration guide thoroughly
2. Analyze my current project's package.json and source files
3. Create a migration plan covering all breaking changes found in the project
4. Implement all changes, including:

   - Update package.json: `@mui/material`, `@mui/system`, `@mui/lab` (use `9.0.0-beta.2` for lab),
     remove `@mui/base` (merged into `@mui/material`)

   - Fix theme overrides — deprecated compound CSS class keys used as `styleOverrides` slots:
     Check ALL override files (Button, OutlinedInput, Checkbox, Radio, Switch, Badge, and every
     other component override) for keys like `colorPrimary`, `colorSecondary`, `colorError`,
     `colorSuccess`, `colorInfo`, `colorWarning`, `inputSizeSmall`, `inputMultiline` used at
     the **top level** of `styleOverrides`. These are CSS class selectors, not slots — move them
     inside `root` as `'&.MuiXxx-colorPrimary'` selectors.

   - Fix invalid `styleOverrides` slot names: audit every override file and verify each key is an
     actual component slot listed in the MUI API docs. For example, `standard` on `MuiBadge` is not
     a valid slot — use `badge` instead. Other removed slot keys to look for:
     `containedPrimary/Secondary/Error/…`, `outlinedPrimary/…`, `textPrimary/…` on Button;
     `inputSizeSmall`, `inputMultiline`, `colorSecondary/Error/…` on OutlinedInput/InputBase;
     `paperScrollPaper`, `paperScrollBody` on Dialog; `lineHorizontal`, `lineVertical` on
     StepConnector; `thumbColorPrimary`, `thumbSizeSmall` on Slider; `groupedHorizontal`,
     `groupedVertical` on ButtonGroup/ToggleButtonGroup; `bar1Buffer`, `barColorPrimary` on
     LinearProgress; `circleDeterminate`, `circleIndeterminate` on CircularProgress;
     `flexContainer`, `flexContainerVertical` on Tabs; `iconWrapper` on Tab;
     `paperAnchorLeft`, `paperAnchorDockedLeft` on Drawer.
     Replace all with `root.variants[]` using `{ props: { variant, color }, style }` pattern.

   - Fix CSS Variables API consistency: if the project uses `colorSchemes`/`cssVariables` in
     `createTheme`, ensure ALL `sx` callbacks and `styled()` calls use `theme.vars.X` instead of
     `theme.X` for any custom or palette tokens (e.g. `theme.vars.customShadows.z1` not
     `theme.customShadows.z1`). Search for `theme\.(?!vars\.)` inside `sx` callbacks to find
     violations.

   - Fix `MenuProps.PaperProps` → `MenuProps.slotProps.paper` everywhere
   - Fix Dialog `PaperComponent` → `slots.paper`
   - Fix Autocomplete `PopperComponent` → `slots.popper`
   - Fix Autocomplete `renderTags` → `renderValue`, `getTagProps` → `getItemProps`
   - Fix `@mui/base` imports → `@mui/material`
   - Fix CSS class selectors: `MuiTabs-flexContainer` → `MuiTabs-list`
   - Fix `Grid direction="column"` (removed in v9) → use `Stack` instead
   - Move ALL system props (`alignItems`, `justifyContent`, `gap`, `textAlign`, `fontSize`,
     `color`, `height`, `width`, `maxWidth`, `px`, `mx`, etc.) out of component props and into
     the `sx` prop — applies to ALL MUI components (`Box`, `Stack`, `Grid`, `Typography`,
     `Link`, `ListItemText`, etc.)
   - Fix `visuallyHidden`: not exported from `@mui/material` root — define inline or import from
     `@mui/material/utils`
   - Fix `SpeedDialAction`: `tooltipTitle` → `slotProps.tooltip.title`, remove `tooltipOpen` prop
   - Fix deprecated props: `BackdropComponent`, `BackdropProps`, `PaperProps`, `TransitionComponent`,
     `TransitionProps`, `componentsProps`, `components` → use `slots`/`slotProps` equivalents
   - Fix `TextField`: `InputProps` → `slotProps.input`, `inputProps` → `slotProps.htmlInput`,
     `InputLabelProps` → `slotProps.inputLabel`, `FormHelperTextProps` → `slotProps.formHelperText`
   - Fix `ListItemText`: `primaryTypographyProps` → `slotProps.primary`,
     `secondaryTypographyProps` → `slotProps.secondary`
   - Fix `CardHeader`: `titleTypographyProps` → `slotProps.title`,
     `subheaderTypographyProps` → `slotProps.subheader`
   - Fix `Typography` `paragraph` prop → `sx={{ marginBottom: '16px' }}`
   - Fix `Divider` `light` prop → `sx={{ opacity: 0.6 }}`
   - Fix `Dialog`/`Modal` `disableEscapeKeyDown` → handle via `reason` in `onClose`

5. Run `yarn install` (use `--legacy-peer-deps` if needed), then verify with `yarn build`
6. Fix any remaining build or TypeScript errors iteratively until a clean build is achieved

Important notes:

- `@mui/lab` latest compatible version is `9.0.0-beta.2`
- System props removal is the most widespread change — check EVERY MUI component in EVERY file
- For Autocomplete `renderInput`: always spread both `...params.slotProps` at the `TextField`
  level and `...params.slotProps.input` / `...params.slotProps.htmlInput` at the slot level
- If theme override objects have duplicate property keys (e.g. two `"root"` entries), merge them
  into one
- `spacing` on `Grid` container is a structural Grid prop — do NOT move it to `sx`
- `direction` on `Stack` is a Stack-specific prop — do NOT move it to `sx`
- `color`, `size`, `variant` on components like `Button`, `Chip`, `Badge` are component props —
  do NOT move them to `sx`
