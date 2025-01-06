'use client';
import steps from '../../../../steps.json';
import Steps from './Steps';
import { useState } from 'react';
import StepFirst from './StepFirst';
import StepSecond from './StepSecond';
import StepThird from './StepThird';
import StepFourth from './StepFourth';
import StepFifth from './StepFifth';
import NotFound from 'next/dist/client/components/not-found-error';
import ProgressLine from '@/app/components/StepsForm/ProgressLine';
import { Formik, Form } from 'formik';
import initialValues from '../Form/FormInitialValues';

function _renderStepContent(
  id: number,
  activeStep: {
    id?: number;
    name?: string;
    image?: string;
    title: string;
    description: string;
  }
) {
  switch (id) {
    case 1:
      return (
        <StepFirst
          title={activeStep.title}
          description={activeStep.description}
        />
      );
    case 2:
      return (
        <StepSecond
          title={activeStep.title}
          description={activeStep.description}
        />
      );
    case 3:
      return (
        <StepThird
          title={activeStep.title}
          description={activeStep.description}
        />
      );
    case 4:
      return (
        <StepFourth
          title={activeStep.title}
          description={activeStep.description}
        />
      );
    case 5:
      return (
        <StepFifth
          title={activeStep.title}
          description={activeStep.description}
        />
      );
    default:
      return <NotFound />;
  }
}

const FormSecond = () => {
  const [activeId, setActiveId] = useState<number>(1);

  const savedValues = JSON.parse(localStorage.getItem('values') || '{}');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [initialFormValues, setInitialFormValues] = useState({
    ...initialValues,
    ...savedValues,
  });

  const handleSubmit = (values, actions) => {
    localStorage.setItem('values', JSON.stringify(values));

    if (activeId !== steps.length) {
      setActiveId(activeId + 1);
      actions.setSubmitting(false);
      actions.setTouched({});
    } else {
      console.log(values);
    }
  };

  const handleDownId = () => {
    setActiveId(activeId - 1);
  };

  const partStep = (id: number) => steps.find(step => step.id === id);
  const step = partStep(activeId);

  return (
    <div className={`relative text-white z-20 px-24 pt-28 bg-test bg-center bg-cover`}>
      <div className={`absolute top-0 left-0 w-full h-full bg-black opacity-30`}></div>
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
                    <Steps name={step.name} activeId={activeId} id={step.id} image={step.image} />
                  </li>
                );
              })}
            </ul>
            <ProgressLine activeId={activeId} />
          </div>
          <div className={`w-2/3`}>
            <span className={`opacity-70 text-base`}>
              Step {activeId} / {steps.length}
            </span>
            <Formik initialValues={initialFormValues} onSubmit={handleSubmit}>
              {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
              {({ values, handleChange }) => (
                <Form>
                  <div className={`mt-2 mb-16`}>
                    {_renderStepContent(activeId, step)}
                  </div>
                  <div className={`flex w-full justify-end gap-5`}>
                    <button
                      type='button'
                      disabled={activeId === 1}
                      onClick={handleDownId}
                      className={`disabled:border-white/50 disabled:text-white/50 px-7 py-2.5 bg-none border-2 border-white rounded-2xl text-lg`}
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className={`px-7 py-2.5 bg-[#38A963] rounded-2xl text-lg`}
                    >
                      {activeId === steps.length ? 'Complete Submission' : 'Next Step'}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSecond;
