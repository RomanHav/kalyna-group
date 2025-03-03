import ourTeam from '../about-us/ourTeam.json';
import OurTeamPart from './OurTeam/OurTeamPart';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const MobileTeam = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        breakpoints={{
          375: { slidesPerView: 1 },
          768: { slidesPerView: 2, spaceBetween: 20 },
        }}
        loop
        autoplay={{ delay: 4000 }}
        speed={1000}
        className="w-full md:flex"
      >
        {ourTeam.map(part => {
          return (
            <SwiperSlide key={part.id} className="relative flex justify-center items-center">
             <OurTeamPart
                name={part.name}
                photo={part.photo}
                position={part.position}
                color={part.color}
                linkedin={part.linkedin}
                instagram={part.instagram}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
export default MobileTeam;
