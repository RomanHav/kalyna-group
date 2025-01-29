// import { Link as ScrollLink } from 'react-scroll';
import React from 'react';
import { IoMdClose } from 'react-icons/io';
// import { useRouter } from 'next/navigation';
import Link from "next/link";

interface BurgerProps {
  handleClick: () => void;
  isOpen: boolean;
}

const Burger: React.FC<BurgerProps> = ({ handleClick, isOpen }) => {
  // const router = useRouter();

  return (
    <div
      className={`bg-black/70 backdrop-blur-lg bg-cover fixed top-0 right-0 w-full h-screen  z-[9999] transform transition-transform duration-300 ease-out ${
        isOpen ? '' : 'hidden'
      }`}
    >
      <div className="w-full h-full absolute inset-0 opacity-20"></div>
      <nav className="flex flex-col items-center justify-center h-full relative z-20 text-white uppercase text-2xl md:text-3xl md:gap-10 gap-6">
        <Link href={'/services'} onClick={handleClick}>
            Services
        </Link>
          <Link href={'/about-us'} onClick={handleClick}>
              About Us
          </Link>
          <Link href={'/career'} onClick={handleClick}>
              Career
          </Link>
          <Link href={'/blog'} onClick={handleClick}>
              Blog
          </Link>
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
