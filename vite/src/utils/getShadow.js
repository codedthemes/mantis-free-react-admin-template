// ==============================|| CUSTOM FUNCTION - COLOR SHADOWS ||============================== //

export default function getShadow(theme, shadow) {
  switch (shadow) {
    case 'secondary':
      return theme.vars.customShadows.secondary;
    case 'error':
      return theme.vars.customShadows.error;
    case 'warning':
      return theme.vars.customShadows.warning;
    case 'info':
      return theme.vars.customShadows.info;
    case 'success':
      return theme.vars.customShadows.success;
    case 'primaryButton':
      return theme.vars.customShadows.primaryButton;
    case 'secondaryButton':
      return theme.vars.customShadows.secondaryButton;
    case 'errorButton':
      return theme.vars.customShadows.errorButton;
    case 'warningButton':
      return theme.vars.customShadows.warningButton;
    case 'infoButton':
      return theme.vars.customShadows.infoButton;
    case 'successButton':
      return theme.vars.customShadows.successButton;
    default:
      return theme.vars.customShadows.primary;
  }
}
