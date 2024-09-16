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
  handleServiceModal: (id: number) => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({
  id,
  handleServiceModal,
  isOpen,
  title,
  firstDescription,
  secondDescription,
  thirdDescription,
  span,
}) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <div
      className={`bg-black bg-cover absolute top-0 right-0 w-full h-screen bg-opacity-70 z-[60] transform scale-y- transition-transform duration-300 ease-out ${
        isOpen ? '' : 'hidden'
      }`}
    >
      <div className="w-full h-full absolute inset-0 opacity-20"></div>
      <div className="relative z-10 text-white">
        <h3>{title}</h3>
        <p>{firstDescription}</p>
        <p>{secondDescription}</p>
        <p>{thirdDescription}</p>
        <span>{span}</span>
      </div>
      <IoMdClose
        size={35}
        className="absolute top-7 right-6 z-20 fill-white cursor-pointer"
        onClick={() => id && handleServiceModal(id)}
      />
    </div>
  );
};

export default ServiceModal;
