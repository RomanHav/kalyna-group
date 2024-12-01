"use client"
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Field, Form, Formik } from 'formik';
import { useId, useState, useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLocation } from '@/app/redux/location/operations';
import { submitForm } from '@/app/redux/formValues/operations'; // Ensure the path is correct
import { selectCountryName, selectLocationLoading } from '@/app/redux/location/selectors';
import { selectSubmitError, selectSubmitLoading, selectSubmitSuccess } from '@/app/redux/formValues/selectors'; // Ensure the path is correct
import { AppDispatch } from '@/app/redux/store';

interface ContactUsModalProps {
  click: boolean;
  handleOpen: () => void;
}

const ContactUsModal: React.FC<ContactUsModalProps> = ({ click, handleOpen }) => {
  const dispatch = useDispatch<AppDispatch>();
  const countryName = useSelector(selectCountryName);
  const locationLoading = useSelector(selectLocationLoading);
  const submitLoading = useSelector(selectSubmitLoading);
  const submitSuccess = useSelector(selectSubmitSuccess);
  const submitError = useSelector(selectSubmitError);

  useEffect(() => {
    dispatch(fetchLocation());
  }, [dispatch]);

  const id = useId();
  const [interested, setInterested] = useState('');

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Too Short!').max(30, 'Too Long!').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    phoneNumber: Yup.string().min(10, 'Too Short!'),
    selectOption: Yup.string().required('Please select an option'),
    message: Yup.string(),
    location: Yup.string(),
  });

  if (locationLoading) {
    return <div>Loading location...</div>;
  }

  if (!click) return null;

  return (
    <div className="fixed inset-0 z-[60] w-full h-full backdrop-blur-md">
      <div className="absolute rounded-3xl bg-test bg-center bg-cover text-white w-[90%] h-[660px] top-[10px] left-[5%] lg:top-1/2 lg:left-1/2 lg:translate-x-[-50%] lg:translate-y-[-50%] lg:w-[60%]">
        <div className="absolute inset-0 w-full h-full rounded-3xl bg-black/30"></div>
        <div className="relative z-[9999] gap-5 md:gap-3 px-6 py-8 md:py-6 flex flex-col">
          <IoMdClose
            size={35}
            onClick={handleOpen}
            className="absolute w-7 top-5 right-5 z-20 fill-white md:w-12 md:right-6 md:top-5 cursor-pointer"
          />
          <h2 className="text-center uppercase text-2xl">Contact Us</h2>
          <Formik
            initialValues={{
              name: '',
              email: '',
              phoneNumber: '',
              selectOption: '',
              message: '',
              location: countryName,
            }}
            enableReinitialize
            validationSchema={FeedbackSchema}
            onSubmit={(values, actions) => {
              dispatch(submitForm(values));
              actions.resetForm();
              handleOpen();
            }}
          >
            {({ setFieldValue, errors, touched, isSubmitting }) => (
              <Form className="flex flex-col gap-5 md:gap-3 bg-inherit">
                <div className="flex flex-col gap-2">
                  <label className="text-base" htmlFor={`${id}-name`}>
                    Name: <span className="text-red-600">*</span>
                  </label>
                  <Field
                    className="w-full bg-inherit border-white rounded-xl border py-1 md:py-3 px-3"
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
                    className="w-full rounded-xl bg-inherit border-white border py-1 md:py-3 px-3"
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
                  <Field
                    className="w-full rounded-xl bg-inherit border-white border py-1 md:py-3 px-3"
                    type="text"
                    name="phoneNumber"
                    placeholder="+380663056524"
                    id={`${id}-phone`}
                  />
                  {errors.phoneNumber && touched.phoneNumber && (
                    <div className="text-red-500">{errors.phoneNumber}</div>
                  )}
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-base">
                    What are you interested in: <span className="text-red-600">*</span>
                  </label>
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <MenuButton className="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 md:py-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        {interested || 'Select an option'}
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
                        ].map((option) => (
                          <MenuItem key={option}>
                            {({ active }) => (
                              <p
                                onClick={() => {
                                  setInterested(option);
                                  setFieldValue('selectOption', option);
                                }}
                                className={`block px-4 py-2 text-sm ${
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
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
                <div className="flex flex-col gap-2 lg:mb-3">
                  <label className="text-base" htmlFor={`${id}-textarea`}>
                    Put some details here:
                  </label>
                  <Field
                    className="w-full rounded-xl bg-inherit border-white border p-3"
                    type="text"
                    name="message"
                    as="textarea"
                    rows="3"
                    id={`${id}-textarea`}
                    placeholder="Message"
                  />
                  {errors.message && touched.message && (
                    <div className="text-red-500">{errors.message}</div>
                  )}
                </div>
                <button
                  className="bg-custom-button text-white py-2 px-6 rounded-2xl border border-custom-button uppercase text-xl font-semibold hover:bg-white hover:text-black hover:border hover:border-black hover:duration-700 lg:w-[200px] lg:rounded-xl"
                  type="submit"
                  disabled={isSubmitting || submitLoading}
                >
                  {submitLoading ? 'Submitting...' : 'Send message'}
                </button>
                {submitSuccess && <div>Form submitted successfully!</div>}
                {submitError && <div>Error: {submitError}</div>}
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ContactUsModal;
