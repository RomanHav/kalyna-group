'use client'
import { useState } from "react";
import NavBar from "./components/NavBar";
import HeaderVideo from "./components/HeaderVideo";
import Services from "./components/Services";
import Burger from "./components/Burger";
import seviceInfo from '../../serviceInfo.json'

export default function App() {

    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

  return (
    <>
    <div className={`${isOpen ? "blur-sm" : ""}`}>
      <NavBar handleClick={handleClick} />
      <HeaderVideo />
      <Services info={seviceInfo} />
    </div>
    <Burger isOpen={isOpen} handleClick={handleClick}/>
    </>
    
  );
}
