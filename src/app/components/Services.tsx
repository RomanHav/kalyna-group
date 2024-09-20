import ServicePart from './ServicePart';
import Title from './Title';

interface ServiceInfo {
  id: number;
  title: string;
  src: string;
  price: string;
  firstDescription: string;
  secondDescription: string;
  thirdDescription: string;
  span: string;
}

interface ServiceProps {
  info: ServiceInfo[];
  openModalId: number | null;
  handleServiceModal: (id: number | undefined) => void;
}

const Services: React.FC<ServiceProps> = ({ info, openModalId, handleServiceModal }) => {
  return (
    <div className="flex flex-col my-8 px-[45px] relative z-10 gap-10">
      <Title id='services' title="Services" />
      <ul className="flex flex-col items-center gap-9">
        {info.map((infopart) => (
          <li
            key={infopart.id}
            className="bg-[#A3FFEB]/20 flex items-center rounded-3xl py-2 px-6"
          >
            <ServicePart
              serviceModal={openModalId}
              handleServiceModal={handleServiceModal}
              id={infopart.id}
              title={infopart.title}
              src={infopart.src}
              price={infopart.price}
              firstDescription={infopart.firstDescription}
              secondDescription={infopart.secondDescription}
              thirdDescription={infopart.thirdDescription}
              span={infopart.span}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Services;
