import Marquee from 'react-fast-marquee';

const LandingRunningLine = () => {
  return (
    <Marquee
      loop={0}
      direction="right"
      autoFill={true}
      className="bg-gradient-to-b from-[#9CFF95] to-[#7DEBA9]"
    >
      <div className="flex gap-4 items-center text-[#282828] px-4 py-1 md:py-3 xl:py-5 rounded uppercase ">
        <p className="text-base md:text-xl lg:text-2xl xl:text-3xl font-bold">With kalyna group</p>
      </div>
    </Marquee>
  );
};

export default LandingRunningLine;
