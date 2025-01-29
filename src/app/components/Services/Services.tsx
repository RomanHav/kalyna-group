'use client';
// import ContactUsModal from '../ContactUsModal';
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

  useEffect(()=>{
    setDisplay(window.innerWidth <= 768)
  }, []);

  return (
    <>
      <div className="relative z-10 flex flex-col my-8 md:my-10 px-[45px] md:px-16 gap-10 lg:px-24 lg:pb-16">
        <Title id="services" title="Services" />
        {display ? <MobileServices info={info} /> : <DesktopServices info={info} />}
      </div>
    </>
  );
};

export default Services;
