import React, { useId, useRef, useState } from 'react';
import { Box, TextField } from '@mui/material';
import { useFormikContext } from 'formik';

interface StepFifth {
  title: string;
  description: string;
}

const ValidatedTextField = ({ values, label, validator, onChange, id }) => {
  const [error, setError] = useState(false);
  const handleChange = e => {
    const newValue = e.target.value;
    const errorMessage = validator(newValue);
    setError(errorMessage);
    onChange(newValue, !errorMessage);
  };
  return (
    <TextField
      id={id}
      type={'email'}
      label={label}
      value={values}
      onChange={handleChange}
      error={!!error}
      helperText={error}
      required
      sx={{
        '& .MuiInputLabel-root': {
          color: '#FFFFFF60',
        },
        '& label.Mui-focused': {
          color: '#EEE',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: '#B2BAC2',
        },
        '& .MuiOutlinedInput-root': {
          color: '#fff',
          '& fieldset': {
            borderColor: '#E0E3E7',
          },
          '&:hover fieldset': {
            borderColor: '#EEE',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#6F7E8C',
          },
        },
      }}
      variant={'outlined'}
      size={'medium'}
    />
  );
};

const StepFifth: React.FC<StepFifth> = ({ title, description }) => {
  const formValid = useRef({ email: false });
  const id = useId();
  const { values, setFieldValue } = useFormikContext<{email: string}>();

  const handleChangeValues = (value, isValid) => {
    setFieldValue('email', value);
    formValid.current.email = isValid;
  };

  const emailValidator = value => {
    if (
      !/[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+\/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i.test(
        value
      )
    ) {
      return 'Invalid email address';
    }
    return false;
  };


    return (
    <div className={`flex flex-col gap-10`}>
      <div className={`flex flex-col`}>
        <h3 className={`text-3xl font-medium mb-2`}>{title}</h3>
        <span className={`mb-6 pr-5 min-h-[48px]`}>{description}</span>
        <div className={`w-full h-[1px] bg-[#C0FFD8]`}></div>
      </div>
      <div className="min-h-[270px]">
        <Box sx={{ width: '70%' }} className={`flex flex-col gap-5`}>
          <label htmlFor={id}>Enter your email:</label>
          <ValidatedTextField
            values={values.email}
            validator={emailValidator}
            label={'Email'}
            id={id}
            onChange={handleChangeValues}
          />
        </Box>
      </div>
    </div>
  );
};

export default StepFifth;
