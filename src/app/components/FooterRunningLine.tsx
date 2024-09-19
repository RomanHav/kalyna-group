import Marquee from 'react-fast-marquee';

const FooterRunningLine = () => {
  return (
    <Marquee
      loop={0}
      autoFill={true}
      className="bg-gradient-to-r from-custom-running-first to-custom-running-second"
    >
      <div className="flex gap-4 items-center text-black px-2 py-4 rounded uppercase ">
        <p className="text-2xl custom-font font-medium"><span className='text-green-900'>Stay connect</span> with us.</p>
      </div>
    </Marquee>
  );
};

export default FooterRunningLine;
