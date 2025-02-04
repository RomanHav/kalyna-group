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
    <div className={``}>
      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        className={`w-full`}
        effect="coverflow"
        coverflowEffect={{
          slideShadows: false,
          modifier: 2,
        }}
        loop
        autoplay={{ delay: 1000 }}
        speed={1000}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
            coverflowEffect: { modifier: 1, depth: 0, scale: 0.8 },
          },
        }}
      >
        {info.map(infopart => (
          <SwiperSlide
            key={infopart.id}
            className={`bg-black/15 backdrop-blur-lg md:shadow-customSecond relative flex items-center rounded-3xl`}
          >
            <div
              className={`absolute w-full h-full rounded-3xl md:shadow-customThird`}
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
