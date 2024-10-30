import BenefitsPart from './BenefitsPart';
import Title from './Title';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';

interface BenefitsInfo {
  id?: number;
  src: string;
  numberCard: string;
  title: string;
  description: string;
}

interface BenefitsProps {
  info: BenefitsInfo[];
}

const Benefits: React.FC<BenefitsProps> = ({ info }) => {
  return (
    <div className="flex flex-col my-8 relative gap-10">
      <div className="px-[45px]">
        <Title id='benefits' title="Benefits" />
      </div>
      <div>
        <Swiper
          modules={[Navigation, Keyboard]}
          slidesPerView={'auto'}
          breakpoints={{
            375: {
              slidesPerView: 1,
              spaceBetween:32
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 16
            },
            1440: {
              slidesPerView: 4,
            },
          }}
          loop={false}
          navigation
          keyboard={{
            enabled: true,
            onlyInViewport: false,
          }}
          grabCursor={true}
          speed={800}
        >
          {info.map(infopart => {
            return (
              <SwiperSlide key={infopart.id}>
                <BenefitsPart
                  src={infopart.src}
                  numberCard={infopart.numberCard}
                  title={infopart.title}
                  description={infopart.description}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Benefits;
