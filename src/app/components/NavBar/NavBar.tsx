'use client';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { IoIosLink } from 'react-icons/io';
import css from './NavBar.module.css';
import Burger from '@/app/components/Burger';
import NavServices from '@/app/components/NavServices';
// import { usePathname, useRouter } from 'next/navigation';
const NavBar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [click, setClick] = useState(false);
  const [isFixed, setIsFixed] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openServices, setOpenServices] = useState(false);
  // const [hidden, setHidden] = useState(false)
  const handleOpen = () => {
    setClick(!click);
  };
  const handleOpenService = () => {
    setOpenServices(true);
  };
  const handleCloseService = () => {
    setOpenServices(false);
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
        <div className="flex justify-between items-center py-6 px-4 md:px-16 border-b border-white lg:px-24 lg:py-6">
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
                <div className="flex items-center gap-8 text-white xl:mr-[90px] min-[1440px]:mr-[340px] text-xl uppercase">
                  <div className="relative">
                    <span
                      onMouseEnter={handleOpenService}
                      onMouseLeave={handleCloseService}
                      className="cursor-pointer tracking-wide pb-10 -mt-10 after:absolute after:-bottom-2 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full hover:after:duration-200"
                    >
                      Services
                    </span>
                  </div>
                  <span>
                    <IoIosLink size={25} />
                  </span>
                  <div className="relative">
                    <Link
                      href={'/about-us'}
                      className="cursor-pointer tracking-wide after:absolute after:-bottom-2 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full hover:after:duration-200"
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
                      className="cursor-pointer tracking-wide after:absolute after:-bottom-2 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full hover:after:duration-200"
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
                      className="cursor-pointer tracking-wide after:absolute after:-bottom-2 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full hover:after:duration-200"
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
      {isOpen && <Burger isOpen={isOpen} handleClick={handleClick} />}

      <div
        className={`w-full absolute bg-[#0D1816]/60 transition-all backdrop-blur-md px-5 py-5 duration-300 top-28 ${openServices ? ' min-h-40 opacity-100 z-40' : 'pointer-events-none cursor-not-allowed min-h-0 opacity-0 !p-0 -z-10'} `}
        onMouseEnter={handleOpenService}
        onMouseLeave={handleCloseService}
      >
        {openServices && (
          <NavServices handleCloseService={handleCloseService} />
        )}
      </div>
    </div>
  );
};

export default NavBar;
