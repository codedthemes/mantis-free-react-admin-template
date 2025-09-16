import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

// project imports
import router from 'routes';
import ThemeCustomization from 'themes';

import ScrollTop from 'components/ScrollTop';

// analytics
import analytics from 'analytics/mixpanel';

// ==============================|| APP - THEME, ROUTER, LOCAL ||============================== //

export default function App() {
  useEffect(() => {
    // Initialize Mixpanel
    analytics.init();

    // Track app load
    analytics.track('App Loaded', {
      timestamp: new Date().toISOString(),
      user_agent: navigator.userAgent,
      screen_width: window.screen.width,
      screen_height: window.screen.height
    });
  }, []);

  return (
    <ThemeCustomization>
      <ScrollTop>
        <RouterProvider router={router} />
      </ScrollTop>
    </ThemeCustomization>
  );
}
