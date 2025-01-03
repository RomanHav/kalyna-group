'use client';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import items from '../../../stack.json';
import OurStackPart from '@/app/components/OurStackPart';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const OurStack: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  // eslint-disable-next-line
  const swiperRef = useRef<any>(null);
  const handleNextSlide = () => {
    swiperRef.current?.slideNext();
  };
  return (
    <div
      className={`w-full relative -bottom-2 bg-stack h-screen bg-cover bg-center text-white py-10`}
    >
      <div className={`absolute w-full h-full inset-0 bg-black/50`}></div>
      <div className={'ml-20 flex relative flex-col gap-32'}>
        <h2
          className={`text-4xl relative w-[270px] uppercase after:absolute after:-bottom-4 after:left-0 after:w-full after:h-[2px] after:bg-white `}
        >
          stack of
          <br />
          <span className={`text-[#C2FAD7]`}>technologies</span>
        </h2>
        <div className={'w-full px-10 flex justify-between items-center'}>
          <Swiper
            modules={[Navigation]}
            onSwiper={swiperInstance => {
              swiperRef.current = swiperInstance; // Сохраняем экземпляр Swiper
            }}
            onSlideChange={swiper => {
              setActiveIndex(swiper.realIndex);
            }}
            allowSlidePrev={false}
            loop
            effect={'fade'}
            slidesPerView={4}
          >
            {items.map(item => {
              return (
                <SwiperSlide key={item.id}>
                  <OurStackPart
                    id={item.id}
                    path={item.path}
                    title={item.title}
                    activeId={items[activeIndex].id}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
          <button
            onClick={handleNextSlide}
            className={
              'w-16 h-16 flex justify-center items-center rotate-90 rounded-full border border-white'
            }
          >
            <Image
              className={`mx-8`}
              src={'/arrow-cases.svg'}
              alt={'arrow'}
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurStack;
