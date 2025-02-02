'use client';
import steps from '../../../../mainPageInfo/steps.json';
import Steps from './Steps';
import { useEffect, useState } from 'react';
import StepFirst from './StepFirst';
import StepSecond from './StepSecond';
import StepThird from './StepThird';
import StepFourth from './StepFourth';
import StepFifth from './StepFifth';
import NotFound from 'next/dist/client/components/not-found-error';
import ProgressLine from '@/app/components/StepsForm/ProgressLine';
import { Formik, Form } from 'formik';
import InitialValues from '../Form/FormInitialValues';
import { useDispatch, useSelector } from 'react-redux';
import { submitForm } from '@/app/redux/formValues/operations';
import { AppDispatch } from '@/app/redux/store';
import { selectCountryName } from '@/app/redux/location/selectors';
import { fetchLocation } from '@/app/redux/location/operations';

import {
  selectSubmitError,
  selectSubmitLoading,
  selectSubmitSuccess,
} from '@/app/redux/formValues/selectors';
import Success from '@/app/components/StepsForm/Succes';

function _renderStepContent(
  id: number,
  error: boolean,
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
          error={error}
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
  const dispatch = useDispatch<AppDispatch>();
  const countryName = useSelector(selectCountryName);
  const [activeId, setActiveId] = useState<number>(1);

  const [error, setError] = useState<boolean>(false);
  const success = useSelector(selectSubmitSuccess);
  const isLoading = useSelector(selectSubmitLoading);
  const requestError = useSelector(selectSubmitError);
  const savedValues =
    typeof window !== 'undefined'
      ? JSON.parse(window.localStorage.getItem('values'))
      : {};
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [initialFormValues, setInitialFormValues] = useState({
    ...InitialValues,
    ...savedValues,
  });
  useEffect(() => {
    dispatch(fetchLocation());
  }, [dispatch]);
  const handleSubmit = (values, actions) => {
    values.location = countryName;
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('values', JSON.stringify(values));
    }
    if (activeId === 2 && (!values.services || values.services.length === 0)) {
      setError(true);
      actions.setSubmitting(false);
      return;
    }

    setError(false);
    if (activeId !== steps.length) {
      setActiveId(activeId + 1);
      actions.setSubmitting(false);
    } else {
      dispatch(submitForm(values));

      if (typeof window !== undefined) {
        localStorage.removeItem('values');
        localStorage.removeItem('budget');
        localStorage.removeItem('services');
      }
      actions.resetForm();
    }
  };

  const handleDownId = () => {
    setActiveId(activeId - 1);
  };

  const partStep = (id: number) => steps.find(step => step.id === id);
  const step = partStep(activeId);

  return (
    <div
      className={`relative contain-paint text-white z-20 px-[45px] lg:px-24 py-8 md:py-10 lg:pt-28 bg-test bg-center bg-cover`}
    >
      <div className={`absolute top-0 left-0 w-full h-full bg-black/90`}></div>
      <div className={`relative`}>
        <div className={`flex flex-col w-full mb-14`}>
          <h2 className={`uppercase text-[32px] lg:text-[48px] mb-3`}>
            Get in touch with us in a{' '}
            <span
              className={`bg-gradient-to-r from-custom-green to-custom-second-green bg-clip-text text-transparent`}
            >
              few easy steps
            </span>
          </h2>
          <span className={`mb-3 lg:mb-11 text-lg lg:text-2xl opacity-60`}>
            Follow the simple 5 steps to complete your mapping
          </span>
          <div className={`w-full h-[1px] lg:h-[2px] bg-[#C0FFD8]`}></div>
        </div>
        {success ? (
          <Success />
        ) : (
          <div className={`flex flex-col lg:flex-row justify-between`}>
            <div className={`relative flex flex-col justify-center lg:flex-row lg:gap-12 min-[1440px]:gap-0 lg:justify-end xl:justify-around w-full lg:w-1/4`}>
              <ul className={`flex lg:flex-col justify-start items-center lg:items-end gap-[18px] md:gap-10 lg:gap-10 pb-20 lg:pb-40`}>
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
              <ProgressLine activeId={activeId} />
            </div>
            <div className={`w-full lg:w-2/3`}>
              <span className={`opacity-70 text-base`}>
                Step {activeId} / {steps.length}
              </span>
              <Formik
                initialValues={initialFormValues}
                onSubmit={handleSubmit}
                validateOnMount
              >
                {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
                {({ isValid, values, handleChange }) => (
                  <Form>
                    <div className={`mt-2 mb-16`}>
                      {_renderStepContent(activeId, error, step)}
                    </div>
                    {!success && !isLoading && (
                      <span className={'text-red-500'}>{requestError}</span>
                    )}
                    <div className={`flex w-full justify-end gap-5`}>
                      <button
                        type="button"
                        disabled={activeId === 1}
                        onClick={handleDownId}
                        className={`disabled:border-white/50 disabled:text-white/50 px-7 py-2.5 bg-none border-2 border-white rounded-2xl text-lg`}
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className={`px-7 py-2.5 bg-[#38A963] rounded-2xl text-lg`}
                        disabled={!isValid || isLoading}
                      >
                        {isLoading
                          ? 'Processing...'
                          : activeId === steps.length
                            ? 'Complete Submission'
                            : 'Next Step'}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormSecond;
