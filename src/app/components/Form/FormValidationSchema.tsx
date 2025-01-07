import * as Yup from 'yup';

const nameReg: RegExp = /[A-Za-z]+\s[A-Za-z]+/i;
const mailReg =
  /[-A-Za-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i;
const stepOneValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required(`Name is required`)
    .matches(nameReg, `Invalid full name`),
});
const stepTwoValidationSchema = Yup.object().shape({
  service: Yup.string(),
});

const stepThreeValidationSchema = Yup.object().shape({
  description: Yup.string().required(`Short description is required`),
});

const numbers = Yup.number().min(300).integer().positive();

const stepFourValidationSchema = Yup.object().shape({
  budget: Yup.array().of(numbers),
});
const stepFiveValidationSchema = Yup.object().shape({
  email: Yup.string().matches(mailReg, `Invalid email format`),
});

export const stepValidationSchema = [
  stepOneValidationSchema,
  stepTwoValidationSchema,
  stepThreeValidationSchema,
  stepFourValidationSchema,
  stepFiveValidationSchema,
];
