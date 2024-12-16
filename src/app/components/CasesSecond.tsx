import CasesSecondPart from './CasesSecondPart';
import Title from './Title';

interface CasesInfo {
  id: number;
  title: string;
  src: string;
  span: string;
  background: string;
  href: string;
  logo: string;
  logoDescr: string;
  firstPerson: string;
  secondPerson: string;
  thirdPerson: string;
  developerPosition: string;
  managerPosition: string;
  siteImage: string;
  description: string;
}

interface CasesProps {
  info: CasesInfo[];
  openModalId: number | null;
  handleServiceModal: (id: number | undefined) => void;
}

const CasesSecond: React.FC<CasesProps> = ({
  info,
  openModalId,
  handleServiceModal,
}) => {

  return (
    <>
      <div className="relative">
        <Title
          id="cases"
          title="Cases"
          className={'lg:px-24 px-[45px] relative inset-y-20'}
        />
        <ul className="w-full flex mt-20">
          {info.map(infopart => (
            <li key={infopart.id} className={`${infopart.background} bg-cover`}>
              <CasesSecondPart
                id={infopart.id}
                background={infopart.background}
                span={infopart.span}
                title={infopart.title}
                src={infopart.src}
                href={infopart.href}
                firstPerson={infopart.firstPerson}
                secondPerson={infopart.secondPerson}
                thirdPerson={infopart.thirdPerson}
                developerPosition={infopart.developerPosition}
                siteImage={infopart.siteImage}
                managerPosition={infopart.managerPosition}
                description={infopart.description}
                logo={infopart.logo}
                logoDescr={infopart.logoDescr}
                caseModal={openModalId}
                handleCaseModal={handleServiceModal}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default CasesSecond;
