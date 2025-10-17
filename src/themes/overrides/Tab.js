// project imports
import { withAlpha } from 'utils/colorUtils';

// ==============================|| OVERRIDES - TAB ||============================== //

export default function Tab(theme) {
  return {
    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: 46,
          color: theme.vars.palette.text.primary,
          borderRadius: 4,
          '&:hover': {
            backgroundColor: withAlpha(theme.vars.palette.primary.lighter, 0.6),
            color: theme.vars.palette.primary.main
          },
          '&:focus-visible': {
            borderRadius: 4,
            outline: `2px solid ${theme.vars.palette.secondary.dark}`,
            outlineOffset: -3
          }
        }
      }
    }
  };
}
