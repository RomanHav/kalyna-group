'use client';
import Image from 'next/image';

function HeaderImage() {
  return (
    <div className="w-[125px] h-[125px] md:w-[150px] md:h-[150px] lg:w-[250px] lg:h-[250px] flex justify-center items-center">
      <div className="relative w-[100px] h-[100px] md:w-[130px] md:h-[130px] lg:w-[200px] lg:h-[200px] animate-grow">
        <div className="absolute w-full h-full flex flex-col justify-between items-center">
          <Image
            className="w-[50px] md:w-[65px] lg:w-[97px]"
            src="/heart-green.svg"
            alt="UI/UX Design Image"
            width={97}
            height={83}
          />
          <Image
            className="rotate-180 w-[50px] md:w-[65px] lg:w-[97px]"
            src="/heart-green.svg"
            alt="UI/UX Design Image"
            width={97}
            height={83}
          />
        </div>
        <div className="absolute z-10 flex justify-between items-center w-full h-full">
          <Image
            className="-rotate-90 w-[50px] md:w-[65px] lg:w-[97px]"
            src="/heart-white.svg"
            alt="UI/UX Design Image"
            width={97}
            height={83}
          />
          <Image
            className="rotate-90 w-[50px] md:w-[65px] lg:w-[97px]"
            src="/heart-white.svg"
            alt="UI/UX Design Image"
            width={97}
            height={83}
          />
        </div>
      </div>
      <style jsx>
        {`
          @keyframes grow {
            0% {
              width: 200px;
              height: 200px;
            }
            50% {
              width: 250px;
              height: 250px;
            }
            100% {
              width: 200px;
              height: 200px;
            }
          }
          .animate-grow {
            animation: grow 3s linear infinite;
          }

          @media (max-width: 768px) {
            @keyframes grow {
              0% {
                width: 130px;
                height: 130px;
              }
              50% {
                width: 150px;
                height: 150px;
              }
              100% {
                width: 130px;
                height: 130px;
              }
            }
            .animate-grow {
              animation: grow 2s linear infinite;
            }
          }

          @media (max-width: 480px) {
            @keyframes grow {
              0% {
                width: 100px;
                height: 100px;
              }
              50% {
                width: 125px;
                height: 125px;
              }
              100% {
                width: 100px;
                height: 100px;
              }
            }
            .animate-grow {
              animation: grow 2s linear infinite;
            }
          }
        `}
      </style>
    </div>
  );
}

const HeaderUi = () => {
  return (
    <div className="relative">
      {' '}
      <div
        className={
          'absolute bg-uiImage flex items-center justify-center bg-center bg-cover mix-blend-color-dodge w-full h-[340px] md:h-[520px] -top-[22rem] md:-top-[35rem] lg:h-[690px] xl:h-[1150px] lg:-top-[48rem] xl:-top-[62rem] min-[1440px]:-top-[70rem] text-white'
        }
      >
        <div className="w-[350px] md:w-[640px] lg:w-[900px] xl:w-[1150px] flex flex-col gap-4 lg:gap-9 mt-16 lg:mt-32 xl:mt-24">
          <div className="flex justify-start items-center gap-[14%] md:gap-40 xl:gap-60">
            <Image
              className="w-[160px] md:w-[270px] lg:w-[430px] xl:w-[531px]"
              src={'/uxui.svg'}
              alt="UI/UX Design Image"
              width={531}
              height={240}
            />
            <div className={'animate-rotate'}>
              <Image
                className="w-[100px] md:w-[150px] lg:w-[200px]"
                src={'/parts_circle.svg'}
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
          <div className="flex justify-end items-center gap-[14%] md:gap-40 xl:gap-60">
            <HeaderImage />
            <span className="uppercase text-5xl md:text-[80px] lg:text-[128px] xl:text-[160px] font-bold">
              Design
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderUi;
