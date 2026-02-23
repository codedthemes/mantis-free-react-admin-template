<!--
  DESCRIPTION: This prompt guides the AI assistant to switch or create the active global theme preset of the Mantis React Admin Template. It also modifies the presetColor configuration in config.js and updates the localStorage key in ConfigContext.jsx to force a cache refresh.
-->

<!-- AGENT: Gemini 3 Pro -->

1. Check `src/themes/theme/index.js`.
   - If the requested `THEME_NAME` is already handled (e.g., via a switch/case on `presetColor`), proceed to updating `src/config.js`.
   - If the requested `THEME_NAME` is NOT handled, it must be created:
     a. Create a new file `src/themes/theme/{{THEME_NAME}}.js` (copy the structure from `src/themes/theme/index.js` or use a provided palette).
     b. Update `src/themes/theme/index.js` to import the new preset and return it when `presetColor` matches `{{THEME_NAME}}`.

2. Navigate to `src/config.js`.
   - Ensure the `config` object contains `presetColor`.
   - Update `presetColor` to '{{THEME_NAME}}'.

3. Navigate to `src/contexts/ConfigContext.jsx`.
   - Find the `useLocalStorage` hook call.
   - Update the key string (first argument) by appending the theme name (e.g., change `'mantis-react-free-config'` to `'mantis-react-free-config-{{THEME_NAME}}'`).
   - This is CRITICAL to force the application to drop the cached configuration and use the new default you just set. 

# Rules

1. If the user hasn't provided specific colors, ask for preference or suggest colors before creating a new preset.
2. In the Free version, `src/themes/theme/index.js` often returns a single default. You MUST refactor it to handle multiple presets if adding a new one.

Updated `src/themes/theme/index.js`:

```javascript
import Default from './default';
import Theme1 from './theme1';

export default function ThemeOption(colors, presetColor) {
  switch (presetColor) {
    case 'theme1':
      return Theme1(colors);
    case 'default':
    default:
      return Default(colors);
  }
}
```

Updated `src/config.js`:

```javascript
const config = {
  // ...
  presetColor: "theme1",
  // ...
};
```

Updated `src/contexts/ConfigContext.jsx`:

```javascript
export function ConfigProvider({ children }) {
  const { state, setState, setField, resetState } = useLocalStorage(
    "mantis-react-free-config-theme1",
    config,
  );
  // ...
}
```
