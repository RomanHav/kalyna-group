import Image from 'next/image';
import Link from 'next/link';
import FooterRunningLine from './FooterRunningLine';
import { IoLogoInstagram } from 'react-icons/io5';
import { FaLinkedin } from 'react-icons/fa';
import { FaBehance } from 'react-icons/fa';
import { useId, useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const id = useId();

  const handleEmail = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(evt.target.value);
  };

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault();
    console.log({ email });
  };

  return (
    <div className="flex flex-col py-[45px] bg-white/10 gap-9 rounded-t-lg relative">
      <FooterRunningLine />
      <div className="flex flex-col px-[45px]">
        <div className="flex flex-col items-center justify-center relative">
          <form
            className="flex flex-col w-full relative bg-form bg-contain rounded-2xl text-white items-center justify-center px-7 py-8 gap-6"
            onSubmit={handleSubmit}
          >
            <div className="bg-black/80 absolute z-0 w-full h-full rounded-2xl"></div>
            <div className="flex flex-col items-center gap-6 relative z-[5]">
              <label
                className="text-center max-w-[70%] md:max-w-fit text-xl md:text-2xl font-medium"
                htmlFor={`${id}-email`}
              >
                Subscribe now for news and new services
              </label>
              <input
                className="pl-2 py-2 max-w-[70%] md:w-full rounded-xl bg-inherit border border-white"
                id={`${id}-email`}
                type="email"
                value={email}
                onChange={handleEmail}
                placeholder="Your email"
                required
              />
            </div>
            <button
              className="relative z-[5] bg-gradient-to-r from-custom-blue to-custom-green text-white py-2 px-6 md:px-8 rounded-2xl uppercase text-[18px] font-semibold flex"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
        <div className="flex flex-col justify-center items-center gap-14 mb-16 mt-16">
          <Image
            className="w-[215px]"
            src={'/logo.png'}
            alt="Logo"
            width={512}
            height={387}
          />
          <div>
            <nav className="flex flex-col items-center justify-center text-white uppercase text-2xl gap-6">
              <Link href={'/services'}>Services</Link>
              <Link href={'/about-us'}>About us</Link>
              <Link href={'/benefits'}>Benefits</Link>
              <Link href={'/cases'}>Cases</Link>
            </nav>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col justify-center items-center gap-6 text-white">
            <span className="text-3xl uppercase font-medium">Get in touch</span>
            <a className="text-xl font-light" href="tel:+380955083323">
              +380 (95) 508 33 23
            </a>
            <a
              className="text-xl font-light"
              href="mailto:info@kalynagroup.com"
            >
              info@kalynagroup.com
            </a>
          </div>
          <div className="flex gap-11 justify-center items-center">
            <a>
              <IoLogoInstagram className="fill-white" size={42} />
            </a>
            <a>
              <FaLinkedin className="fill-white" size={42} />
            </a>
            <a>
              <FaBehance className="fill-white" size={42} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
