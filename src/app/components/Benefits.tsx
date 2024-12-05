'use client';
import React, { useRef } from 'react';
import BenefitsPart from './BenefitsPart';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';
import Image from 'next/image';

interface BenefitsInfo {
  id?: number;
  src: string;
  numberCard: string;
  title: string;
  description: string;
}

interface BenefitsProps {
  info: BenefitsInfo[];
}

const Benefits: React.FC<BenefitsProps> = ({ info }) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="flex flex-col my-8 relative gap-10 lg:my-16">
      {/* Navigation Buttons */}
      <div className="swiper-navigation">
        <button ref={prevRef} className="custom-swiper-button-prev">
          <Image
            src={'/benefits-arrow-prev.svg'}
            alt={'prev'}
            width={262}
            height={78}
          />
        </button>
        <button ref={nextRef} className="custom-swiper-button-next">
          <Image
            src={'/benefits-arrow-next.svg'}
            alt={'next'}
            width={262}
            height={78}
          />
        </button>
      </div>

      <Swiper
        modules={[Navigation, Keyboard]}
        slidesPerView={'auto'}
        breakpoints={{
          375: {
            slidesPerView: 1,
            spaceBetween: 32,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 8,
          },
          1440: {
            slidesPerView: 1,
          },
        }}
        loop={false}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        keyboard={{
          enabled: true,
          onlyInViewport: false,
        }}
        grabCursor={true}
        speed={800}
      >
        {info.map(infopart => (
          <SwiperSlide key={infopart.id}>
            <BenefitsPart
              id={infopart.id}
              src={infopart.src}
              numberCard={infopart.numberCard}
              title={infopart.title}
              description={infopart.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Benefits;
