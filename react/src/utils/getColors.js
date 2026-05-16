// ==============================|| CUSTOM FUNCTION - COLORS ||============================== //

export default function getColors(theme, color) {
  switch (color) {
    case 'secondary':
      return theme.vars.palette.secondary;
    case 'error':
      return theme.vars.palette.error;
    case 'warning':
      return theme.vars.palette.warning;
    case 'info':
      return theme.vars.palette.info;
    case 'success':
      return theme.vars.palette.success;
    default:
      return theme.vars.palette.primary;
  }
}
