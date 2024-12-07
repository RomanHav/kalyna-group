'use client';
import React, { useRef, useEffect } from 'react';
import BenefitsPart from '../BenefitsPart/BenefitsPart';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';
import Image from 'next/image';
import css from './Benefits.module.css'

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

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
    }
  }, []);

  return (
    <div className="relative">
      {/* Навігаційні кнопки */}
      <div className="swiper-navigation flex flex-col absolute z-20 bottom-20 left-0 right-0 justify-center items-center px-4">
        <button
          ref={prevRef}
          className={css.customPrev}
          aria-label="Previous slide"
        >
          <Image
            src={'/benefits-arrow-prev.svg'}
            alt={'prev'}
            width={190}
            height={78}
          />
        </button>
        <button
          ref={nextRef}
          className={css.customNext}
          aria-label="Next slide"
        >
          <Image
            src={'/benefits-arrow-next.svg'}
            alt={'next'}
            width={190}
            height={78}
          />
        </button>
      </div>

      <Swiper
        modules={[Navigation, Keyboard]}
        slidesPerView={1} // Один слайд на екран
        loop={true}
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
        spaceBetween={0}
      >
        {info.map((infopart) => (
          <SwiperSlide key={infopart.id} className="!h-[700px] flex items-center justify-center">
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
