'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Switch, FormControlLabel } from '@mui/material';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [preferences, setPreferences] = useState({
    analytics_storage: false,
    ad_storage: false,
    ad_user_data: false,
    ad_personalization: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'granted');

    window.gtag?.('consent', 'update', {
      analytics_storage: 'granted',
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
    });

    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'denied');

    window.gtag?.('consent', 'update', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });

    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));

    window.gtag?.('consent', 'update', {
      analytics_storage: preferences.analytics_storage ? 'granted' : 'denied',
      ad_storage: preferences.ad_storage ? 'granted' : 'denied',
      ad_user_data: preferences.ad_user_data ? 'granted' : 'denied',
      ad_personalization: preferences.ad_personalization ? 'granted' : 'denied',
    });

    setIsVisible(false);
  };

  const handlePreferenceChange = (key: string) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed z-[9999] bottom-4 left-4 right-4 bg-white text-black p-4 shadow-lg rounded-xl md:mx-32 xl:mx-60 flex flex-col gap-4 transition-all duration-500 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } ${isCustomizing ? 'h-auto' : 'h-[150px]'}`}
    >
      <div className="flex gap-4 items-center">
        <Image src="/cookie.svg" width={50} height={50} alt="Cookie" />
        <span>This website uses cookies for analytics. Do you accept?</span>
      </div>
      {!isCustomizing ? (
        <div className="flex justify-between items-center">
          <button
            onClick={handleAccept}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Accept
          </button>
          <button
            onClick={handleReject}
            className="px-4 py-2 bg-gray-500 text-white rounded"
          >
            Reject
          </button>
          <span
            onClick={() => setIsCustomizing(true)}
            className="text-blue-500 underline cursor-pointer"
          >
            Customize
          </span>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <FormControlLabel
              control={
                <Switch
                  checked={preferences.analytics_storage}
                  onChange={() => handlePreferenceChange('analytics_storage')}
                />
              }
              label="Analytics Cookies"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={preferences.ad_storage}
                  onChange={() => handlePreferenceChange('ad_storage')}
                />
              }
              label="Ad Storage Cookies"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={preferences.ad_user_data}
                  onChange={() => handlePreferenceChange('ad_user_data')}
                />
              }
              label="Ad User Data Cookies"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={preferences.ad_personalization}
                  onChange={() => handlePreferenceChange('ad_personalization')}
                />
              }
              label="Ad Personalization Cookies"
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              onClick={handleSavePreferences}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Save Preferences
            </button>
            <button
              onClick={handleReject}
              className="px-4 py-2 bg-gray-500 text-white rounded"
            >
              Reject All
            </button>
          </div>
        </div>
      )}
      <span className="text-sm mt-4">
        Check our{' '}
        <Link href={'/privacy-policies'} className="underline">
          Terms and Conditions
        </Link>{' '}
        for more information.
      </span>
    </div>
  );
};

export default CookieBanner;
