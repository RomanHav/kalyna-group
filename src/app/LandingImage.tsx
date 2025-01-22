'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Parallax } from 'react-scroll-parallax';

const LandingImage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return (
    <div className="absolute top-[27rem] lg:top-[30rem] z-10 w-full flex flex-col justify-center items-center text-white">
      <Image
        className="w-[350px] md:w-[550px] lg:w-[650px] xl:w-[836px]"
        src={'/macbook.png'}
        alt="Phone Image"
        width={1338}
        height={806}
      />
      <Parallax
        className={
          'absolute bottom-12 right-0 md:right-[9rem] lg:bottom-24 lg:right-[8rem] xl:bottom-28 xl:right-[14rem] min-[1440px]:right-[19rem] tracking-[0.5em] flex justify-center items-center w-full h-full'
        }
        speed={isMobile ? 0 : 5}
      >
        <div className="text-[60px] md:text-[90px] lg:text-[140px] xl:text-[160px] font-bold flex items-center lg:gap-3">
          <span className="text-white uppercase">
            Lan<span className="md:hidden">ding</span>
          </span>
          <Image
            className="hidden md:block md:w-[237px] lg:w-[368px] xl:w-[421px]"
            src={'/landing.svg'}
            alt="Landing Image"
            width={421}
            height={240}
          />
        </div>
      </Parallax>
      <Parallax
        className={
          'absolute -bottom-5 left-0 md:-bottom-12 md:left-[14.5rem] lg:-bottom-16 lg:left-[16rem] xl:left-[21.5rem] tracking-[0.5em] flex justify-center items-center w-full h-full'
        }
        speed={isMobile ? 0 : 5}
      >
        <div className="text-[60px] md:text-[90px] lg:text-[160px] font-bold flex items-center lg:gap-3">
          <Image
            className="hidden md:block md:w-[126px] lg:w-[223px]"
            src={'/page.svg'}
            alt="Landing Image"
            width={223}
            height={240}
          />
          <span className="text-white uppercase">
            <span className="md:hidden">Pa</span>ge
          </span>
        </div>
      </Parallax>
    </div>
  );
};

export default LandingImage;
