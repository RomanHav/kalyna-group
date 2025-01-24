'use client';
// import ContactUsModal from '../ContactUsModal';
import ServicePart from './ServicePart';
import Title from '../Title';
import React from 'react';
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
  return (
    <>
      <div className="relative z-10 flex flex-col my-8 md:my-10 px-[45px] md:px-16 gap-10 lg:px-24 lg:pb-16">
        <Title id="services" title="Services" />
        <ul className="flex flex-col flex-wrap justify-center items-center gap-9 md:justify-between md:flex-row lg:justify-center lg:gap-6 xl:gap-12 min-[1440px]:gap-10">
          {info.map(infopart => (
            <li
              key={infopart.id}
              className="bg-black/10 shadow-customSecond relative flex items-center rounded-3xl lg:w-[402px] lg:h-52 xl:w-[470px] xl:h-56 min-[1440px]:w-[410px] min-[1440px]:h-56"
            >
              <div className='absolute w-full h-full rounded-3xl shadow-customThird'></div>
              <ServicePart
                id={infopart.id}
                title={infopart.title}
                src={infopart.src}
                price={infopart.price}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Services;
