'use client';
import { useEffect, useState } from 'react';
import MobileOpportunities from '@/app/components/MobileOpportunities';
import DesktopOpportunities from '@/app/components/DesktopOpportunities';

const CurrentOpportunities = () => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setDisplay(window.innerWidth <= 768);
  }, []);
  return (
    <div className="relative flex flex-col gap-10 lg:gap-14 px-10 md:px-24 py-8 md:py-16 bg-gradient-to-b from-[#1B3A38] to-[#1B4E3D] shadow-careerBkg">
      <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
      <div className="relative">
        <h3 className="uppercase text-balance mb-2 md:mb-4 text-center text-3xl md:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-[#FFFFFF] to-[#38EF7D] bg-clip-text text-transparent">
          Current Opportunities
        </h3>
        {display ? <MobileOpportunities /> : <DesktopOpportunities />}
      </div>
    </div>
  );
};

export default CurrentOpportunities;
