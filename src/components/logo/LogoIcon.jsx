// material-ui
import { useTheme } from '@mui/material/styles';

/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoIconDark from 'assets/images/logo-icon-dark.svg';
 * import logoIcon from 'assets/images/logo-icon.svg';
 * import { ThemeMode } from 'config';
 *
 */

// ==============================|| LOGO ICON SVG ||============================== //

export default function LogoIcon() {
  const theme = useTheme();

  return (
    /**
     * if you want to use image instead of svg uncomment following, and comment out <svg> element.
     *
     * <img src={theme.palette.mode === ThemeMode.DARK ? logoIconDark : logoIcon} alt="Mantis" width="100" />
     *
     */
    <svg width="129" height="129" viewBox="0 0 129 129" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.27577 57.2242L17.5616 46.9384L17.5724 46.9276H36.9234L29.2238 54.6273L27.2358 56.6152L19.3511 64.5L20.3276 65.4792L64.5 109.649L109.649 64.5L101.761 56.6152L101.206 56.0572L92.0766 46.9276H111.428L111.438 46.9384L119.5 55.0002L129 64.5L64.5 129L0 64.5L7.27577 57.2242ZM64.5 0L101.77 37.2695H82.4185L64.5 19.3511L46.5816 37.2695H27.2305L64.5 0Z"
        fill={theme.palette.primary.dark}
      />
      <path
        d="M19.3509 64.5L27.2357 56.6152L29.2236 54.6273L21.5267 46.9276H17.5722L17.5615 46.9384L7.27561 57.2242L17.1483 67.0487L19.3509 64.5Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M101.762 56.6152L109.649 64.5L108.868 65.2807L108.871 65.2834L119.5 55.0002L111.438 46.9384L111.428 46.9276H110.644L101.206 56.0572L101.762 56.6152Z"
        fill="url(#paint1_linear)"
      />
      <path
        d="M17.5508 46.9276L17.5615 46.9384L27.2357 56.6152L64.4999 93.8767L111.449 46.9276H17.5508Z"
        fill={theme.palette.primary.main}
      />
      <defs>
        <linearGradient id="paint0_linear" x1="25.0225" y1="49.3259" x2="11.4189" y2="62.9295" gradientUnits="userSpaceOnUse">
          <stop stopColor={theme.palette.primary.darker} />
          <stop offset="0.9637" stopColor={theme.palette.primary.dark} stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint1_linear" x1="103.5" y1="49.5" x2="114.5" y2="62" gradientUnits="userSpaceOnUse">
          <stop stopColor={theme.palette.primary.darker} />
          <stop offset="1" stopColor={theme.palette.primary.dark} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}
