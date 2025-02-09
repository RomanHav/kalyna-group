import { nanoid } from 'nanoid';
import css from './CurrentOpportunitiesPart.module.css';
import Image from 'next/image';
import Link from 'next/link';

interface CurrentOpportunitiesPartProps {
  title: string;
  src: string;
  description: string[];
}

const CurrentOpportunitiesPart: React.FC<CurrentOpportunitiesPartProps> = ({
  title,
  src,
  description,
}) => {
  return (
    <div className="flex flex-col items-center gap-7">
      <Image
        className="w-full"
        src={src}
        alt={`${title} Image`}
        width={1080}
        height={1080}
      />
      <div className="w-full text-[#C2FAD7] flex gap-3 flex-col items-center">
        <h4 className="uppercase text-center whitespace-pre text-xl lg:text-2xl font-semibold">
          {title}
        </h4>
        <div className="w-[60%] md:w-[40%] h-[1px] bg-white"></div>
      </div>
      <ul className="flex list-disc flex-col pl-4 gap-1 md:min-h-[226px] lg:min-h-[200px]">
        {description.map(part => {
          return (
            <li key={nanoid()} className="text-white">
              {part}
            </li>
          );
        })}
      </ul>
      <Link
        href={'https://forms.gle/LvhmTYU4r4pZikGx8'}
        target="_blank"
        className={css.button}
      >
        <span className={css.buttonText}>Apply Now</span>
      </Link>
    </div>
  );
};

export default CurrentOpportunitiesPart;
