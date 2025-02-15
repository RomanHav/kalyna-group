'use client';

import steps from '../../../../mainPageInfo/steps.json';
import Steps from './Steps';
import React, { useEffect, useState } from 'react';
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
import { IoClose } from 'react-icons/io5';
import {
  selectSubmitError,
  selectSubmitLoading,
  selectSubmitSuccess,
} from '@/app/redux/formValues/selectors';
import Success from '@/app/components/StepsForm/Succes';

interface FormProps {
  isModal?: boolean;
  handleClose?: () => void;
}

const _renderStepContent = (
  id: number,
  isModal: boolean,
  error: boolean,
  activeStep: {
    id?: number;
    name?: string;
    image?: string;
    title: string;
    description: string;
  }
) => {
  switch (id) {
    case 1:
      return (
        <StepFirst
          isModal={isModal}
          title={activeStep.title}
          description={activeStep.description}
        />
      );
    case 2:
      return (
        <StepSecond
          isModal={isModal}
          title={activeStep.title}
          description={activeStep.description}
          error={error}
        />
      );
    case 3:
      return (
        <StepThird
          isModal={isModal}
          title={activeStep.title}
          description={activeStep.description}
        />
      );
    case 4:
      return (
        <StepFourth
          isModal={isModal}
          title={activeStep.title}
          description={activeStep.description}
        />
      );
    case 5:
      return (
        <StepFifth
          isModal={isModal}
          title={activeStep.title}
          description={activeStep.description}
        />
      );
    default:
      return <NotFound />;
  }
};

const FormSecond: React.FC<FormProps> = ({ isModal, handleClose }) => {
  const dispatch = useDispatch<AppDispatch>();
  const countryName = useSelector(selectCountryName);
  const [activeId, setActiveId] = useState<number>(1);
  const [error, setError] = useState<boolean>(false);
  const success = useSelector(selectSubmitSuccess);
  // const [success, setSuccess] = useState(true);
  const isLoading = useSelector(selectSubmitLoading);
  const requestError = useSelector(selectSubmitError);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    dispatch(fetchLocation());
    setIsMobile(window.innerWidth <= 768);
  }, [dispatch]);

  const savedValues =
    typeof window !== 'undefined'
      ? JSON.parse(localStorage.getItem('values') || '{}')
      : {};

  const [initialFormValues] = useState({
    ...InitialValues,
    ...savedValues,
  });

  const handleSubmit = (values, actions) => {
    actions.setFieldValue('location', countryName);

    if (typeof window !== 'undefined') {
      localStorage.setItem('values', JSON.stringify(values));
    }

    if (activeId === 2 && (!values.services || values.services.length === 0)) {
      setError(true);
      actions.setSubmitting(false);
      return;
    }

    setError(false);
    if (activeId !== steps.length) {
      setActiveId(prev => prev + 1);
      actions.setSubmitting(false);
    } else {
      dispatch(submitForm(values));

      if (typeof window !== 'undefined') {
        localStorage.removeItem('values');
        localStorage.removeItem('budget');
        localStorage.removeItem('services');
      }
      actions.resetForm();
    }
  };

  const handleDownId = () => {
    setActiveId(prev => prev - 1);
  };

  const step = steps.find(step => step.id === activeId);

  return (
    <div
      className={`${isModal ? 'w-full h-screen top-0 fixed z-[9999] bg-[#0D1816]/60 transition-all backdrop-blur-md duration-300' : 'z-20'}`}
      data-lenis-prevent={isModal}
    >
      <div
        className={`${isModal ? 'absolute w-[340px] md:w-[720px] lg:w-[770px] h-[660px] flex justify-center rounded-2xl top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-8' : 'relative w-full py-8 md:py-10 lg:pt-28 px-[45px] lg:px-24'} contain-paint text-white bg-test bg-center bg-cover`}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-black/90"></div>

        {isModal && !success && (
          <button
            className="absolute z-10 top-2 right-2 md:top-4 md:right-4 text-white flex justify-center items-center p-2"
            onClick={handleClose}
          >
            <IoClose size={isMobile ? 28 : 32} />
          </button>
        )}

        <div className="relative w-full">
          <div
            className={`flex flex-col w-full mb-14 ${isModal ? 'items-center' : 'items-start'}`}
          >
            <h2 className="uppercase text-[32px] lg:text-[48px] mb-3">
              {isModal ? 'Contact ' : 'Get in touch with us in a '}
              <span className="bg-gradient-to-r from-custom-green to-custom-second-green bg-clip-text text-transparent">
                {isModal ? 'Us' : 'few easy steps'}
              </span>
            </h2>
            {!isModal && (
              <span className="mb-3 lg:mb-11 text-lg lg:text-2xl opacity-60">
                Follow the simple 5 steps to complete your mapping
              </span>
            )}
            <div
              className={`h-[1px] lg:h-[2px] bg-[#C0FFD8] ${isModal ? 'w-[70%] md:w-[40%] lg:w-[70%]' : 'w-full'}`}
            ></div>
          </div>

          {success ? (
            <Success handleClose={handleClose} isModal={isModal} />
          ) : (
            <div className="flex flex-col lg:flex-row justify-between">
              <div
                className={`${isModal ? 'hidden' : 'flex'} relative flex-col lg:flex-row lg:gap-12 min-[1440px]:gap-0 lg:justify-end xl:justify-around w-full lg:w-1/4`}
              >
                <ul className="flex lg:flex-col justify-start items-center lg:items-end gap-[16px] md:gap-10 pb-5 lg:gap-10 lg:pb-40">
                  {steps.map(step => (
                    <li key={step.id}>
                      <Steps
                        name={step.name}
                        activeId={activeId}
                        id={step.id}
                        image={step.image}
                      />
                    </li>
                  ))}
                </ul>
                <ProgressLine activeId={activeId} />
              </div>

              <div className={`${isModal ? 'w-full' : 'w-full lg:w-2/3'}`}>
                <span className="opacity-70 text-base">
                  Step {activeId} / {steps.length}
                </span>
                <Formik
                  initialValues={initialFormValues}
                  onSubmit={handleSubmit}
                  validateOnMount
                >
                  {({ isValid }) => (
                    <Form>
                      <div
                        className={`${isModal ? 'mt-2 mb-8 lg:mb-16' : 'mt-2 mb-16'}`}
                      >
                        {_renderStepContent(activeId, isModal, error, step)}
                      </div>
                      {!success && !isLoading && (
                        <span className="text-red-500">{requestError}</span>
                      )}
                      <div className="flex w-full justify-end gap-5">
                        <button
                          type="button"
                          disabled={activeId === 1}
                          onClick={handleDownId}
                          className="disabled:text-white/50 px-7 py-2.5 border-2 border-white rounded-2xl text-lg"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="px-7 py-2.5 bg-[#38A963] rounded-2xl text-lg"
                          disabled={!isValid || isLoading}
                        >
                          {isLoading
                            ? 'Processing...'
                            : activeId === steps.length
                              ? isMobile
                                ? 'Send'
                                : 'Complete Submission'
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
    </div>
  );
};

export default FormSecond;
