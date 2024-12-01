'use client'
import Image from 'next/image';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import React, { useState, useEffect } from 'react';
import ContactUsModal from '../ContactUsModal';
import { IoIosLink } from 'react-icons/io';
import css from './NavBar.module.css';
import Burger from "@/app/components/Burger";



const NavBar: React.FC = ( ) => {
  
  const [isMobile, setIsMobile] = useState(false);
  const [click, setClick] = useState(false);
  const [isFixed, setIsFixed] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleOpen = () => {
    setClick(!click);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }

      setLastScrollY(currentScrollY);
    };

    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 1024px)').matches);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${
          isFixed ? 'translate-y-0' : '-translate-y-full'
        } bg-[#0D1816]/60 backdrop-blur-md`}
      >
        <div className="flex justify-between items-center py-6 px-4 md:px-16 border-b border-white rounded-b-lg lg:px-24 lg:py-9">
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
            <button
              type="button"
              onClick={handleClick}
              aria-label="Toggle menu"
            >
              <Image
                className="md:w-14 lg:w-20"
                src={'/Menu.svg'}
                alt="Burger Button"
                width={50}
                height={50}
              />
            </button>
          ) : (
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="flex items-center gap-8 text-white xl:mr-[90px] min-[1440px]:mr-[340px] text-xl uppercase">
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
                  <span>
                    <IoIosLink size={25} />
                  </span>
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
                  <span>
                    <IoIosLink size={25} />
                  </span>
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
                  <span>
                    <IoIosLink size={25} />
                  </span>
                  <div className="relative">
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
              </div>
              <button className={css.button} onClick={handleOpen}>
                <span className={css.buttonText}>Contact Us</span>
              </button>
            </div>
          )}
        </div>
      </nav>
      {isOpen && <Burger isOpen={isOpen} handleClick={handleClick} />}
      {click && <ContactUsModal click={click} handleClick={handleOpen} />}
    </div>
  );
};

export default NavBar;
