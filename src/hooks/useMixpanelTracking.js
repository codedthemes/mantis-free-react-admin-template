import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import analytics from 'analytics/mixpanel';

const useMixpanelTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views on route change
    const pageName = location.pathname === '/' ? 'Home' : location.pathname.slice(1).replace(/-/g, ' ');

    analytics.trackPageView(pageName, {
      timestamp: new Date().toISOString(),
      search: location.search,
      hash: location.hash
    });
  }, [location]);

  return {
    trackClick: (buttonName, properties) => analytics.trackButtonClick(buttonName, properties),
    trackEvent: (eventName, properties) => analytics.track(eventName, properties),
    trackForm: (formName, properties) => analytics.trackFormSubmit(formName, properties)
  };
};

export default useMixpanelTracking;