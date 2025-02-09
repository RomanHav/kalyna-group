import currentOpportunities from '../../../currentOpportunities.json';
import CurrentOpportunitiesPart from '@/app/components/CurrentOpportunities/CurrentOpportunitiesPart';

const DesktopOpportunities = () => {
  return (
    <>
      <ul className="flex w-full flex-row justify-between xl:justify-start mx-auto gap-x-[5%] gap-y-10 items-start flex-wrap">
        {currentOpportunities.map(part => {
          return (
            <li key={part.id} className="w-[45%] xl:w-[30%]">
              <CurrentOpportunitiesPart
                title={part.title}
                description={part.description}
                src={part.src}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default DesktopOpportunities;
