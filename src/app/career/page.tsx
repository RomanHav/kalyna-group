import React from 'react';
import JoinTeam from '../components/JoinTeam/JoinTeam';
import CareerRunningLine from '../components/CareerRunningLine';
import CareerWhyKalyna from '../components/CareerWhyKalyna/CareerWhyKalyna';
import CurrentOpportunities from '../components/CurrentOpportunities/CurrentOpportunities';
import CareerFaq from '../components/CareerFaq/CareerFaq';

const CareerPage: React.FC = () => {
  return (
    <div className={'relative py-32 lg:pt-60 flex flex-col gap-28'}>
      <JoinTeam />
      <CareerRunningLine />
      <CareerWhyKalyna />
      <CurrentOpportunities />
      <CareerFaq />
    </div>
  );
};

export default CareerPage;
