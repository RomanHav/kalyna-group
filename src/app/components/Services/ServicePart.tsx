'use client';

// import { MdKeyboardArrowRight } from 'react-icons/md';
import Image from 'next/image';
import css from './ServicePart.module.css';
import Link from 'next/link';

interface ServicePartProps {
  id: number;
  title: string;
  src: string;
  price: string;
}

const ServicePart: React.FC<ServicePartProps> = ({ id, title, src, price }) => {
  function _renderReadMoreButton(id: number) {
    switch (id) {
      case 1:
        return '/e-commerce';
      case 2:
        return '/landing-page';
      case 3:
        return '/business-website';
      case 4:
        return '/ui-ux-design';
      case 5:
        return '/3d-design';
      case 6:
        return '/crm-system';
    }
  }

  return (
    <div className="relative py-2 px-6 xl:px-12 min-[1440px]:px-6 z-10 flex flex-col gap-5 items-center text-white lg:flex-row lg:gap-10 xl:gap-16 min-[1440px]:gap-10">
      <Image
        className="w-60 lg:w-44"
        src={src}
        alt="Service Image"
        width={513}
        height={515}
      />
      <div className="flex flex-col items-center gap-3 xl:gap-6 justify-center">
        <h3 className="uppercase text-xl font-semibold lg:text-center">
          {title}
        </h3>
        <p className="text-sm xl:text-xl">from {price}</p>
        <Link className={`relative`} href={_renderReadMoreButton(id)}>
          <div
            className={`${css.glassButton} flex justify-center items-center shadow-custom uppercase bg-transparent text-white text-base font-semibold py-2 px-6 rounded lg:rounded-xl`}
          >
            <div className="absolute w-full h-full rounded-xl bg-white/10"></div>
            <div className="absolute top-1 rounded-full z-10 flex justify-center bg-white/10 w-[80%] h-[6px]"></div>
            <p>read more</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ServicePart;
