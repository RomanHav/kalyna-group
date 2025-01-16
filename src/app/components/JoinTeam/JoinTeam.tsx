import css from './JoinTeam.module.css';

const JoinTeam = () => {
  return (
    <div className="h-screen flex flex-col px-24 items-center gap-10">
      <div className="flex flex-col">
        <h2 className="uppercase text-6xl font-bold bg-gradient-to-r from-[#FFFFFF] to-[#38EF7D] bg-clip-text text-transparent mb-5">
          Join our team at Kalyna group
        </h2>
        <span className="text-2xl font-semibold bg-[#38EF7D] bg-clip-text text-transparent">
          Build your career with a team that values innovation, growth, and
          collaboration.
        </span>
      </div>
      <div className="w-[550px] h-[500px] bg-[#1B3431]"></div>
      <button className={css.button}>
        <span className={css.buttonText}>Explore Opportunities</span>
      </button>
    </div>
  );
};

export default JoinTeam;
