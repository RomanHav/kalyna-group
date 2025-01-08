import { IoCheckmarkDoneCircle } from 'react-icons/io5';

const Success = () => {
  return (
    <div className={'w-full min-h-80 py-10 flex flex-col items-start gap-10'}>
      <div className={'flex gap-10 items-center'}>
        <IoCheckmarkDoneCircle size={60} />
        <h3 className={'text-3xl font-semibold'}>
          You&lsquo;ve successfully submitted form!
        </h3>
      </div>
      <p className={'font-extralight text-xl max-w-[60%]'}>
        We have received your request and will get back to you as soon as
        possible. One of our representatives will contact you within the next 24
        hours to discuss your project in detail.
      </p>
      <button
        onClick={() => window.scrollTo(0, 0)}
        className={
          'bg-white text-black text-2xl font-medium hover:text-white hover:bg-transparent border border-white transition-all duration-300 rounded-lg px-4 py-2'
        }
      >
        Top up
      </button>
    </div>
  );
};
export default Success;
