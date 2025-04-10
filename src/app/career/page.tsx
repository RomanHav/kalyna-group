import React from 'react';
import JoinTeam from '../components/JoinTeam/JoinTeam';
import CareerRunningLine from '../components/CareerRunningLine';
import CareerWhyKalyna from '../components/CareerWhyKalyna/CareerWhyKalyna';
import CurrentOpportunities from '../components/CurrentOpportunities/CurrentOpportunities';
import CareerFaq from '../components/CareerFaq/CareerFaq';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Join our team | Kalyna Group',
  metadataBase: new URL('https://www.kalynagroup.space/career'),
  description:
    'Build your career with a team that values innovation, growth, and collaboration with Kalyna Group',
  openGraph: {
    title: 'Join our team | Kalyna Group',
    description:
      'Build your career with a team that values innovation, growth, and collaboration with Kalyna Group',
    url: 'https://www.kalynagroup.space/career',
  },
};

const CareerPage: React.FC = () => {
  return (
    <div className={'relative pt-32 lg:pt-44 flex flex-col gap-20 lg:gap-28'}>
      <JoinTeam />
      <CareerRunningLine />
      <CareerWhyKalyna />
      <CurrentOpportunities />
      <CareerFaq />
    </div>
  );
};

export default CareerPage;
