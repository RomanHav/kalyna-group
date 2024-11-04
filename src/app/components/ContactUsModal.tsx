import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { useId, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import * as Yup from 'yup';

interface FormValues {
  namePerson: string;
  emailPerson: string;
  phonePerson: string;
  interested: string;
  message: string;
}

interface ContactUsModalProps {
  click: boolean;
  handleClick: () => void;
}

const ContactUsModal: React.FC<ContactUsModalProps> = ({
  click,
  handleClick,
}) => {
  const FeedbackSchema = Yup.object().shape({
    namePerson: Yup.string()
      .min(2, 'Too Short!')
      .max(30, 'Too Long!')
      .required('Required'),
    emailPerson: Yup.string().email('Invalid email').required('Required'),
    phonePerson: Yup.string().min(10, 'Too Short!'),
    interested: Yup.string().required('Please select an option'),
  });

  const initialValues: FormValues = {
    namePerson: '',
    emailPerson: '',
    phonePerson: '',
    interested: '',
    message: '',
  };

  const id = useId();
  const [interested, setInterested] = useState('');

  const handleSubmit = (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    console.log(values);
    actions.resetForm();
    handleClick();
  };

  if (!click) return null;

  return (
    <div className="fixed inset-0 z-[9999] w-full h-full backdrop-blur-md">
      <div className="absolute  rounded-3xl bg-contactUsModal bg-center bg-cover text-white  w-[90%] h-[660px] top-[10px] left-[5%]">
        <div className="absolute inset-0 w-full h-full rounded-3xl bg-black/80"></div>
        <div className="relative z-50 gap-5 md:gap-3 px-6 py-8 md:py-6 flex flex-col">
          <IoMdClose
            size={35}
            onClick={handleClick}
            className="absolute w-7 top-5 right-5 z-20 fill-white md:w-12 md:right-6 md:top-5 cursor-pointer"
          />
          <h2 className="text-center uppercase text-2xl">Contact Us</h2>
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={FeedbackSchema}
          >
            {({ setFieldValue }) => (
              <Form className="flex flex-col gap-5 md:gap-3 bg-inherit">
                <div className="flex flex-col gap-2">
                  <label className="text-base" htmlFor={`${id}-name`}>
                    Name: <span className="text-red-600">*</span>
                  </label>
                  <Field
                    className="w-full bg-inherit border-white rounded-xl border py-1 md:py-3 px-3"
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
                    className="w-full rounded-xl bg-inherit border-white border py-1 md:py-3 px-3"
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
                  <Field
                    className="w-full rounded-xl bg-inherit border-white border py-1 md:py-3 px-3"
                    type="text"
                    name="phonePerson"
                    placeholder="+380663056524"
                    id={`${id}-phone`}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-base" htmlFor={`${id}-choose`}>
                    What are you interested in:{' '}
                    <span className="text-red-600">*</span>
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
                        ].map(option => (
                          <MenuItem key={option}>
                            {({ active }) => (
                              <p
                                onClick={() => {
                                  setInterested(option);
                                  setFieldValue('interested', option);
                                }}
                                className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                              >
                                {option}
                              </p>
                            )}
                          </MenuItem>
                        ))}
                      </div>
                    </MenuItems>
                  </Menu>
                </div>
                <div className="flex flex-col gap-2">
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
      </div>
    </div>
  );
};

export default ContactUsModal;
