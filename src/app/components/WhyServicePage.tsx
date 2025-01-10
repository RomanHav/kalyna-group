import WhyServicePagePart from './WhyServicePagePart';

interface WhyServiceProps {
  title: string;
  description: string;
}

interface WhyServiceObjectProps {
  id: number;
  title: string;
  description: string;
  number: string;
  src: string;
}

interface WhyServicePageProps {
  whyService: WhyServiceProps;
  whyServiceObject: WhyServiceObjectProps[];
}

const WhyServicePage: React.FC<WhyServicePageProps> = ({
  whyService,
  whyServiceObject,
}) => {
  return (
    <div className="flex justify-between px-36">
      <div className="w-1/2 flex flex-col gap-16">
        <h3 className="text-5xl leading-[1.25] w-[420px] font-medium text-[#38EF7D]">
          {whyService.title}
        </h3>
        <p className="font-base w-[530px] italic text-2xl text-white">
          {whyService.description}
        </p>
      </div>
      <ul className="w-1/2 flex flex-wrap justify-end text-white">
        {whyServiceObject.map(part => {
          return (
            <li
              key={part.id}
              className={`flex ${part.id === 1 || part.id === 4 || part.id === 5 ? 'items-end' : ''} w-1/2 h-[260px] border border-white`}
            >
              <WhyServicePagePart
                id={part.id}
                title={part.title}
                description={part.description}
                number={part.number}
                src={part.src}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WhyServicePage;
