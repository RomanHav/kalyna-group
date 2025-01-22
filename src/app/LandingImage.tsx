'use client';

import Image from 'next/image';
import LandingRunningLine from './components/LandingRunningLine';

const LandingImage = () => {
  return (
    <div className="absolute top-[24rem] md:top-[25rem] lg:top-[29rem] xl:top-[26rem] min-[1440px]:top-[25rem] z-10 w-full flex flex-col justify-center items-center text-white">
      <div className="relative z-20 lg:left-[5%] flex justify-center">
        <Image
          className="w-80 md:w-[680px] lg:w-[750px] xl:w-[960px]"
          src={'/landing-read.webp'}
          alt="Landing Image"
          width={4082}
          height={3622}
        />
      </div>
      <div className='relative w-[150%] bottom-[12rem] md:bottom-[25rem] lg:bottom-[27rem] xl:bottom-[34rem] z-10'>
        <div className="absolute z-20 -rotate-[20deg] w-full">
          <LandingRunningLine />
        </div>
        <div className="absolute z-10 left-8 rotate-[20deg] w-full h-8 md:h-[52px] lg:h-[56px] xl:h-[76px] bg-gradient-to-b from-[#9CFF95] to-[#7DEBA9] opacity-30"></div>
      </div>
    </div>
  );
};

export default LandingImage;
