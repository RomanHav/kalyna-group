'use client';
import Image from 'next/image';
import { Parallax } from 'react-scroll-parallax';

const CrmImage = () => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <Parallax className="absolute top-[26rem] z-10 w-full flex flex-col justify-center items-center text-white">
      <div>
        <span className="flex mb-10 w-full justify-center text-[128px] font-bold uppercase gap-12">
          <Image
            src={'/crm-title.svg'}
            alt="Crm title"
            width={311}
            height={192}
          />
          System
        </span>
        <div className="flex gap-10 justify-between">
          <div className="flex items-start relative top-40">
            <span className="py-1 px-3 bg-[#EEFF7E] text-xl text-black border border-white rounded-full">
              Dmytro
            </span>
            <Image
              className="absolute -top-6 -right-6"
              src={'/arrow-crm.svg'}
              alt="Crm Arrow"
              width={31}
              height={31}
            />
          </div>
          <div className="flex flex-col gap-7">
            <div className="flex flex-col px-9 py-4 bg-[#51946E]/40 rounded-3xl">
              <div className="flex justify-between">
                <span>Data Storage:</span>
                <span>33,8 gb</span>
              </div>
              <Image
                src={'/line-progress.svg'}
                alt="Line Progress"
                width={278}
                height={21}
              />
            </div>
            <div className="flex justify-center">
              <Image
                className="relative left-3"
                src={'/men.svg'}
                alt="Men Image"
                width={70}
                height={70}
              />
              <Image
                className=""
                src={'/women.svg'}
                alt="Men Image"
                width={70}
                height={70}
              />
            </div>
            <div className="flex justify-center">
              <div className="flex flex-col">
                <Image
                  src={'/10m+.svg'}
                  alt="Popular"
                  width={249}
                  height={87}
                />
                <span className="uppercase text-4xl">customers</span>
              </div>
            </div>
          </div>
          <Image
            className="w-[300px] h-[300px]"
            src={'/schedule.png'}
            alt="Schedule"
            width={512}
            height={512}
          />
          <div className='flex flex-col justify-between items-center pl-9 py-10'>
            <div className="flex items-start relative">
              <span className="py-1 px-3 bg-[#7EFFE1] text-xl text-black border border-white rounded-full">
                Mark
              </span>
              <Image
                className="absolute -top-6 -left-6"
                src={'/second-arrow-crm.svg'}
                alt="Crm Arrow"
                width={31}
                height={31}
              />
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-5xl font-medium">4,5/5</span>
              <ul className="flex gap-1 pt-1">
                {stars.map((star, index) => {
                  return (
                    <li key={index}>
                      <svg
                        width="36"
                        height="36"
                        viewBox="0 0 36 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.9037 6.61673C17.2509 5.83766 17.4246 5.44812 17.6664 5.32817C17.8764 5.22394 18.123 5.22394 18.333 5.32817C18.5748 5.44812 18.7485 5.83766 19.0958 6.61673L21.8618 12.8221C21.9645 13.0524 22.0158 13.1676 22.0953 13.2558C22.1655 13.3338 22.2515 13.3962 22.3473 13.4389C22.4558 13.4872 22.5812 13.5005 22.832 13.5269L29.5884 14.24C30.4366 14.3296 30.8607 14.3743 31.0495 14.5672C31.2135 14.7347 31.2897 14.9693 31.2555 15.2013C31.2162 15.4683 30.8994 15.7537 30.2658 16.3248L25.2188 20.8731C25.0316 21.0418 24.9378 21.1263 24.8785 21.2291C24.826 21.3201 24.7932 21.421 24.7823 21.5254C24.7698 21.6435 24.7959 21.7668 24.8483 22.0135L26.258 28.6596C26.435 29.494 26.5235 29.9112 26.3984 30.1503C26.2896 30.3582 26.0901 30.5031 25.859 30.5422C25.5929 30.5872 25.2234 30.3743 24.4845 29.9481L18.5993 26.5536C18.3809 26.4276 18.2717 26.3647 18.1556 26.34C18.0528 26.3182 17.9466 26.3182 17.8439 26.34C17.7278 26.3647 17.6186 26.4276 17.4002 26.5536L11.5149 29.9481C10.7761 30.3743 10.4066 30.5872 10.1405 30.5422C9.90935 30.5031 9.70979 30.3582 9.60113 30.1503C9.47604 29.9112 9.56453 29.494 9.74151 28.6596L11.1512 22.0135C11.2035 21.7668 11.2296 21.6435 11.2172 21.5254C11.2062 21.421 11.1734 21.3201 11.1209 21.2291C11.0616 21.1263 10.9679 21.0418 10.7806 20.8731L5.73369 16.3248C5.10008 15.7537 4.78326 15.4683 4.74387 15.2013C4.70967 14.9693 4.78589 14.7347 4.9499 14.5672C5.13872 14.3743 5.56284 14.3296 6.41109 14.24L13.1675 13.5269C13.4183 13.5005 13.5437 13.4872 13.6521 13.4389C13.748 13.3962 13.8339 13.3338 13.9042 13.2558C13.9836 13.1676 14.0349 13.0524 14.1376 12.8221L16.9037 6.61673Z"
                          fill={`${star === stars.length ? '#BEBEBE' : '#FFDF61'}`}
                        />
                      </svg>
                    </li>
                  );
                })}
              </ul>
              <span className='text-3xl font-medium'>15k+ Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default CrmImage;
