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
    document.body.style.overflow = click ? 'auto' : 'hidden';
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
      <video
        className={`w-[250px] h-[250px] md:w-[350px] md:h-[350px]`}
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src={'/starting-loader1.mov'}
          type={'video/mp4; codecs="hvc1"'}
        />
      </video>
      <video
        className={`w-[250px] h-[250px] md:w-[350px] md:h-[350px]`}
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src={'/starting-loader2.mov'}
          type={'video/mp4; codecs="hvc1"'}
        />
      </video>
      <Services info={seviceInfo} />
      <RunningLine />
      <Benefits info={benefitsInfo} />
      <CasesSecond
        handleContactModal={handleOpen}
        info={casesInfo}
        isMobile={isMobile}
      />
      <FormSecond />
      {click && <FormSecond isModal={click} handleClose={handleOpen} />}
    </>
  );
}
