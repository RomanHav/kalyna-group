import careerWhyKalyna from '../../../../careerWhyKalyna.json';
import CareerWhyKalynaPart from './CareerWhyKalynaPart';

const CareerWhyKalyna = () => {
  return (
    <div className="flex flex-col gap-8 md:gap-10 lg:gap-14 px-10 md:px-24">
      <h3 className="uppercase text-center text-balance text-3xl md:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-[#FFFFFF] to-[#38EF7D] bg-clip-text text-transparent">
        Why choose Kalyna Group?
      </h3>
      <ul className="flex flex-col items-center gap-10 justify-between md:flex-row md:gap-y-10 md:items-start flex-wrap">
        {careerWhyKalyna.map(part => {
          return (
            <li key={part.id} className="w-full md:w-[40%] lg:w-[45%] xl:w-[20%]">
              <CareerWhyKalynaPart
                title={part.title}
                src={part.src}
                description={part.description}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CareerWhyKalyna;
