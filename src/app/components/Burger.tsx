// import { Link as ScrollLink } from 'react-scroll';
import React from 'react';
import { IoMdClose } from 'react-icons/io';
// import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { RiArrowDropRightLine } from 'react-icons/ri';

interface BurgerProps {
  handleClick: () => void;
  isOpen: boolean;
  handleOpenService?: () => void;
  openServices?: boolean;
}

const Burger: React.FC<BurgerProps> = ({
  handleClick,
  isOpen,
  handleOpenService,
  openServices,
}) => {
  // const router = useRouter();

  return (
    <div
      className={`bg-black/70 backdrop-blur-lg bg-cover fixed top-0 right-0 w-full h-screen  z-[9999] transform transition-transform duration-300 ease-out ${
        isOpen ? '' : 'hidden'
      }`}
    >
      <div className="w-full h-full absolute inset-0 opacity-20"></div>
      <nav className="flex flex-col items-center justify-center h-full relative z-20 text-white  text-2xl md:text-3xl md:gap-10 gap-6">
        <button
          className={`relative ${openServices ? 'top-0' : 'top-5'} flex items-center`}
          onClick={handleOpenService}
        >
          <span className={'uppercase'}>Services</span>
          <RiArrowDropRightLine
            size={40}
            className={`${!openServices ? 'rotate-0' : 'rotate-90'} transition-all absolute -right-14 duration-200`}
          />
        </button>
        <ul
          className={`${!openServices ? 'opacity-0 top-full h-0 translate-y-1/2' : 'h-auto opacity-100 translate-y-0 flex'} relative transition-all justify-center items-center flex-col gap-3 text-xl`}
        >
          <li onClick={handleClick}>
            <Link href={'/services/e-commerce'}>E-commerce</Link>
          </li>
          <li onClick={handleClick}>
            <Link href={'/services/landing-page'}>Landing page</Link>
          </li>
          <li onClick={handleClick}>
            <Link href={'/services/business-website'}>Business website</Link>
          </li>
          <li onClick={handleClick}>
            <Link href={'/services/ui-ux-design'}>UI/UX design</Link>
          </li>
          <li onClick={handleClick}>
            <Link href={'/services/3d-design'}>3d design</Link>
          </li>
          <li onClick={handleClick}>
            <Link href={'/services/crm-system'}>Crm system</Link>
          </li>
        </ul>
        <Link href={'/about-us'} className={'uppercase'} onClick={handleClick}>
          About Us
        </Link>
        <Link href={'/career'} className={'uppercase'} onClick={handleClick}>
          Career
        </Link>
        <Link href={'/blog'} className={'uppercase'} onClick={handleClick}>
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
