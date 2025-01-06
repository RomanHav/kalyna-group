import HowWeWork from '../components/HowWeWork/HowWeWork';
import OurTeam from '../components/OurTeam/OurTeam';
import WhoWeAre from '../components/WhoWeAre';
import OurStack from '@/app/components/OurStack/OurStack';

const AboutUs = () => {
  return (
    <div className="pt-32 lg:pt-60 relative">
      <WhoWeAre />
      <HowWeWork />
      <OurTeam />
      <OurStack />
    </div>
  );
};

export default AboutUs;
