'use client';

import { MdKeyboardArrowRight } from 'react-icons/md';
import Image from 'next/image';
import { useState } from 'react';
interface ServicePartProps {
  title: string;
  src: string;
  price: string;
}

const ServicePart: React.FC<ServicePartProps> = ({ title, src, price }) => {
  const [serviceModal, setServiceModal] = useState(false);

  const handleServiceModal = () => {
    setServiceModal(!serviceModal);
  };
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
          <button className="bg-gradient-to-r from-custom-green to-custom-blue text-white py-2 px-6 rounded uppercase text-[16px] font-semibold flex">
            contact
          </button>
          <button
            onClick={handleServiceModal}
            className="flex justify-center items-center gap-2"
          >
            <p>read more</p>
            <span>
              <MdKeyboardArrowRight />
            </span>
          </button>
        </div>
      </div>
      {serviceModal && (
        <ServiceModal
          isOpen={serviceModal}
          handleServiceModal={handleServiceModal}
        />
      )}
    </>
  );
};

export default ServicePart;
