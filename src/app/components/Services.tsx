import ServicePart from './ServicePart';
import Title from './Title';

interface ServiceInfo {
  id?: number; // Ensure id is present for unique key assignment
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
}

const Services: React.FC<ServiceProps> = ({ info }) => {
  return (
    <div className="flex flex-col my-8 px-[45px] relative z-10 gap-10">
      <Title title="Services" />
      <ul className="flex flex-col items-center gap-9">
        {info.map(infopart => {
          return (
            <li
              key={infopart.id}
              className="bg-[#A3FFEB]/20 flex items-center rounded-3xl py-2 px-6"
            >
              <ServicePart
                title={infopart.title}
                src={infopart.src}
                price={infopart.price}
                firstDescription={infopart.firstDescription}
                secondDescription={infopart.secondDescription}
                thirdDescription={infopart.thirdDescription}
                span={infopart.span}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Services;
