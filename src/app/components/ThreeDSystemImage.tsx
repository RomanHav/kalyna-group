'use client';
import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';

const ThreeDSystemImage = () => {
  return (
    <div className="absolute top-[25rem] right-[3rem] z-10 w-full flex flex-col justify-center items-center text-white">
      <Image
        src={'/three-d-image.svg'}
        alt="Phone Image"
        width={673}
        height={673}
      />
      <Parallax
        className={
          'absolute bottom-16 left-[24rem] tracking-[0.5em] flex justify-center items-center w-full h-full'
        }
        speed={5}
      >
        <Image
          src={'/design.svg'}
          alt="Landing Image"
          width={630}
          height={220}
        />
      </Parallax>
      <Parallax
        className={
          'absolute -bottom-4 right-[22rem] tracking-widest flex justify-center items-center w-full h-full'
        }
        speed={5}
      >
              <Image src={ '/3d.svg'} alt='3D title' width={239} height={197}/>
      </Parallax>
    </div>
  );
};

export default ThreeDSystemImage;
