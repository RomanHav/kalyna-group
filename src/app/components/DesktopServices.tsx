import ServicePart from '@/app/components/Services/ServicePart';
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

const DesktopServices: React.FC<ServiceProps> = ({info}) => {
  return (
    <>
      <ul className="flex flex-col flex-wrap items-center justify-center gap-9 md:flex-row md:justify-between lg:justify-center lg:gap-6 xl:gap-12 min-[1440px]:gap-x-2 min-[1440px]:gap-y-10 2xl:gap-14">
        {info.map(infopart => (
          <li
            key={infopart.id}
            className="relative flex items-center justify-center rounded-3xl bg-black/10 shadow-customSecond lg:w-[402px] lg:h-52 xl:w-[470px] xl:h-56 min-[1440px]:w-[410px] min-[1440px]:h-56"
          >
            <div className="absolute h-full w-full rounded-3xl shadow-customThird"></div>
            <ServicePart
              id={infopart.id}
              title={infopart.title}
              src={infopart.src}
              price={infopart.price}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default DesktopServices;
