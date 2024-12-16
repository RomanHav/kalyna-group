import { useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';

interface ServiceModalProps {
  id?: number;
  isOpen: boolean;
  title: string;
  firstDescription: string;
  secondDescription: string;
  thirdDescription: string;
  span: string;
  handleServiceModal: (id?: number) => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({
  id,
  isOpen,
  handleServiceModal,
  title,
  firstDescription,
  secondDescription,
  thirdDescription,
  span,
}) => {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div
      className={`bg-black bg-cover fixed top-0 right-0 w-full h-full flex flex-col justify-center bg-opacity-70 z-[9999] transition-transform duration-300 ease-out backdrop-blur-md ${
        isOpen ? '' : 'hidden'
      }`}
    >
      <div className="w-full h-full absolute inset-0 opacity-20"></div>
      <div className="relative z-[70] text-white p-6 md:px-16">
        <h3 className="text-2xl font-semibold mb-4 uppercase md:text-3xl md:mb-10">{title}</h3>
        <p className="mb-2 md:text-xl">{firstDescription}</p>
        <p className="mb-2 md:text-xl">{secondDescription}</p>
        <p className="mb-2 md:text-xl md:mb-10">{thirdDescription}</p>
        <span className="text-sm md:text-lg">{span}</span>
      </div>
      <IoMdClose
        size={35}
        className="absolute top-7 right-6 z-20 md:right-12 md:top-10 fill-white cursor-pointer"
        onClick={() => handleServiceModal(id)}
      />
    </div>
  );
};

export default ServiceModal;
