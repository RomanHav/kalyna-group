import Image from 'next/image';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import React, { useState, useEffect } from 'react';
import css from './NavBar.module.css'

interface NavBarProps {
  handleClick: () => void;
  openModalId: number | null;
}

const NavBar: React.FC<NavBarProps> = ({ handleClick, openModalId }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches);
    };
    handleResize(); // Set initial state based on current window width
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light bg-light ${!openModalId ? 'fixed' : ' -z-10'} z-[30] top-0 left-0 w-full backdrop-blur-md`}
    >
      <div className="flex justify-between items-center bg-[#0D1816]/60 py-6 px-4 md:px-16 border-b border-white rounded-b-lg lg:px-24 lg:py-9">
        <Link href={'/'}>
          <Image
            className="w-16 md:scale-125 h-12 lg:w-[110px] lg:h-[80px]"
            src={'/logo.png'}
            alt="Logo"
            width={512}
            height={387}
          />
        </Link>

        {isMobile ? (
          <button type="button" onClick={handleClick} aria-label="Toggle menu">
            <Image
              className="md:w-14"
              src={'/Menu.svg'}
              alt="Burger Button"
              width={50}
              height={50}
            />
          </button>
        ) : (
          <div className="flex items-center">
            <div className="flex gap-8 text-white mr-[390px] text-xl uppercase">
              <div className="relative">
                <ScrollLink
                  to="services"
                  smooth={true}
                  duration={800}
                  offset={-150}
                  className="cursor-pointer tracking-wide after:absolute after:-bottom-2 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full hover:after:duration-200"
                >
                  Services
                </ScrollLink>
              </div>
              <span>/</span>
              <div className="relative">
                <ScrollLink
                  to="about-us"
                  smooth={true}
                  duration={800}
                  offset={-150}
                  className="cursor-pointer tracking-wide after:absolute after:-bottom-2 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full hover:after:duration-200"
                >
                  About us
                </ScrollLink>
              </div>
              <span>/</span>
              <div className="relative">
                <ScrollLink
                  to="benefits"
                  smooth={true}
                  duration={800}
                  offset={-150}
                  className="cursor-pointer tracking-wide after:absolute after:-bottom-2 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full hover:after:duration-200"
                >
                  Benefits
                </ScrollLink>
              </div>
              <span>/</span>
              <div className='relative'>
                <ScrollLink
                  to="cases"
                  smooth={true}
                  duration={800}
                  offset={-150}
                  className="cursor-pointer tracking-wide after:absolute after:-bottom-2 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full hover:after:duration-200"
                >
                  Cases
                </ScrollLink>
              </div>
            </div>
            <button className={css.button}>
              <span className={css.buttonText}>Contact Us</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
