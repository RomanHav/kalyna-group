'use client';
import Image from 'next/image';
import { Parallax } from '../utils/parallax';

const HeaderUi = () => {
  return (
    <div className={'relative mx-auto -top-[40rem] left-52  text-white'}>
      <div className={'absolute flex items-center gap-[26rem]'}>
        <Image
          className={''}
          src={'/uxui.webp'}
          alt={'ui-ux'}
          width={530}
          height={240}
        />
        <div className={'animate-rotate'}>
          <Image
            className={' w-28'}
            src={'/parts_circle.webp'}
            alt={'parts-circle'}
            width={200}
            height={200}
          />
          <style jsx>
            {`
              @keyframes rotate {
                0% {
                  rotate: 0deg;
                }
                25% {
                  rotate: 90deg;
                }
                50% {
                  rotate: 180deg;
                }
                75% {
                  rotate: 270deg;
                }
                100% {
                  rotate: 360deg;
                }
              }
              .animate-rotate {
                animation: rotate 5s ease-in-out infinite;
              }
            `}
          </style>
        </div>
      </div>
      <div className={'absolute left-10 gap-40 top-32 flex items-center'}>
        <Image
          className={'w-28 animate-pulse'}
          src={'/star-ux.webp'}
          alt={'ux-star'}
          width={200}
          height={200}
        />

        <p className={'text-[190px] font-bold'}>
          <span className={'relative z-10'}>DESI</span>
          <span className={'relative z-[1]'}>GN</span>
        </p>
      </div>
      <Parallax
        className={'z-[2] absolute right-[calc(50%-150px)] opacity-90'}
        speed={10}
      >
        <Image
          className={' w-[26rem]'}
          src={'/ux_object.webp'}
          alt={'object'}
          width={867}
          height={716}
        />
      </Parallax>
    </div>
  );
};

export default HeaderUi;
