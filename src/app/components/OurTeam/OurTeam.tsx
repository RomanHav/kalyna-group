'use client'
import { useEffect, useState } from 'react';
import MobileTeam from '../MobileTeam';
import DesktopTeam from '../DesktopTeam';

const OurTeam = () => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setDisplay(window.innerWidth <= 768);
  }, []);

  return (
    <div className="px-4 lg:px-20 my-14 flex flex-col items-center justify-center">
      <div className="flex flex-col items-start justify-center md:items-center gap-5 mb-12 lg:mb-24">
        <h3 className="text-white uppercase text-4xl md:text-5xl">
          Our Team of Innovators
        </h3>
        <span className="text-2xl md:text-3xl bg-gradient-to-r from-custom-green to-custom-second-green bg-clip-text text-transparent">
          Meet the Team Behind <span className="uppercase">Kalyna Group</span>
        </span>
      </div>
      {display ? <MobileTeam /> : <DesktopTeam />}
    </div>
  );
};

export default OurTeam;
