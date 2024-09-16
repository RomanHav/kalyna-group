'use client';
import { useState } from 'react';
import NavBar from './components/NavBar';
import HeaderVideo from './components/HeaderVideo';
import Services from './components/Services';
import Burger from './components/Burger';
import RunningLine from './components/RunningLine';
import AboutUs from './components/AboutUs';
import Benefits from './components/Benefits';

import seviceInfo from '../../serviceInfo.json';
import benefitsInfo from '../../benefitsInfo.json';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const [serviceModal, setServiceModal] = useState(false);

  const handleServiceModal = () => {
    setServiceModal(!serviceModal);
  };

  return (
    <div>
      <div className={`${isOpen ? 'blur-sm' : ''}`}>
        <NavBar handleClick={handleClick} serviceModal={serviceModal} />
        <HeaderVideo />
        <Services
          info={seviceInfo}
          serviceModal={serviceModal}
          handleServiceModal={handleServiceModal}
        />
        <RunningLine />
        <AboutUs />
        <Benefits info={benefitsInfo} />
      </div>
      <Burger isOpen={isOpen} handleClick={handleClick} />
    </div>
  );
}
