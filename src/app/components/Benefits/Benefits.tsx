'use client';
import React, { useRef, useEffect, useState } from 'react';
import BenefitsPart from '../BenefitsPart/BenefitsPart';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';
import Image from 'next/image';
import css from './Benefits.module.css';
import Title from '@/app/components/Title';

interface BenefitsInfo {
  id?: number;
  srcWebp: string;
  srcMov: string;
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
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="relative contain-paint z-20">
      <Title
        title="Benefits"
        className="lg:px-24 px-[45px] relative z-10 inset-y-20"
      />

      <div className="absolute bottom-10 lg:bottom-32 xl:bottom-20 text-white z-40 w-full flex justify-center">
        <div className="swiper-navigation flex flex-col justify-center items-center px-4">
          <button
            ref={prevRef}
            className={css.customPrev}
            aria-label="Previous slide"
          >
            <Image
              className={'max-lg:w-32'}
              src="/benefits-arrow-prev.svg"
              alt="prev"
              width={190}
              height={78}
            />
            <span className="absolute -top-2 right-0 font-light uppercase tracking-wider">
              prev
            </span>
          </button>
          <button
            ref={nextRef}
            className={css.customNext}
            aria-label="Next slide"
          >
            <Image
              className={'max-lg:w-32'}
              src="/benefits-arrow-next.svg"
              alt="next"
              width={190}
              height={78}
            />
            <span className="absolute -top-2 left-0 font-light uppercase tracking-wider">
              next
            </span>
          </button>
        </div>
      </div>

      <div className={css.mainContainer}>
        <div className={css.third}></div>
        <Swiper
          modules={[Navigation, Keyboard]}
          slidesPerView={1}
          keyboard={{ enabled: true, onlyInViewport: false }}
          spaceBetween={0}
          speed={800}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          onSwiper={setSwiperInstance}
        >
          {info.map(infopart => (
            <SwiperSlide
              key={infopart.id}
              className="!h-[700px] flex items-center justify-center "
            >
              <BenefitsPart
                id={infopart.id}
                srcWebp={infopart.srcWebp}
                srcMov={infopart.srcMov}
                numberCard={infopart.numberCard}
                title={infopart.title}
                description={infopart.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={css.cases}></div>
    </div>
  );
};

export default Benefits;
