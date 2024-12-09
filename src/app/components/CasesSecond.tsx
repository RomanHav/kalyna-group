import CasesSecondPart from './CasesSecondPart';
import Title from './Title';
import { nanoid } from 'nanoid';

interface CasesInfo {
  title: string;
  src: string;
  span: string;
  background: string;
  href: string;
  logo: string;
}

interface CasesProps {
  info: CasesInfo[];
}

const CasesSecond: React.FC<CasesProps> = ({ info }) => {
  return (
    <div className="relative">
      <Title
        id="cases"
        title="Cases"
        className={'lg:px-24 px-[45px] relative inset-y-20'}
      />
      <ul className="w-full flex mt-20">
        {info.map(infopart => (
          <li key={nanoid()} className={`${infopart.background} bg-cover`}>
            <CasesSecondPart
              span={infopart.span}
              title={infopart.title}
              src={infopart.src}
              href={infopart.href}
              logo={infopart.logo}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CasesSecond;
