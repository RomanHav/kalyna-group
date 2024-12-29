import HowWeWork from '../components/HowWeWork';
import OurTeam from '../components/OurTeam';
import WhoWeAre from '../components/WhoWeAre';
import OurStack from '@/app/components/OurStack';

const AboutUs = () => {
  return (
    <div className="pt-60 relative">
      <WhoWeAre />
      <HowWeWork />
      <OurTeam />
      <OurStack />
    </div>
  );
};

export default AboutUs;
