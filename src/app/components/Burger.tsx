import { Link as ScrollLink } from 'react-scroll';
import { useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import { useRouter } from 'next/navigation';

interface BurgerProps {
  handleClick: () => void;
  isOpen: boolean;
}

const Burger: React.FC<BurgerProps> = ({ handleClick, isOpen }) => {
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <div
      className={`bg-black bg-cover fixed top-0 right-0 w-full h-screen bg-opacity-70 z-30 transform transition-transform duration-300 ease-out ${
        isOpen ? '' : 'hidden'
      }`}
    >
      <div className="w-full h-full absolute inset-0 opacity-20"></div>
      <nav className="flex flex-col items-center justify-center h-full relative z-20 text-white uppercase text-2xl md:text-3xl md:gap-10 gap-6">
        <ScrollLink
          onClick={() => {
            router.push('#services');
            handleClick();
          }}
          to="services"
          smooth={true}
          duration={800}
          offset={-100}
          className="cursor-pointer"
        >
          Services
        </ScrollLink>

        <ScrollLink
          onClick={() => {
            router.push('#about-us');
            handleClick();
          }}
          to="about-us"
          smooth={true}
          duration={800}
          className="cursor-pointer"
          offset={-100}
        >
          About us
        </ScrollLink>

        <ScrollLink
          onClick={() => {
            router.push('#benefits');
            handleClick();
          }}
          to="benefits"
          className="cursor-pointer"
          smooth={true}
          duration={800}
          offset={-100}
        >
          Benefits
        </ScrollLink>

        <ScrollLink
          onClick={() => {
            router.push('#cases');
            handleClick();
          }}
          className="cursor-pointer"
          to="cases"
          smooth={true}
          duration={800}
          offset={-100}
        >
          Cases
        </ScrollLink>
      </nav>
      <IoMdClose
        size={35}
        className="absolute top-7 right-6 z-20 fill-white md:w-14 md:right-16 md:top-9"
        onClick={handleClick}
      />
    </div>
  );
};

export default Burger;
