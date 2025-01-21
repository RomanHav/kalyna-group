import Marquee from 'react-fast-marquee';

const CareerRunningLine = () => {
  return (
    <Marquee
      loop={0}
      autoFill={true}
      className="bg-gradient-to-r from-custom-running-first to-custom-running-second"
    >
      <div className="flex items-center text-[#14532D] px-12 md:px-20 lg:px-28 py-4 rounded uppercase ">
        <span className="text-2xl custom-font font-medium">Join our team</span>
      </div>
    </Marquee>
  );
};

export default CareerRunningLine;
