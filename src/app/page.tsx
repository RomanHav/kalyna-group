'use client';
import { useState } from 'react';

import HeaderVideo from './components/HeaderVideo/HeaderVideo';
import Services from './components/Services/Services';

import RunningLine from './components/RunningLine';
// import AboutUs from './components/AboutUs/AboutUs';
import Benefits from './components/Benefits/Benefits';
// import Cases from './components/Cases';
import MyForm from './components/Form';

import seviceInfo from '../../serviceInfo.json';
import benefitsInfo from '../../benefitsInfo.json';
import casesInfo from '../app/casesInfo.json';
import { Provider } from 'react-redux';
import { store } from '@/app/redux/store';
import CasesSecond from './components/CasesSecond';

export default function App() {
  const [openModalId, setOpenModalId] = useState<number | null>(null);

  const handleServiceModal = (id: number | undefined) => {
    if (openModalId === id) {
      setOpenModalId(null);
    } else {
      setOpenModalId(id || null);
    }
  };

  return (
    <Provider store={store}>
      <div>
        <HeaderVideo />
        <Services
          info={seviceInfo}
          openModalId={openModalId}
          handleServiceModal={handleServiceModal}
        />
        <RunningLine />
        {/*<AboutUs />*/}
        <Benefits info={benefitsInfo} />
        <CasesSecond
          info={casesInfo}
          openModalId={openModalId}
          handleServiceModal={handleServiceModal}
        />

        {/* <Cases info={casesInfo} /> */}
        <MyForm />
      </div>
    </Provider>
  );
}
