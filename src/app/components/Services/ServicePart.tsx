'use client';

// import { MdKeyboardArrowRight } from 'react-icons/md';
import Image from 'next/image';
import css from './ServicePart.module.css';
import Link from 'next/link';
import React from 'react';

interface ServicePartProps {
  id: number;
  title: string;
  src: string;
  price: string;
  isMobile?: boolean;
}

const ServicePart: React.FC<ServicePartProps> = ({ id, title, src, price }) => {
  function _renderReadMoreButton(id: number) {
    switch (id) {
      case 1:
        return '/services/e-commerce';
      case 2:
        return '/services/landing-page';
      case 3:
        return '/services/business-website';
      case 4:
        return '/services/ui-ux-design';
      case 5:
        return '/services/3d-design';
      case 6:
        return '/services/crm-system';
    }
  }

  return (
    <div className="relative z-10 flex flex-col items-center gap-5 px-6 py-5 text-white lg:flex-row lg:gap-10 xl:gap-16 xl:px-8 min-[1440px]:gap-10 min-[1440px]:px-4">
      <Image
        className="w-60 lg:w-44"
        src={src}
        alt="Service Image"
        width={513}
        height={515}
      />
      <div className="flex flex-col items-center justify-center gap-3 xl:gap-6">
        <h3 className="text-xl font-semibold uppercase lg:text-center">
          {title}
        </h3>
        <p className="text-sm xl:text-xl">from {price}</p>
        <div className={'relative'}>
          <div className={css.shadow}></div>
          <div
            className={'absolute w-full h-full z-[4] bg-black/60 rounded-full'}
          ></div>
          <Link className={`relative z-[5]`} href={_renderReadMoreButton(id)}>
            <div
              className={`${css.glassButton} flex justify-center items-center shadow-custom uppercase bg-transparent text-white text-base font-semibold py-3 px-6 lg:px-3 xl:px-5 min-[1440px]:px-6 rounded-full`}
            >
              <div className="absolute h-full w-full rounded-full bg-white/10"></div>
              <div className="absolute top-1 flex justify-center rounded-full bg-white/10 z-[9] w-[80%] h-[6px]"></div>
              <p>read more</p>
            </div>
          </Link>
          <div className={css.shadowTwo}></div>
        </div>
      </div>
    </div>
  );
};

export default ServicePart;
