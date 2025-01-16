import { nanoid } from 'nanoid';
import css from './CurrentOpportunitiesPart.module.css'

interface CurrentOpportunitiesPartProps {
  title: string;
  description: string[];
}

const CurrentOpportunitiesPart: React.FC<CurrentOpportunitiesPartProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-center gap-7">
      <div className="w-full h-[360px] bg-[#1B3431]"></div>
      <div className="w-full text-[#C2FAD7] flex gap-3 flex-col items-center">
        <h4 className="uppercase text-center whitespace-pre text-2xl font-semibold">
          {title}
        </h4>
        <div className="w-[40%] h-[1px] bg-white"></div>
      </div>
      <ul className="flex list-disc flex-col gap-1 min-h-[160px]">
        {description.map(part => {
          return (
            <li key={nanoid()} className="text-white">
              {part}
            </li>
          );
        })}
      </ul>
      <button className={css.button}>
        <span className={css.buttonText}>Apply Now</span>
      </button>
    </div>
  );
};

export default CurrentOpportunitiesPart;
