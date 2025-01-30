'use client';
import React, { useRef } from 'react';
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

  return (
    <div className={``}>
      <Title
        title={'Benefits'}
        className={'lg:px-24 px-[45px] relative z-10 inset-y-20'}
      />
      <div className={css.mainContainer}>
        <div className={css.third}></div>
        {/* Навігаційні кнопки */}

        <Swiper
          modules={[Navigation, Keyboard]}
          slidesPerView={1}
          keyboard={{
            enabled: true,
            onlyInViewport: false,
          }}
          onBeforeInit={swiper => {
            if (typeof swiper.params.navigation === 'object') {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }
          }}
          onInit={swiper => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-expect-error
            swiper.params.navigation.prevEl = prevRef.current;
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-expect-error
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.update();
          }}
          navigation={{
            prevEl: prevRef.current ? prevRef.current : undefined,
            nextEl: nextRef.current ? nextRef.current : undefined,
          }}
          speed={800}
          spaceBetween={0}
        >
          {info.map(infopart => (
            <SwiperSlide
              key={infopart.id}
              className="!h-[700px] flex items-center justify-center"
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
          <div className={`relative w-full flex justify-center`}>
            <div className="absolute bottom-40 swiper-navigation flex flex-col z-40 justify-center items-center px-4">
              <button
                ref={prevRef}
                className={`${css.customPrev}`}
                aria-label="Previous slide"
              >
                <Image
                  src={'/benefits-arrow-prev.svg'}
                  alt={'prev'}
                  width={190}
                  height={78}
                />
                <span
                  className={`absolute top-0 right-0 font-light uppercase tracking-wider`}
                >
                  prev
                </span>
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
                <span
                  className={`absolute top-0 left-0 font-light uppercase tracking-wider`}
                >
                  next
                </span>
              </button>
            </div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Benefits;
