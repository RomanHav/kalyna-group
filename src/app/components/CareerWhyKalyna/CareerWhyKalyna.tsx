import careerWhyKalyna from '../../../../careerWhyKalyna.json';
import CareerWhyKalynaPart from './CareerWhyKalynaPart';

const CareerWhyKalyna = () => {
  return (
    <div className="flex flex-col md:gap-10 lg:gap-14 px-24">
      <h3 className="uppercase text-center md:text-4xl lg:text-5xl font-semibold bg-gradient-to-r from-[#FFFFFF] to-[#38EF7D] bg-clip-text text-transparent">
        Why choose Kalyna Group?
      </h3>
      <ul className="flex justify-between md:gap-y-10 items-start flex-wrap">
        {careerWhyKalyna.map(part => {
          return (
            <li key={part.id} className="md:w-[40%] lg:w-[20%]">
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
