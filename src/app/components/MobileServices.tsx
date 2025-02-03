import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css/effect-cards';
import 'swiper/css';
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
  isMobile?: boolean;
}

const MobileServices: React.FC<ServiceProps> = ({ info, isMobile }) => {
  return (
    <div className={`px-0 md:px-36`}>
      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        className={`w-full`}
        effect="coverflow"
        coverflowEffect={{ slideShadows: false, modifier: 3 }}
        autoplay={{ delay: 1000 }}
        speed={1000}
      >
        {info.map(infopart => (
          <SwiperSlide
            key={infopart.id}
            className={`bg-black/15 backdrop-blur-lg lg:shadow-customSecond relative flex items-center rounded-3xl`}
          >
            <div
              className={`absolute w-full h-full rounded-3xl lg:shadow-customThird`}
            ></div>
            <ServicePart
              id={infopart.id}
              title={infopart.title}
              src={infopart.src}
              price={infopart.price}
              isMobile={isMobile}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobileServices;
