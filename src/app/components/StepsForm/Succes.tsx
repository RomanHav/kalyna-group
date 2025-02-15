'use client';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';
import { useEffect, useState } from 'react';

const Success = ({ isModal, handleClose }) => {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    setMobile(window.innerWidth <= 767);
  }, []);
  return (
    <div
      className={`w-full min-h-80 md:min-h-60 mb-10 flex flex-col items-start ${isModal ? 'py-6' : 'py-0'} lg:py-20 gap-10`}
    >
      <div className={'flex w-full gap-10 items-center max-md:justify-center'}>
        <IoCheckmarkDoneCircle size={mobile ? 80 : 60} />
        <h3 className={'text-3xl font-semibold text-balance hidden md:flex'}>
          You&lsquo;ve successfully submitted form!
        </h3>
      </div>
      <p className={`font-extralight text-xl ${!isModal && 'lg:max-w-[60%]'}`}>
        We have received your request and will get back to you as soon as
        possible. One of our representatives will contact you within the next 24
        hours to discuss your project in detail.
      </p>
      <button
        onClick={!isModal ? () => window.scrollTo(0, 0) : handleClose}
        className={
          'bg-white text-black text-2xl font-medium hover:text-white hover:bg-transparent border border-white transition-all duration-300 rounded-lg px-4 py-2'
        }
      >
        {!isModal ? 'Top up' : 'Close'}
      </button>
    </div>
  );
};
export default Success;
