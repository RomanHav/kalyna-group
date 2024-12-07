import Image from 'next/image';
import Title from '../Title';
import { useState, useEffect } from 'react';
import ContactUsModal from '../ContactUsModal';
import css from './AboutUs.module.css';

const AboutUs = () => {
  const [click, setClick] = useState(false);
  const handleOpen = () => {
    setClick(!click);
  };
  useEffect(() => {
    document.body.style.overflow = click ? 'hidden' : 'auto';
  }, [click]);
  return (
    <>
      <div className="flex flex-col my-8 px-[45px] relative gap-10 lg:mt-16 lg:my-8 lg:px-24 h-screen">
        <Title id="about-us" title="About Us" />
        <div className="flex flex-col justify-center items-center bg-[#A3FFEB]/10 p-5 rounded-3xl lg:flex-row xl:px-16 lg:gap-8 xl:gap-14 min-[1440px]:px-0 lg:py-0 lg:justify-start">
          <div className="">
            <Image
              className="w-[170px] md:w-[330px] mb-7 lg:w-[380px] lg:mb-0 rounded-tl-3xl rounded-bl-3xl"
              src={'/about.png'}
              alt="About Us Image"
              width={1250}
              height={1250}
            />
          </div>
          <div className="flex flex-col md:pt-10 justify-center items-center lg:w-[679px] lg:pt-0 lg:items-start">
            <p className="text-base md:text-xl text-white mb-7 lg:text-base">
              <span className="uppercase">Kalyna group</span> is an innovative
              web development company dedicated to helping businesses thrive in
              the digital world. We combine modern technology and a
              client-centric approach to deliver high-quality solutions tailored
              to your business needs.
            </p>
            <p className="text-base md:text-xl text-white mb-4 md:mb-8 lg:text-base lg:mb-10">
              Our team of professionals is committed to creating dynamic and
              scalable websites, applications, and platforms that enhance user
              experience and drive business growth. With a focus on detail,
              performance, and long-term partnerships.
            </p>
            <button onClick={handleOpen} className={css.button}>
              <span className={css.buttonText}>Write us</span>
            </button>
            <p className="font-medium text-xl md:text-2xl text-white lg:text-xl">
              <span className="uppercase">Kalyna group</span> - is your reliable
              partner in digital transformation!
            </p>
          </div>
        </div>
      </div>
      {click && <ContactUsModal click={click} handleOpen={handleOpen} />}
    </>
  );
};

export default AboutUs;
