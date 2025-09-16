import mixpanel from 'mixpanel-browser';

const MIXPANEL_TOKEN = 'ff3948c5215e478a83d6047952d7302a';

class MixpanelAnalytics {
  constructor() {
    this.initialized = false;
  }

  init() {
    if (this.initialized) return;

    mixpanel.init(MIXPANEL_TOKEN, {
      debug: true,
      track_pageview: true,
      persistence: 'localStorage'
    });

    this.initialized = true;
    console.log('Mixpanel initialized successfully');
  }

  track(eventName, properties = {}) {
    if (!this.initialized) {
      console.warn('Mixpanel not initialized. Call init() first.');
      return;
    }

    mixpanel.track(eventName, properties);
    console.log(`Mixpanel Event Tracked: ${eventName}`, properties);
  }

  identify(userId, userProperties = {}) {
    if (!this.initialized) {
      console.warn('Mixpanel not initialized. Call init() first.');
      return;
    }

    mixpanel.identify(userId);
    mixpanel.people.set(userProperties);
    console.log(`Mixpanel User Identified: ${userId}`, userProperties);
  }

  trackPageView(pageName, properties = {}) {
    this.track('Page View', {
      page: pageName,
      url: window.location.href,
      path: window.location.pathname,
      referrer: document.referrer,
      ...properties
    });
  }

  trackButtonClick(buttonName, properties = {}) {
    this.track('Button Click', {
      button_name: buttonName,
      page: window.location.pathname,
      ...properties
    });
  }

  trackFormSubmit(formName, properties = {}) {
    this.track('Form Submit', {
      form_name: formName,
      page: window.location.pathname,
      ...properties
    });
  }

  reset() {
    if (this.initialized) {
      mixpanel.reset();
      console.log('Mixpanel reset');
    }
  }
}

const analytics = new MixpanelAnalytics();

export default analytics;