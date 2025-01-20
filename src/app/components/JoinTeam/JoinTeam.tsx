import Image from 'next/image';
import css from './JoinTeam.module.css';

const JoinTeam = () => {
  return (
    <div className="h-screen w-full relative flex flex-col justify-between px-24 gap-10">
      <div className="flex flex-col relative z-20">
        <h2 className="uppercase md:text-5xl lg:text-6xl text-center font-bold bg-gradient-to-r from-[#FFFFFF] to-[#38EF7D] bg-clip-text text-transparent mb-5">
          Join our team at Kalyna group
        </h2>
        <span className="md:text-xl lg:text-2xl text-center font-semibold bg-[#38EF7D] bg-clip-text text-transparent">
          Build your career with a team that values innovation, growth, and
          collaboration.
        </span>
      </div>
      <Image
        className="absolute -rotate-[25deg] z-10 md:top-40 lg:top-0 left-0 w-full"
        src={'/hands-career.webp'}
        alt="Hands Image"
        width={4000}
        height={2160}
      />
      <div className="flex justify-center relative z-20">
        {' '}
        <button className={css.button}>
          <span className={css.buttonText}>Explore Opportunities</span>
        </button>
      </div>
    </div>
  );
};

export default JoinTeam;
