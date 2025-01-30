'use client';
import React, { useEffect, useState } from 'react';
import Title from '@/app/components/Title';
import MobileServices from '@/app/components/MobileServices';
import DesktopServices from '@/app/components/DesktopServices';
import serviceInfo from '../../../mainPageInfo/serviceInfo.json';

const ServicesPage: React.FC = () => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setDisplay(window.innerWidth <= 768);
  }, []);
  return (
    <div className="relative z-10 flex flex-col pt-40 pb-20 px-[45px] md:px-16 gap-10 lg:px-24 lg:pb-16">
      <Title id="services" title="Services" />
      {display ? (
        <MobileServices info={serviceInfo} />
      ) : (
        <DesktopServices info={serviceInfo} />
      )}
    </div>
  );
};

export default ServicesPage;
