// app/components/MyForm.tsx
'use client';

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Title from './Title';
import { useEffect, useId, useState } from 'react';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLocation } from '@/app/redux/location/operations';
import { submitForm } from '@/app/redux/formValues/operations';
import {
  selectCountryCode,
  selectCountryName,
  selectLocationLoading,
} from '@/app/redux/location/selectors';
import {
  selectSubmitError,
  selectSubmitLoading,
  selectSubmitSuccess,
} from '@/app/redux/formValues/selectors';
import { AppDispatch } from '@/app/redux/store';

interface FormValues {
  name: string;
  email: string;
  phoneNumber: string;
  selectOption: string;
  message: string;
  location: string;
}

const MyForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const countryName = useSelector(selectCountryName);
  const countryCode = useSelector(selectCountryCode);

  const locationLoading = useSelector(selectLocationLoading);
  const submitLoading = useSelector(selectSubmitLoading);
  const submitSuccess = useSelector(selectSubmitSuccess);
  const submitError = useSelector(selectSubmitError);

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phoneNumber: Yup.string().min(10, 'Too Short!'),
    selectOption: Yup.string().required('Required'),
    message: Yup.string(),
  });

  useEffect(() => {
    dispatch(fetchLocation());
  }, [dispatch]);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 1024px)').matches);
    };

    // Set initial value based on screen width
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const id = useId();

  if (locationLoading) {
    return <div>Loading location...</div>;
  }

  const initialValues: FormValues = {
    name: '',
    email: '',
    phoneNumber: '',
    selectOption: '',
    message: '',
    location: countryName, // Using the location from Redux
  };

  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    dispatch(submitForm(values));
    console.log(values);
    actions.resetForm();
  };

  return (
    <div className="flex flex-col my-8 md:px-[45px] relative gap-10 lg:px-24 lg:my-20">
      <div className="px-[45px] md:px-0">
        <Title title="Get your desired website in a few steps" />
      </div>
      <div className="px-3 md:px-0 lg:flex lg:bg-white lg:justify-between lg:rounded-3xl lg:p-5">
        <Formik
          initialValues={initialValues}
          validationSchema={FeedbackSchema}
          onSubmit={handleSubmit}
          enableReinitialize // Reinitialize when location changes
        >
          {({ setFieldValue, values, errors, touched }) => (
            <Form className="flex flex-col gap-5 bg-white rounded-3xl p-6 md:p-10 lg:bg-custom-form lg:w-full xl:w-[560px]">
              <div className="flex flex-col gap-2">
                <label className="text-base" htmlFor={`${id}-name`}>
                  Name: <span className="text-red-600">*</span>
                </label>
                <Field
                  className="w-full rounded-xl border-black border py-2 md:py-3 px-3"
                  type="text"
                  name="name"
                  placeholder="John"
                  id={`${id}-name`}
                />
                {errors.name && touched.name && (
                  <div className="text-red-500">{errors.name}</div>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-base" htmlFor={`${id}-email`}>
                  Email: <span className="text-red-600">*</span>
                </label>
                <Field
                  className="w-full rounded-xl border-black border py-2 md:py-3 px-3"
                  type="email"
                  name="email"
                  placeholder="example@info.com"
                  id={`${id}-email`}
                />
                {errors.email && touched.email && (
                  <div className="text-red-500">{errors.email}</div>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-base" htmlFor={`${id}-phone`}>
                  Phone:
                </label>
                <PhoneInput
                  country={countryCode.toLowerCase()}
                  value={values.phoneNumber}
                  onChange={phoneNumber =>
                    setFieldValue('phoneNumber', `+${phoneNumber}`)
                  }
                  inputProps={{
                    name: 'phoneNumber',
                    required: true,
                  }}
                  inputStyle={{
                    width: '100%',
                    paddingLeft: '50px',
                    borderRadius: '8px',
                    height: '42px',
                  }}
                />
                {errors.phoneNumber && touched.phoneNumber && (
                  <div className="text-red-500">{errors.phoneNumber}</div>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-base" htmlFor={`${id}-choose`}>
                  What are you interested in:{' '}
                  <span className="text-red-600">*</span>
                </label>
                <Menu
                  id={`${id}-choose`}
                  as="div"
                  className="relative inline-block text-left"
                >
                  <div>
                    <MenuButton className="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 md:py-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                      {values.selectOption || 'Select an option'}
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="-mr-1 h-5 w-5 text-gray-400"
                      />
                    </MenuButton>
                  </div>

                  <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {[
                        'Landing Page',
                        'E-Commerce',
                        'UI/UX Design',
                        'Business Website',
                        'CRM System',
                        '3D Design',
                      ].map(option => (
                        <MenuItem key={option}>
                          {({ active }) => (
                            <p
                              onClick={() =>
                                setFieldValue('selectOption', option)
                              }
                              className={`block px-4 py-2 text-sm ${
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700'
                              }`}
                            >
                              {option}
                            </p>
                          )}
                        </MenuItem>
                      ))}
                    </div>
                  </MenuItems>
                </Menu>
                {errors.selectOption && touched.selectOption && (
                  <div className="text-red-500">{errors.selectOption}</div>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-base" htmlFor={`${id}-textarea`}>
                  Put some details here:
                </label>
                <Field
                  className="w-full rounded-xl border-black border p-3"
                  type="text"
                  name="message"
                  as="textarea"
                  rows="5"
                  id={`${id}-textarea`}
                  placeholder="Message"
                />
                {errors.message && touched.message && (
                  <div className="text-red-500">{errors.message}</div>
                )}
              </div>
              <button
                className="bg-custom-button text-white py-2 px-6 rounded-2xl uppercase text-xl border border-custom-button font-semibold hover:bg-white hover:text-black hover:border hover:border-black hover:duration-700"
                type="submit"
                disabled={submitLoading}
              >
                {submitLoading ? 'Submitting...' : 'Send Message'}
              </button>
              {submitSuccess && <div>Form submitted successfully!</div>}
              {submitError && <div>Error: {submitError}</div>}
            </Form>
          )}
        </Formik>
        {!isMobile && (
          <div className="bg-bkgForm w-[700px] rounded-3xl relative p-10 flex items-end text-white">
            <div className="absolute inset-0 z-0 bg-[#000] opacity-50 rounded-3xl"></div>
            <div className="absolute z-10 flex flex-col">
              <span className="text-2xl mb-5">
                The best websites aren’t just aesthetically pleasing;
                <br /> they’re a blend of form and function that delivers a
                seamless experience.
              </span>
              <div className="flex flex-col gap-2">
                <span className="text-xl font-semibold">- Roman Havrylov</span>
                <span className="text-xl">
                  Full Stack Developer KALYNA GROUP
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyForm;
