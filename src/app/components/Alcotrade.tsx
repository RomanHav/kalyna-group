import Image from 'next/image';

const Alcotrade = () => {
  const skills = [
    'Next.js',
    'Authorization',
    'Figma',
    'API Integration',
    'Database Management',
  ];
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
      <div className="w-full lg:w-1/2">
        <div className="relative flex justify-center items-center rounded-lg w-full h-[150px] md:h-[320px] lg:h-[354px] bg-businessExpertise bg-cover bg-center">
          <div className="absolute w-full h-full bg-[#263238] opacity-70 rounded-lg"></div>
          <div className="absolute flex justify-center items-center z-10 w-full h-full">
            <span className="uppercase text-3xl lg:text-5xl border-b pb-2 border-white font-light text-white">
              Alcotrade
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 text-white w-full lg:w-1/2">
        <div className="flex justify-between items-center">
          <h4 className="text-xl md:text-2xl lg:text-4xl uppercase">
            Alcotrade
          </h4>
          <a href={'https://www.alcotrade.com.ua/'} target="_blanc">
            <div className="flex justify-center items-center border border-white rounded-full rotate-[135deg] w-11 h-11">
              <Image
                src={'/arrow-cases.svg'}
                alt="Wood Minded Button"
                width={18}
                height={26}
              />
            </div>
          </a>
        </div>
        <p className="md:text-lg  w-11/12">
          Our team developed Alcotrade, a web application for alcohol export,
          aimed at fostering collaboration. By integrating animation libraries,
          we created an engaging user experience. The platform features strict
          typing for reliability and advanced authentication for secure
          partnerships in the alcohol export industry.
        </p>
        <ul className="flex flex-wrap gap-4 w-full min-[1440px]:w-3/4">
          {skills.map((skill, index) => {
            return (
              <li
                key={index}
                className="text-base text-white/70 rounded-full border border-white/70 px-6 py-2"
              >
                {skill}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Alcotrade;
