'use client';
import ContactUsModal from '../ContactUsModal';
import ServicePart from './ServicePart';
import Title from '../Title';
import { useState, useEffect } from 'react';
interface ServiceInfo {
  id: number;
  title: string;
  src: string;
  price: string;
  firstDescription: string;
  secondDescription: string;
  thirdDescription: string;
  span: string;
}

interface ServiceProps {
  info: ServiceInfo[];
  openModalId: number | null;
  handleServiceModal: (id: number | undefined) => void;
}

const Services: React.FC<ServiceProps> = ({
  info,
  openModalId,
  handleServiceModal,
}) => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  useEffect(() => {
    document.body.style.overflow = click ? 'hidden' : 'auto';
  }, [click]);
  return (
    <>
      <div className="relative z-10 flex flex-col my-8 md:my-10 px-[45px] md:px-16 gap-10 lg:px-24 lg:pb-16">
        <Title id="services" title="Services"/>
        <ul className="flex flex-col flex-wrap justify-center items-center gap-9 md:justify-between md:flex-row lg:justify-center lg:gap-10">
          {info.map(infopart => (
            <li
              key={infopart.id}
              className="bg-[#A3FFEB]/20 flex items-center rounded-3xl py-2 px-6 lg:w-[410px] lg:h-56"
            >
              <ServicePart
                serviceModal={openModalId}
                handleServiceModal={handleServiceModal}
                id={infopart.id}
                title={infopart.title}
                src={infopart.src}
                price={infopart.price}
                firstDescription={infopart.firstDescription}
                secondDescription={infopart.secondDescription}
                thirdDescription={infopart.thirdDescription}
                span={infopart.span}
                handleClick={handleClick}
              />
            </li>
          ))}
        </ul>
      </div>
      {click && <ContactUsModal click={click} handleClick={handleClick} />}
    </>
  );
};

export default Services;