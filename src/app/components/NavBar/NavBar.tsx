'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { IoIosLink } from 'react-icons/io';
import css from './NavBar.module.css';
import Burger from '@/app/components/Burger';
import NavServices from '@/app/components/NavServices';
import FormSecond from '@/app/components/StepsForm/FormSecond';
import { RiArrowDropRightLine } from 'react-icons/ri';

const NavBar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [click, setClick] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const handleOpen = () => {
    setClick(!click);
  };
  const handleOpenService = () => {
    setOpenServices(!openServices);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 1024px)').matches);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  return (
    <div>
      <nav
        className={`absolute top-0 left-0 w-full z-50 transition-transform duration-300
         bg-[#0D1816]/60 backdrop-blur-md`}
      >
        <div className="flex items-center justify-between border-b border-white px-4 py-6 md:px-16 lg:px-24 lg:py-6">
          <Link href={'/'}>
            <Image
              className="w-16 md:scale-125 lg:w-20"
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
                <div className="flex items-center gap-8 text-xl uppercase text-white xl:mr-[90px] min-[1440px]:mr-[280px] 2xl:mr-[390px]">
                  <div
                    onClick={handleOpenService}
                    className="relative flex gap-4 items-center justify-center after:absolute after:-bottom-2 after:left-0 after:w-0 cursor-pointer after:bg-white tracking-wide after:h-[1px] hover:after:w-full hover:after:duration-200"
                  >
                    <span>Services</span>
                    <RiArrowDropRightLine
                      size={30}
                      className={`${openServices ? 'rotate-90' : 'rotate-0'} transition-all duration-200`}
                    />
                  </div>
                  <span>
                    <IoIosLink size={25} />
                  </span>
                  <div className="relative">
                    <Link
                      href={'/about-us'}
                      className=" after:absolute after:-bottom-2 after:left-0 after:w-0 cursor-pointer after:bg-white tracking-wide after:h-[1px] hover:after:w-full hover:after:duration-200"
                    >
                      About us
                    </Link>
                  </div>
                  <span>
                    <IoIosLink size={25} />
                  </span>
                  <div className="relative">
                    <Link
                      href="/career"
                      className="after:absolute after:-bottom-2 after:left-0 after:w-0 cursor-pointer after:bg-white tracking-wide after:h-[1px] hover:after:w-full hover:after:duration-200"
                    >
                      Career
                    </Link>
                  </div>
                  <span>
                    <IoIosLink size={25} />
                  </span>
                  <div className="relative">
                    <Link
                      href="/blog"
                      className="after:absolute after:-bottom-2 after:left-0 after:w-0 cursor-pointer after:bg-white tracking-wide after:h-[1px] hover:after:w-full hover:after:duration-200"
                    >
                      Blog
                    </Link>
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
      {isOpen && (
        <Burger
          isOpen={isOpen}
          handleClick={handleClick}
          openServices={openServices}
          handleOpenService={handleOpenService}
        />
      )}
      {click && <FormSecond isModal={click} handleClose={handleOpen} />}

      <div
        className={`w-full hidden lg:block absolute bg-[#0D1816]/60 transition-all backdrop-blur-md px-5 py-5 duration-300 top-28 ${openServices ? ' min-h-40 opacity-100 z-40' : 'pointer-events-none cursor-not-allowed min-h-0 opacity-0 !p-0 -z-10'} `}
        onClick={handleOpenService}
      >
        {openServices && <NavServices handleCloseService={handleOpenService} />}
      </div>
    </div>
  );
};

export default NavBar;
