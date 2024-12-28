import howWeWork from '../../../howWeWork.json';
import HowWeWorkPart from './HowWeWorkPart';

const HowWeWork = () => {
  return (
    <div className="my-14 py-16 relative text-white">
      <div className="absolute z-10 top-0 left-0 w-full h-full bg-black opacity-45"></div>
      <div className="relative z-20 px-20">
        <h3 className="uppercase text-5xl mb-20">How we work</h3>
        <ul className="flex w-full flex-col">
          {howWeWork.map(part => {
            return (
              <li key={part.number}>
                <HowWeWorkPart
                  number={part.number}
                  title={part.title}
                  description={part.description}
                  isLast={part.isLast}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default HowWeWork;
