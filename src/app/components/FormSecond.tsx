'use client';
import steps from '../../../steps.json';
import Steps from '@/app/components/Steps';
import { useState } from 'react';
import StepFirst from '@/app/components/StepFirst';
import StepSecond from '@/app/components/StepSecond';
import StepThird from '@/app/components/StepThird';
import StepFourth from '@/app/components/StepFourth';
import StepFifth from '@/app/components/StepFifth';

const FormSecond = () => {
  const [activeId, setActiveId] = useState<number>(1);

  const handleUpId = () => {
    setActiveId(activeId + 1);
  };

  const handleDownId = () => {
    setActiveId(activeId - 1);
  };

  const partStep = (id: number) => steps.find(step => step.id === id);

  const step = partStep(activeId);

  return (
    <div
      className={`relative text-white z-20 px-24 pt-28 bg-test bg-center bg-cover`}
    >
      <div
        className={`absolute top-0 left-0 w-full h-full bg-black opacity-30`}
      ></div>
      <div className={`relative`}>
        <div className={`flex flex-col w-full mb-14`}>
          <h2 className={`uppercase text-[48px] mb-3`}>
            Get in touch with us in a{' '}
            <span
              className={`bg-gradient-to-r from-custom-green to-custom-second-green bg-clip-text text-transparent`}
            >
              few easy steps
            </span>
          </h2>
          <span className={`mb-11 text-2xl opacity-60`}>
            Follow the simple 5 steps to complete your mapping
          </span>
          <div className={`w-full h-[2px] bg-[#C0FFD8]`}></div>
        </div>
        <div className={`flex justify-between`}>
          <div className={`flex justify-around w-1/4`}>
            <ul className={`flex flex-col gap-8 pb-40`}>
              {steps.map(step => {
                return (
                  <li key={step.id}>
                    <Steps
                      name={step.name}
                      activeId={activeId}
                      id={step.id}
                      image={step.image}
                    />
                  </li>
                );
              })}
            </ul>
            <div className={`flex items-center justify-end flex-col`}>
              <div
                className={`w-4 h-4 flex items-center justify-center rounded-full border-2 border-white`}
              >
                <div className={'w-2 h-2 rounded-full bg-white'}></div>
              </div>
              <div className={`w-[2px] h-[81px] bg-white`}></div>
              <div
                className={`w-4 h-4 rounded-full flex items-center justify-center border-2 border-white`}
              >
                {activeId > 1 ? (
                  <div className={`w-2 h-2 rounded-full bg-white`}></div>
                ) : (
                  ''
                )}
              </div>
              <div className={'w-[2px] h-[81px] bg-white'}></div>
              <div
                className={`w-4 h-4 flex items-center justify-center rounded-full border-2 border-white`}
              >
                {activeId > 2 ? (
                  <div className={`w-2 h-2 rounded-full bg-white`}></div>
                ) : (
                  ''
                )}
              </div>
              <div className={`w-[2px] h-[81px] bg-white`}></div>
              <div
                className={`w-4 h-4 flex items-center justify-center rounded-full border-2 border-white`}
              >
                {activeId > 3 ? (
                  <div className={`w-2 h-2 rounded-full bg-white`}></div>
                ) : (
                  ''
                )}
              </div>
              <div className={`w-[2px] h-[81px] bg-white`}></div>
              <div
                className={`w-4 h-4 flex items-center justify-center rounded-full border-2 border-white`}
              >
                {activeId > 4 ? (
                  <div className={`w-2 h-2 rounded-full bg-white`}></div>
                ) : (
                  ''
                )}
              </div>
              <div className={`w-[2px] h-[174px] bg-white`}></div>
            </div>
          </div>
          <div className={`w-2/3`}>
            <span className={`opacity-70 text-base`}>
              Step {activeId} / {steps.length}
            </span>
            <div className={`mt-2 mb-16`}>
              {activeId === 1 ? (
                <StepFirst title={step.title} description={step.description} />
              ) : (
                ''
              )}
              {activeId === 2 ? (
                <StepSecond title={step.title} description={step.description} />
              ) : (
                ''
              )}
              {activeId === 3 ? (
                <StepThird title={step.title} description={step.description} />
              ) : (
                ''
              )}
              {activeId === 4 ? (
                <StepFourth title={step.title} description={step.description} />
              ) : (
                ''
              )}
              {activeId === 5 ? (
                <StepFifth title={step.title} description={step.description} />
              ) : (
                ''
              )}
            </div>
            <div className={`flex gap-5`}>
              <button
                disabled={activeId === 1}
                onClick={handleDownId}
                className={`disabled:border-white/50 disabled:text-white/50 px-7 py-2.5 bg-none border-2 border-white rounded-2xl text-lg`}
              >
                Back
              </button>
              <button
                onClick={handleUpId}
                className={`px-7 py-2.5 bg-[#38A963] rounded-2xl text-lg`}
              >
                {activeId === steps.length
                  ? 'Complete Submission'
                  : 'Next Step'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSecond;
