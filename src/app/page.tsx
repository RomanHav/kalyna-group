'use client';
import { useEffect} from 'react';
import HeaderVideo from './components/HeaderVideo/HeaderVideo';
import Services from './components/Services/Services';
import RunningLine from './components/RunningLine';
import Benefits from './components/Benefits/Benefits';
import seviceInfo from '../../mainPageInfo/serviceInfo.json';
import benefitsInfo from '../../mainPageInfo/benefitsInfo.json';
import casesInfo from '../app/casesInfo.json';
import { Provider } from 'react-redux';
import { store } from '@/app/redux/store';
import CasesSecond from './components/Cases/CasesSecond';
import Lenis from 'lenis';
// import MyForm from '@/app/components/Form';
import FormSecond from '@/app/components/StepsForm/FormSecond';

export default function App() {
  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (!isMobile) {
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
  }, []);

  return (
    <Provider store={store}>
      <HeaderVideo />
      <Services
        info={seviceInfo}
      />
      <RunningLine />
      <Benefits info={benefitsInfo} />
      <CasesSecond info={casesInfo} />
      {/*<MyForm />*/}
      <FormSecond />
    </Provider>
  );
}