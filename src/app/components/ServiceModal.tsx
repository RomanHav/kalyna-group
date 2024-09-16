import { useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';

interface ServiceModalProps {
  handleServiceModal: (id: number) => void;
  isOpen: boolean;
}

const ServiceModal: React.FC<ServiceModalProps> = ({
  handleServiceModal,
  isOpen,
}) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <div
      className={`bg-black bg-cover absolute top-0 right-0 w-full h-screen bg-opacity-70 z-30 transform scale-y- transition-transform duration-300 ease-out ${
        isOpen ? '' : 'hidden'
      }`}
    >
      <div className="w-full h-full absolute inset-0 opacity-20"></div>
      <div>
        <h3>E-commerce</h3>
        <p></p>
        <p></p>
        <span></span>
      </div>
      <IoMdClose
        size={35}
        className="absolute top-7 right-6 z-20 fill-white"
        onClick={handleServiceModal}
      />
    </div>
  );
};

export default ServiceModal;
