'use client';
import { useEffect, useState } from 'react';
import HeaderVideo from './components/HeaderVideo/HeaderVideo';
import Services from './components/Services/Services';
import RunningLine from './components/RunningLine';
import Benefits from './components/Benefits/Benefits';
import seviceInfo from '../../mainPageInfo/serviceInfo.json';
import benefitsInfo from '../../mainPageInfo/benefitsInfo.json';
import casesInfo from '../app/casesInfo.json';
import CasesSecond from './components/Cases/CasesSecond';
import Lenis from 'lenis';
import FormSecond from '@/app/components/StepsForm/FormSecond';

export default function App() {
  const [isMobile, setIsMobile] = useState(false);
  const [click, setClick] = useState(false);
  const handleOpen = () => {
    setClick(!click);
    if (click) {
      const lenis = new Lenis();
      return () => {
        lenis.destroy();
      };
    }
  };
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);

    if (!isMobile || click) {
      const lenis = new Lenis();

      function raf(time: number) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
      };
    }
  }, [isMobile, click]);

  return (
    <>
      <HeaderVideo handleOpen={handleOpen} />
      <Services info={seviceInfo} />
      <RunningLine />
      <Benefits info={benefitsInfo} />
      <CasesSecond info={casesInfo} isMobile={isMobile} />
      <FormSecond />
      {click && <FormSecond isModal={click} handleClose={handleOpen} />}
    </>
  );
}
