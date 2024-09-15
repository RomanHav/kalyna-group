import Image from 'next/image';
import Marquee from 'react-fast-marquee';

const RunningLine = () => {
  return (
    <Marquee
      loop={0}
      autoFill={true}
      className="bg-gradient-to-r from-custom-running-first to-custom-running-second"
    >
      <div className="flex gap-4 items-center text-black px-2 py-4 rounded uppercase ">
        <span className="text-2xl custom-font font-medium">Kalyna group</span>
        <Image
          className="w-12"
          src={'/running-line-image.svg'}
          alt="Running Line Image"
          width={512}
          height={513}
        />
      </div>
    </Marquee>
  );
};

export default RunningLine;
