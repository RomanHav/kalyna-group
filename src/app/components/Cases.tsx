import CasesPart from './CasesPart';
import ContactUsModal from './ContactUsModal';
import Title from './Title';
import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
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
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  useEffect(() => {
    document.body.style.overflow = click ? 'hidden' : 'auto';
  }, [click]);
  return (
    <>
      <div className="flex flex-col my-8 px-[45px] relative gap-10 lg:px-24 lg:my-16">
        <Title id="cases" title="Cases" />
        <ul className="flex flex-col flex-wrap items-center gap-9 md:px-16 lg:px-0 lg:flex-row lg:justify-center lg:gap-11">
          {info.map(infopart => (
            <li
              key={nanoid()}
              className={`${infopart.color} flex w-full items-center rounded-3xl py-3 md:py-4 px-5 lg:w-[600px] xl:w-[500px] xl:h-[200px] min-[1440px]:w-[600px] min-[1440px]:h-[220px] lg:py-4 lg:px-8`}
            >
              <CasesPart
                span={infopart.span}
                title={infopart.title}
                src={infopart.src}
                href={infopart.href}
                isLast={infopart.isLast}
                handleClick={handleClick}
              />
            </li>
          ))}
        </ul>
      </div>
      {click && <ContactUsModal click={click} handleOpen={handleClick} />}
    </>
  );
};

export default Cases;
