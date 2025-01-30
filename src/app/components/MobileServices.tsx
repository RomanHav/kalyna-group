import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectCards } from 'swiper/modules';
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
}

const MobileServices: React.FC<ServiceProps> = ({ info }) => {
  return (
    <div
        className={`px-0 md:px-36`}
    >
      <Swiper
        modules={[EffectCards, Autoplay]}
        className={`w-full`}
        effect="cards"
        autoplay={{ delay: 2500 }}
        speed={1000}
      >
        {info.map(infopart => (
          <SwiperSlide
            key={infopart.id}
            className="bg-black/60 backdrop-blur-3xl shadow-customSecond relative flex items-center rounded-3xl"
          >
            <div className="absolute w-full h-full rounded-3xl shadow-customThird"></div>
            <ServicePart
              id={infopart.id}
              title={infopart.title}
              src={infopart.src}
              price={infopart.price}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobileServices;
