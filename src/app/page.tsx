'use client'
import { useState } from "react";
import NavBar from "./components/NavBar";
import HeaderVideo from "./components/HeaderVideo";
import Services from "./components/Services";
import Burger from "./components/Burger";
import RunningLine from "./components/RunningLine";
import AboutUs from "./components/AboutUs";
import Benefits from "./components/Benefits";

import seviceInfo from '../../serviceInfo.json'
import benefitsInfo from '../../benefitsInfo.json'
import ServiceModal from "./components/ServiceModal";

export default function App() {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

  return (
    <div>
    <div className={`${isOpen ? "blur-sm" : ""}`}>
      <NavBar handleClick={handleClick} />
      <HeaderVideo />
        <Services info={seviceInfo} />
        <RunningLine />
        <AboutUs />
        <Benefits info={benefitsInfo} />
    </div>
      <Burger isOpen={isOpen} handleClick={handleClick} />
      <ServiceModal isOpen={isOpen} handleClick={handleClick}/>
    </div>
    
  );
}
