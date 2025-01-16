import currentOpportunities from '../../../../currentOpportunities.json';
import CurrentOpportunitiesPart from './CurrentOpportunitiesPart';

const CurrentOpportunities = () => {
  return (
    <div className="flex flex-col gap-14 px-24">
      <h3 className="uppercase text-center text-5xl font-semibold bg-gradient-to-r from-[#FFFFFF] to-[#38EF7D] bg-clip-text text-transparent">
        Current Opportunities
      </h3>
      <ul className="flex w-full mx-auto gap-x-[5%] gap-y-10 items-start flex-wrap">
        {currentOpportunities.map(part => {
          return (
            <li key={part.id} className="w-[30%]">
              <CurrentOpportunitiesPart
                title={part.title}
                description={part.description}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CurrentOpportunities;
