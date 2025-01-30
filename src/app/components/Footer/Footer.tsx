'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import FooterRunningLine from '../FooterRunningLine';
import { IoLogoInstagram } from 'react-icons/io5';
import { FaLinkedin, FaBehance, FaFacebookF } from 'react-icons/fa';
import { useId } from 'react';
import css from './Footer.module.css';
import Link from 'next/link';

const Footer = () => {
  const [email, setEmail] = useState('');
  const id = useId();
  const [isDesktop, setIsDesktop] = useState(false);

  const handleEmail = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(evt.target.value);
  };

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    console.log({ email });
  };

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 769);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={'rounded-t-lg'}>
      <div className="relative z-10 flex flex-col gap-9 rounded-t-lg bg-white/5 shadow-lg ring-1 ring-black/5 backdrop-blur-lg py-[45px]">
        <FooterRunningLine />
        <div className="flex flex-col px-[45px] lg:px-24">
          <div className="relative flex flex-col items-center justify-center">
            <form
              className="relative flex w-full flex-col items-center justify-center gap-6 rounded-2xl bg-contain px-7 py-8 text-white bg-form"
              onSubmit={handleSubmit}
            >
              <div className="absolute z-0 h-full w-full rounded-2xl bg-black/80"></div>
              <div className="flex flex-col items-center justify-center gap-6">
                <div className="relative flex flex-col items-center justify-center gap-6 z-[5]">
                  <label
                    className="text-center text-xl font-medium max-w-[70%] md:max-w-fit md:text-2xl lg:mb-6 lg:text-3xl"
                    htmlFor={`${id}-email`}
                  >
                    Subscribe now for news and new services
                  </label>
                  <div
                    className={
                      'flex flex-col lg:flex-row gap-8 items-center justify-center'
                    }
                  >
                    <input
                      className="rounded-xl border border-white bg-inherit py-2 pl-2 max-w-[80%] md:max-w-full"
                      id={`${id}-email`}
                      type="email"
                      value={email}
                      onChange={handleEmail}
                      placeholder="Your email"
                      required
                    />
                    {isDesktop && (
                      <button className={css.button} type="submit">
                        <span className={css.buttonText}>Subscribe</span>
                      </button>
                    )}

                    {!isDesktop && (
                      <button
                        className="relative flex rounded-2xl bg-gradient-to-r px-6 py-2 font-semibold uppercase text-white z-[5] from-custom-blue to-custom-green text-[18px] md:px-8"
                        type="submit"
                      >
                        Subscribe
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="mt-16 mb-16 flex flex-col items-center justify-center gap-14 lg:flex-row lg:justify-between lg:px-10">
            <Image
              className="w-[215px]"
              src={'/logo.png'}
              alt="Logo"
              width={512}
              height={387}
            />
            <div>
              <nav className="flex flex-col items-center justify-center gap-6 text-2xl uppercase text-white">
                <div className="flex flex-col items-center gap-8 text-2xl uppercase text-white">
                  <div className="relative">
                    <Link
                      href={'/services'}
                      className="after:absolute after:-bottom-2 after:left-0 after:w-0 cursor-pointer after:bg-white after:h-[1px] hover:after:w-full hover:after:duration-200"
                    >
                      Services
                    </Link>
                  </div>
                  <div className="relative">
                    <Link
                      href="/about-us"
                      className="after:absolute after:-bottom-2 after:left-0 after:w-0 cursor-pointer after:bg-white after:h-[1px] hover:after:w-full hover:after:duration-200"
                    >
                      About us
                    </Link>
                  </div>
                  <div className="relative">
                    <Link
                      href="/career"
                      className="after:absolute after:-bottom-2 after:left-0 after:w-0 cursor-pointer after:bg-white after:h-[1px] hover:after:w-full hover:after:duration-200"
                    >
                      Career
                    </Link>
                  </div>
                  <div className="relative">
                    <Link
                      href="/blog"
                      className="after:absolute after:-bottom-2 after:left-0 after:w-0 cursor-pointer after:bg-white after:h-[1px] hover:after:w-full hover:after:duration-200"
                    >
                      Blog
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
            <div className="flex flex-col items-center justify-center gap-10">
              <div className="flex flex-col items-center justify-center gap-6 text-white">
                <span className="text-3xl font-medium uppercase">
                  Get in touch
                </span>

                <div className="relative">
                  <a
                    className="after:absolute after:-bottom-2 after:left-0 after:w-0 cursor-pointer after:bg-white text-xl font-light after:h-[1px] hover:after:w-full hover:after:duration-200"
                    href="mailto:info@kalynagroup.com"
                  >
                    info@kalynagroup.com
                  </a>
                </div>
              </div>
              <div className="flex w-full items-center justify-between lg:justify-center lg:gap-11">
                <a href="https://www.instagram.com/kalynaitgroup">
                  <IoLogoInstagram className="fill-white" size={42} />
                </a>
                <a href="https://www.linkedin.com/company/kalyna-group/">
                  <FaLinkedin className="fill-white" size={42} />
                </a>
                <a href="#">
                  <FaBehance className="fill-white" size={42} />
                </a>
                <a
                  href={
                    'https://www.facebook.com/people/Kalyna-Group/61572356486253/'
                  }
                >
                  <FaFacebookF className="fill-white" size={35} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="absolute z-20 mx-auto flex w-full flex-wrap justify-center border-t border-t-white py-3 text-center text-white">
        <span>Kalyna Group © All rights reserved |&nbsp;</span>
        <Link href={'/privacy-policies'} className="underline decoration-solid">
          Privacy Policies
        </Link>
      </p>
    </div>
  );
};

export default Footer;
