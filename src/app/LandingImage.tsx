'use client';

import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';

const LandingImage = () => {
  return (
    <div className="absolute top-[30rem] z-10 w-full flex flex-col justify-center items-center text-white">
      <Image
        className="w-[836px]"
        src={'/macbook.png'}
        alt="Phone Image"
        width={1338}
        height={806}
      />
      <Parallax
        className={
          'absolute bottom-28 right-[19rem] tracking-[0.5em] flex justify-center items-center w-full h-full'
        }
        speed={5}
      >
        <div className="text-[160px] font-bold flex items-center gap-3">
          <span className="text-white uppercase">Lan</span>
          <Image
            src={'/landing.svg'}
            alt="Landing Image"
            width={421}
            height={240}
          />
        </div>
      </Parallax>
      <Parallax
        className={
          'absolute -bottom-16 left-[21.5rem] tracking-[0.5em] flex justify-center items-center w-full h-full'
        }
        speed={5}
      >
        <div className="text-[160px] font-bold flex items-center gap-3">
          <Image
            src={'/page.svg'}
            alt="Landing Image"
            width={223}
            height={240}
          />
          <span className="text-white uppercase">ge</span>
        </div>
      </Parallax>
    </div>
  );
};

export default LandingImage;
