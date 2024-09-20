'use client';
import { useState } from 'react';

import NavBar from './components/NavBar';
import HeaderVideo from './components/HeaderVideo';
import Services from './components/Services';
import Burger from './components/Burger';
import RunningLine from './components/RunningLine';
import AboutUs from './components/AboutUs';
import Benefits from './components/Benefits';
import Cases from './components/Cases';
import MyForm from './components/Form';
import Footer from './components/Footer';



import seviceInfo from '../../serviceInfo.json';
import benefitsInfo from '../../benefitsInfo.json';
import casesInfo from '../app/casesInfo.json'



export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const [openModalId, setOpenModalId] = useState<number | null>(null);


  const handleServiceModal = (id: number | undefined) => {
    if (openModalId === id) {
      setOpenModalId(null);
    } else {
      setOpenModalId(id || null);
    }
  };


  return (
    <div>
      <div className={`${isOpen ? 'blur-sm' : ''}`}>
        <NavBar handleClick={handleClick} openModalId={openModalId} />
        <HeaderVideo />
        <Services
          info={seviceInfo}
          openModalId={openModalId}
          handleServiceModal={handleServiceModal}
        />
        <RunningLine />
        <AboutUs />
        <Benefits info={benefitsInfo} />
        <Cases info={casesInfo} />
        <MyForm />
        <Footer/>
      </div>
      <Burger isOpen={isOpen} handleClick={handleClick} />
    </div>
  );
}
