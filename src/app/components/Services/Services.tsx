'use client';
import Title from '../Title';
import React, {useEffect, useState} from 'react';
import MobileServices from "@/app/components/MobileServices";
import DesktopServices from "@/app/components/DesktopServices";
interface ServiceInfo {
  id: number;
  title: string;
  src: string;
  price: string;
}

interface ServiceProps {
  info: ServiceInfo[];
}

const Services: React.FC<ServiceProps> = ({ info }) => {

  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setDisplay(window.innerWidth <= 768);
  }, []);

  return (
    <>
      <div className="relative z-10 my-8 flex flex-col gap-10 px-[45px] md:my-10 md:px-16 lg:px-24 lg:pb-16">
        <Title id="services" title="Services" />
        {display ? <MobileServices info={info} /> : <DesktopServices info={info} />}
      </div>
    </>
  );
};

export default Services;
