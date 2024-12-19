'use client';
import CasesSecondPart from './CasesSecondPart';
import Title from './Title';
import React, { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';
import CasesModal from '@/app/components/CasesModal';

interface CasesInfo {
  id: number;
  title: string;
  src: string;
  span: string;
  background: string;
  href: string;
  logo: string;
  logoDescr: string;

  siteImage: string;
  description: string;
}

interface CasesProps {
  info: CasesInfo[];
}

const CasesSecond: React.FC<CasesProps> = ({ info }) => {
  const [openModalId, setOpenModalId] = useState<number | null>(null);
  const [items, setItems] = useState<CasesInfo[]>(info);
  const [activeBlock, setActiveBlock] = useState<number | null>(null);
  const [overlayStates, setOverlayStates] = useState<{ [id: number]: boolean }>(
    {}
  );

  const handleClick = (id: number) => {
    if (activeBlock === id) {
      setOverlayStates(prev => ({ ...prev, [id]: false }));
      setActiveBlock(null);
      setItems(info);
      setOpenModalId(null);
    } else {
      const clickedItem = items.find(item => item.id === id);
      const otherItems = items.filter(item => item.id !== id);

      if (clickedItem) {
        setOverlayStates(prev => ({ ...prev, [id]: true }));
        setItems([clickedItem, ...otherItems]);
        setActiveBlock(id);
        setOpenModalId(id);
      }
    }
  };

  const transitions = useTransition(items, {
    config: { tension: 380, precision: 0, friction: 100, duration: 2000 },
    from: { transform: 'translate3d(0,0,0)', opacity: 0 },
    keys: item => item.id,
    enter: (item, index) => ({
      transform: `translate3d(${index}px, 0, 0)`,
      opacity: 1,
    }),
    update: (item, index) => ({
      transform: `translate3d(${index}px, 0, 0)`,
      opacity: 1,
    }),
    leave: { transform: 'translate3d(0,0,0)', opacity: 0 },
  });

  return (
    <>
      <div className="relative contain-paint">
        <Title
          id="cases"
          title="Cases"
          className={'lg:px-24 px-[45px] relative inset-y-20'}
        />
        <div className="w-full flex mt-32 relative">
          {transitions((style, item) => (
            <animated.div
              key={item.id}
              className={`${item.background} bg-cover w-1/4`}
              style={{ ...style }}
            >
              <CasesSecondPart
                id={item.id}
                title={item.title}
                logo={item.logo}
                handleCaseModal={() => handleClick(item.id)}
                showOverlay={overlayStates[item.id]}
              />
            </animated.div>
          ))}
          {items.map(item => (
            <div key={item.id}>
              <CasesModal
                background={item.background}
                span={item.span}
                src={item.src}
                href={item.href}
                title={item.title}

                siteImage={item.siteImage}
                description={item.description}
                logoDescr={item.logoDescr}
                id={item.id}
                handleCaseModal={() => handleClick(item.id)}
                isOpen={openModalId === item.id}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CasesSecond;
