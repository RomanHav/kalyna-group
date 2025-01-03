// eslint-disable-next-line import/no-anonymous-default-export
export default {
  formId: 'stepsForm',
  formField: {
    name: {
      title: 'Let’s start with your name',
      description:
        'Please fill the details below so that we can get in contact with you.',
      name: 'name',
      label: 'Name',
      requiredErrorMsg: 'Name is required',
    },
    selectedOption: {
      title: 'What services are you looking for?',
      description:
        'Please fill the details below so that we can get in contact with you.',
      name: 'selectedOption',
      label: 'Select',
      selection: [
        'Landing page',
        'E-commerce',
        'CRM-system',
        '3D design',
        'UI/UX design',
        'Business website',
      ],
      requiredErrorMsg: 'You should choose one of them',
    },
    description: {
      name: 'description',
      label: 'Describe here',
      requiredErrorMsg: 'You should write more details',
    },
    budget: {
      name: 'budget',
      label: 'Your budget',
      requiredErrorMsg: 'Invalid data',
    },
    email: {
      name: 'email',
      label: 'Email',
      requiredErrorMsg: 'Invalid data',
    },
  },
};
