'use client';

import { MdKeyboardArrowRight } from 'react-icons/md';
import ServiceModal from './ServiceModal';
import Image from 'next/image';

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
      <div className="flex flex-col gap-5 items-center text-white">
        <Image
          className="w-60"
          src={src}
          alt="Service Image"
          width={513}
          height={515}
        />
        <div className="flex flex-col items-center gap-3 justify-center">
          <h3 className="uppercase text-xl font-semibold">{title}</h3>
          <p className="text-sm">from {price}</p>
          <button
            onClick={handleClick}
            className="bg-gradient-to-r from-custom-green to-custom-blue text-white py-2 px-6 rounded uppercase text-[16px] font-semibold flex"
          >
            contact
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
