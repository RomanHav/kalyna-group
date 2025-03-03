'use client';


import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookieConsent')) {
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
    window.location.reload();
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

  if (!isVisible) return null;

  return (

    <div className="fixed z-[9999] bottom-4 left-4 right-4 bg-white text-black p-4 shadow-lg rounded-xl md:mx-32 xl:mx-60 flex flex-col justify-between">
      <div className="flex flex-col md:flex-row gap-5 md:justify-between items-start md:items-center">
        <div className="flex gap-8 items-center">
          <Image src="/cookie.svg" width={50} height={50} alt="Cookie" />
          <span>This website uses cookies for analytics. Do you accept?</span>
        </div>
        <div className="space-x-4 flex">

    <div className="fixed z-[9999] bottom-4 left-4 right-4 bg-white text-black p-4 shadow-lg rounded-lg md:w-3/4 md:mx-auto">
      <div className="flex gap-10 md:justify-between items-center">
        <span>This website uses cookies for analytics. Do you accept?</span>
        <div className="space-x-4 flex ">

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
        </div>
      </div>

      <span className="text-sm mt-4 block">
        Check our{' '}
        <Link href={'/privacy-policies'} className="underline">
          Therms and conditions
        </Link>{' '}
        for more information
      </span>

    </div>
  );
};

export default CookieBanner;
