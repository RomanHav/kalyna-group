import Image from 'next/image';
import ContactUsModal from '../ContactUsModal';
import { useEffect, useState } from 'react';
import css from './HeaderVideo.module.css';

export default function HeaderVideo() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  useEffect(() => {
    document.body.style.overflow = click ? 'hidden' : 'auto';
  }, [click]);
  return (
    <div className="bg-black/50 flex pt-20 md:pt-36 pb-20 px-16 justify-center items-center lg:px-24 lg:pt-52 lg:pb-12">
      <div className=" flex md:py-0 flex-wrap gap-3 justify-center items-center py-14  md:gap-16 md:justify-start md:pr-5  relative z-10 lg:w-[746px] lg:mr-6 lg:gap-20">
        <p className="px-14 md:px-0 md:text-3xl  bg-gradient-to-r from-white to-custom-green bg-clip-text text-transparent text-center md:text-left uppercase text-2xl font-semibold lg:text-5xl">
          Create an Effective Website for Your Business With Us
        </p>
        <Image
          className="md:hidden"
          src={'/headergif.gif'}
          alt="Honeycombs Gif"
          unoptimized={true}
          width={240}
          height={240}
        />
        <button onClick={handleClick} className={css.button}>
          <span className={css.buttonText}>Send request</span>
        </button>
      </div>
      <Image
        className="hidden md:block w-[65rem] lg:w-[500px]"
        src={'/headergif.gif'}
        alt="Honeycombs Gif"
        width={240}
        height={240}
      />

      {click && <ContactUsModal click={click} handleClick={handleClick} />}
    </div>
  );
}
