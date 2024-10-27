import CasesPart from './CasesPart';
import Title from './Title';
import { nanoid } from 'nanoid';

interface CasesInfo {
  isLast: boolean;
  title: string;
  src: string;
  span: string;
  color: string;
  href: string;
}

interface CasesProps {
  info: CasesInfo[];
}

const Cases: React.FC<CasesProps> = ({ info }) => {
  return (
    <div className="flex flex-col my-8 px-[45px]  relative gap-10">
      <Title id="cases" title="Cases" />
      <ul className="flex flex-col items-center gap-9">
        {info.map(infopart => (
          <li
            key={nanoid()}
            className={`${infopart.color} flex w-full items-center rounded-3xl py-3 px-5`}
          >
            <CasesPart
              span={infopart.span}
              title={infopart.title}
              src={infopart.src}
              href={infopart.href}
              isLast={infopart.isLast}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cases;
