import currentOpportunities from '../../../../currentOpportunities.json';
import CurrentOpportunitiesPart from './CurrentOpportunitiesPart';

const CurrentOpportunities = () => {
  return (
    <div className="relative flex flex-col gap-10 lg:gap-14 px-10 md:px-24 md:py-16 bg-gradient-to-b from-[#1B3A38] to-[#1B4E3D] shadow-careerBkg">
      <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
      <div className='relative'>
        <h3 className="uppercase text-balance text-center text-3xl md:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-[#FFFFFF] to-[#38EF7D] bg-clip-text text-transparent">
          Current Opportunities
        </h3>
        <ul className="flex w-full flex-col items-center md:flex-row md:justify-between xl:justify-start lg:mx-auto lg:gap-x-[5%] gap-y-10 md:items-start flex-wrap">
          {currentOpportunities.map(part => {
            return (
              <li key={part.id} className="w-full md:w-[45%] xl:w-[30%]">
                <CurrentOpportunitiesPart
                  title={part.title}
                  description={part.description}
                  src={part.src}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CurrentOpportunities;
