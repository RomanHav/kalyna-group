'use client';

import { MdKeyboardArrowRight } from 'react-icons/md';
import Image from 'next/image';
import css from './ServicePart.module.css';
import Link from 'next/link';

interface ServicePartProps {
  id: number;
  title: string;
  src: string;
  price: string;
  handleClick: () => void;
}

const ServicePart: React.FC<ServicePartProps> = ({
  id,
  title,
  src,
  price,
  handleClick,
}) => {
  function _renderReadMoreButton(id: number) {
    switch (id) {
      case 1:
        return '/landing-page';
      case 2:
        return '/ui-ux-design';
      case 3:
        return '/e-commerce';
      case 4:
        return '/business-website';
      case 5:
        return '/crm-system';
      case 6:
        return '/3d-design';
    }
  }

  return (
    <>
      <div className="flex flex-col gap-5 items-center text-white lg:flex-row lg:gap-10 xl:gap-16 min-[1440px]:gap-10">
        <Image
          className="w-60 lg:w-44"
          src={src}
          alt="Service Image"
          width={513}
          height={515}
        />
        <div className="flex flex-col items-center gap-3 justify-center">
          <h3 className="uppercase text-xl font-semibold lg:text-center">
            {title}
          </h3>
          <p className="text-sm">from {price}</p>
          <button onClick={handleClick} className={css.button}>
            <span className={css.buttonText}>contact</span>
          </button>
          <Link
            className="flex justify-center items-center gap-2"
            href={_renderReadMoreButton(id)}
          >
            <p>read more</p>
            <span>
              <MdKeyboardArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServicePart;
