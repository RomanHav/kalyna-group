'use client';

import { GoogleAnalytics } from '@next/third-parties/google';
import { useEffect, useState } from 'react';

const GA_MEASUREMENT_ID = 'G-WNLWD75BW9';

const GoogleAnalyticsWrapper = () => {
  const [isConsentGiven, setIsConsentGiven] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem('cookieConsent');

    if (savedConsent === 'granted') {
      setIsConsentGiven(true);
      window.gtag?.('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
      });
    }
  }, []);

  return isConsentGiven ? <GoogleAnalytics gaId={GA_MEASUREMENT_ID} /> : null;
};

export default GoogleAnalyticsWrapper;
