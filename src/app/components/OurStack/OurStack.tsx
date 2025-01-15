'use client';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import items from '../../about-us/stack.json';
import OurStackPart from '@/app/components/OurStack/OurStackPart';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
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
      <div className={'px-4 lg:ml-6 xl:ml-20 flex relative flex-col gap-32'}>
        <h2
          className={`text-4xl relative w-[270px] uppercase after:absolute after:-bottom-4 after:left-0 after:w-full after:h-[2px] after:bg-white `}
        >
          stack of
          <br />
          <span className={`text-[#C2FAD7]`}>technologies</span>
        </h2>
        <div
          className={
            'w-full max-[400px]:px-5 min-[1440px]:px-7 xl:px-2 px-0 flex justify-between items-center'
          }
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            onSwiper={swiperInstance => {
              swiperRef.current = swiperInstance; // Сохраняем экземпляр Swiper
            }}
            onSlideChange={swiper => {
              setActiveIndex(swiper.realIndex);
            }}
            allowSlidePrev={false}
            loop
            autoplay={{ delay: 2500 }}
            effect={'fade'}
            slidesPerView={4}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 0 },
              420: { slidesPerView: 2, spaceBetween: 5 },
              640: { slidesPerView: 3, spaceBetween: 5 },
              1023: { slidesPerView: 3, spaceBetween: 10 },
              1270: { slidesPerView: 4, spaceBetween: 10 },
            }}
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
              'w-12 h-12 lg:h-16 lg:w-16 flex justify-center items-center rotate-90 rounded-full border border-white'
            }
          >
            <Image
              className={`w-8 lg:w-auto mx-8 lg:mx-8`}
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
