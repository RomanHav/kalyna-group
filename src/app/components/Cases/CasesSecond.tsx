'use client';
import CasesSecondPart from './CasesSecondPart';
import Title from '../Title';
import React, { useState, lazy, Suspense, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CasesModal = lazy(() => import('@/app/components/Cases/CasesModal'));

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
  isMobile?: boolean;
  handleContactModal?: () => void;
}

const CasesSecond: React.FC<CasesProps> = ({
  info,
  isMobile,
  handleContactModal,
}) => {
  const [openModalId, setOpenModalId] = useState<number | null>(null);
  const [items, setItems] = useState<CasesInfo[]>(info);
  const [activeBlock, setActiveBlock] = useState<number | null>(null);

  const [overlayStates, setOverlayStates] = useState<{ [id: number]: boolean }>(
    {}
  );
  const handleClick = (id: number) => {
    if (activeBlock === id) {
      setOpenModalId(null);
      if (isMobile) {
        document.body.style.overflow = 'auto';
      }
      setOverlayStates(prev => ({ ...prev, [id]: false }));
      setActiveBlock(null);
      setItems(info);
    } else {
      const clickedItem = items.find(item => item.id === id);
      const otherItems = items.filter(item => item.id !== id);

      if (clickedItem) {
        if (!isMobile) {
          setOverlayStates(prev => ({ ...prev, [id]: true }));
          setItems([clickedItem, ...otherItems]);
        }
        setActiveBlock(id);
        setOpenModalId(id);
        if (isMobile) {
          document.body.style.overflow = 'hidden';
        }
      }
    }
  };

  return (
    <div className="relative z-30 pt-10 bg-[#080808]">
      <div className="relative z-20">
        <Title
          id="cases"
          title="Cases"
          className="lg:px-24 px-[45px] relative z-10"
        />
        <div className="w-full flex flex-wrap mt-20 relative">
          <AnimatePresence>
            {items.map(item => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.1, ease: 'linear' }}
                className={`${item.background} ${item.id === 30 ? 'max-lg:bg-[0_-190px]' : ''} bg-cover w-full lg:w-1/4 duration-300`}
              >
                <MemoizedCasesSecondPart
                  id={item.id}
                  title={item.title}
                  logo={item.logo}
                  handleCaseModal={() => handleClick(item.id)}
                  showOverlay={overlayStates[item.id]}
                />
              </motion.div>
            ))}
          </AnimatePresence>
          {items.map(item => (
            <Suspense key={item.id} fallback={<div>Loading case...</div>}>
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
                handleContactModal={handleContactModal}
              />
            </Suspense>
          ))}
        </div>
      </div>
    </div>
  );
};

const MemoizedCasesSecondPart = memo(CasesSecondPart);

export default CasesSecond;
