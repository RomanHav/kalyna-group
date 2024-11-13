'use client';

import { MdKeyboardArrowRight } from 'react-icons/md';
import ServiceModal from '../ServiceModal';
import Image from 'next/image';
import css from './ServicePart.module.css';

interface ServicePartProps {
  serviceModal: number | null;
  handleServiceModal: (id?: number) => void;
  id: number;
  title: string;
  src: string;
  price: string;
  firstDescription: string;
  secondDescription: string;
  thirdDescription: string;
  span: string;
  handleClick: () => void;
}

const ServicePart: React.FC<ServicePartProps> = ({
  serviceModal,
  handleServiceModal,
  id,
  title,
  src,
  price,
  firstDescription,
  secondDescription,
  thirdDescription,
  span,
  handleClick,
}) => {
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
          <button
            onClick={() => handleServiceModal(id)}
            className="flex justify-center items-center gap-2"
          >
            <p>read more</p>
            <span>
              <MdKeyboardArrowRight />
            </span>
          </button>
        </div>
      </div>
      {serviceModal === id && (
        <ServiceModal
          id={id}
          isOpen={serviceModal === id}
          title={title}
          handleServiceModal={() => handleServiceModal(id)}
          firstDescription={firstDescription}
          secondDescription={secondDescription}
          thirdDescription={thirdDescription}
          span={span}
        />
      )}
    </>
  );
};

export default ServicePart;
