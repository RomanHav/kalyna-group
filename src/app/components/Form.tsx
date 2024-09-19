import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import Title from './Title';
import { useEffect, useId, useState } from 'react';
import * as Yup from 'yup';
import axios from 'axios';

interface FormValues {
  namePerson: string;
  emailPerson: string;
  phonePerson: string;
  interested: string;
  message: string;
}

const MyForm: React.FC = () => {
  const FeedbackSchema = Yup.object().shape({
    namePerson: Yup.string()
      .min(2, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
    emailPerson: Yup.string().email('Invalid email').required('Required'),
    phonePerson: Yup.number().min(10, 'Too Short!'),
    interested: Yup.string().required(),
  });

  const [location, setLocation] = useState('');

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get('https://ipapi.co/json/');
        setLocation(response.data.country_code);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLocation();
  }, []);

  const initialValues: FormValues = {
    namePerson: '',
    emailPerson: '',
    phonePerson: '',
    interested: '',
    message: '',
  };

  const [interested, setInterested] = useState('');
  const id = useId();

  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <div className="flex flex-col my-8 px-[45px] relative gap-10">
      <div className="">
        <Title title="Get your desired website in a few steps" />
      </div>
      <Formik
        initialValues={{ ...initialValues, interested }}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        {({ setFieldValue, values }) => (
          <Form className="flex flex-col gap-5 bg-white rounded-3xl p-10">
            <div className="flex flex-col gap-2">
              <label className="text-base" htmlFor={`${id}-name`}>
                Name: <span className="text-red-600">*</span>
              </label>
              <Field
                className="w-full rounded-xl border-black border py-1 px-3"
                type="text"
                name="namePerson"
                placeholder="John"
                id={`${id}-name`}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-base" htmlFor={`${id}-email`}>
                Email: <span className="text-red-600">*</span>
              </label>
              <Field
                className="w-full rounded-xl border-black border py-1 px-3"
                type="email"
                name="emailPerson"
                placeholder="example@info.com"
                id={`${id}-email`}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-base" htmlFor={`${id}-phone`}>
                Phone:
              </label>
              <PhoneInput
                country={location.toLowerCase()}
                value={values.phonePerson}
                onChange={phonePerson => setFieldValue('phone', phonePerson)}
                inputProps={{
                  name: 'phone',
                  required: true,
                  autoFocus: true,
                }}
                inputStyle={{
                  width: '100%',
                  paddingLeft: '50px',
                  borderRadius: '8px',
                //   border: '1px solid black',
                }}
              />
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
                  <MenuButton className="inline-flex w-full justify-between gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    {interested || 'Select an option'}
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 h-5 w-5 text-gray-400"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <div className="py-1">
                    <MenuItem>
                      {({ active }) => (
                        <p
                          onClick={() => setInterested('Landing Page')}
                          className={`block px-4 py-2 text-sm ${
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700'
                          }`}
                        >
                          Landing Page
                        </p>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <p
                          onClick={() => setInterested('E-Commerce')}
                          className={`block px-4 py-2 text-sm ${
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700'
                          }`}
                        >
                          E-Commerce
                        </p>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <p
                          onClick={() => setInterested('UI/UX Design')}
                          className={`block px-4 py-2 text-sm ${
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700'
                          }`}
                        >
                          UI/UX Design
                        </p>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <p
                          onClick={() => setInterested('Business Website')}
                          className={`block px-4 py-2 text-sm ${
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700'
                          }`}
                        >
                          Business Website
                        </p>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <p
                          onClick={() => setInterested('CRM System')}
                          className={`block px-4 py-2 text-sm ${
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700'
                          }`}
                        >
                          CRM System
                        </p>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <p
                          onClick={() => setInterested('3D Design')}
                          className={`block px-4 py-2 text-sm ${
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700'
                          }`}
                        >
                          3D Design
                        </p>
                      )}
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-base" htmlFor={`${id}-textarea`}>
                Put some details here:
              </label>
              <Field
                className="w-full rounded-xl border-black border p-3"
                type="text"
                name="message"
                rows="5"
                as="textarea"
                id={`${id}-textarea`}
                placeholder="Message"
              />
            </div>
            <button
              className="bg-custom-button text-white py-2 px-6 rounded-2xl uppercase text-xl font-semibold"
              type="submit"
            >
              Send Message
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MyForm;
