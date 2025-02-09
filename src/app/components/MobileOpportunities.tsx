import currentOpportunities from '../../../currentOpportunities.json';
import CurrentOpportunitiesPart from '@/app/components/CurrentOpportunities/CurrentOpportunitiesPart';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const MobileOpportunities = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        breakpoints={{
          375: { slidesPerView: 1 },
          768: { slidesPerView: 2, spaceBetween: 30 },
        }}
        loop
        autoplay={{ delay: 4000 }}
        speed={1000}
        className="w-full md:flex md:gap-6"
      >
        {currentOpportunities.map(part => {
          return (
            <SwiperSlide key={part.id} className="flex items-center">
              <CurrentOpportunitiesPart
                title={part.title}
                description={part.description}
                src={part.src}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
export default MobileOpportunities;
