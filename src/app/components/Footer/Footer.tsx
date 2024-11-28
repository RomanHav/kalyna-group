import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Link as ScrollLink } from 'react-scroll';
import FooterRunningLine from '../FooterRunningLine';
import { IoLogoInstagram } from 'react-icons/io5';
import { FaLinkedin, FaBehance } from 'react-icons/fa';
import { useId } from 'react';
import css from './Footer.module.css';
import CalendlyEmbed from '@/app/components/CalendlyEmbed';

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
    <div>
      <div className="flex flex-col py-[45px] bg-white/10 gap-9 rounded-t-lg relative">
        <FooterRunningLine />
        <div className="flex flex-col px-[45px] lg:px-24">
          <div className="flex flex-col items-center justify-center relative">
            <form
              className="flex flex-col w-full relative bg-form bg-contain rounded-2xl text-white items-center justify-center px-7 py-8 gap-6"
              onSubmit={handleSubmit}
            >
              <div className="bg-black/80 absolute z-0 w-full h-full rounded-2xl"></div>
              <div className="flex flex-col justify-center items-center gap-6">
                <div className="flex flex-col items-center gap-6 relative z-[5] justify-center">
                  <label
                    className="text-center max-w-[70%] md:max-w-fit text-xl md:text-2xl font-medium lg:text-3xl lg:mb-6"
                    htmlFor={`${id}-email`}
                  >
                    Subscribe now for news and new services
                  </label>
                    <input
                      className="pl-2 py-2 max-w-[80%] md:max-w-full rounded-xl bg-inherit border border-white"
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
                      className="relative z-[5] bg-gradient-to-r from-custom-blue to-custom-green text-white py-2 px-6 md:px-8 rounded-2xl uppercase text-[18px] font-semibold flex"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  )}
                </div>
              </div>
            </form>
          </div>
          <div className="flex flex-col justify-center items-center gap-14 mb-16 mt-16 lg:flex-row lg:justify-between lg:px-10">
            <Image
              className="w-[215px]"
              src={'/logo.png'}
              alt="Logo"
              width={512}
              height={387}
            />
            <div>
              <nav className="flex flex-col items-center justify-center text-white uppercase text-2xl gap-6">
                <div className="flex flex-col gap-8 text-white items-center text-2xl uppercase">
                  <div className="relative">
                    <ScrollLink
                      to="services"
                      smooth={true}
                      duration={800}
                      offset={-150}
                      className="cursor-pointer after:absolute after:-bottom-2 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full hover:after:duration-200"
                    >
                      Services
                    </ScrollLink>
                  </div>
                  <div className="relative">
                    <ScrollLink
                      to="about-us"
                      smooth={true}
                      duration={800}
                      offset={-150}
                      className="cursor-pointer after:absolute after:-bottom-2 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full hover:after:duration-200"
                    >
                      About us
                    </ScrollLink>
                  </div>
                  <div className="relative">
                    <ScrollLink
                      to="benefits"
                      smooth={true}
                      duration={800}
                      offset={-150}
                      className="cursor-pointer after:absolute after:-bottom-2 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full hover:after:duration-200"
                    >
                      Benefits
                    </ScrollLink>
                  </div>
                  <div className="relative">
                    <ScrollLink
                      to="cases"
                      smooth={true}
                      duration={800}
                      offset={-150}
                      className="cursor-pointer after:absolute after:-bottom-2 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full hover:after:duration-200"
                    >
                      Cases
                    </ScrollLink>
                  </div>
                </div>
              </nav>
            </div>
            <div className="flex flex-col justify-center items-center gap-10">
              <div className="flex flex-col justify-center items-center gap-6 text-white">
                <span className="text-3xl uppercase font-medium">
                  Get in touch
                </span>
                <CalendlyEmbed
                  url={'https://calendly.com/kalynaitgroup/30min'}
                />
                <div className="relative">
                  <a
                    className="text-xl font-light cursor-pointer after:absolute after:-bottom-2 after:left-0 after:h-[1px] after:w-0 after:bg-white hover:after:w-full hover:after:duration-200"
                    href="mailto:info@kalynagroup.com"
                  >
                    info@kalynagroup.com
                  </a>
                </div>
              </div>
              <div className="flex gap-11 justify-center items-center">
                <a href="https://www.instagram.com/kalynaitgroup">
                  <IoLogoInstagram className="fill-white" size={42} />
                </a>
                <a href="https://www.linkedin.com/company/kalyna-group/">
                  <FaLinkedin className="fill-white" size={42} />
                </a>
                <a href="#">
                  <FaBehance className="fill-white" size={42} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span className="absolute z-20 w-full flex justify-center text-center text-white py-3 border-t border-t-white">
        Kalyna Group © All rights reserved | Privacy Policies
      </span>
    </div>
  );
};

export default Footer;
