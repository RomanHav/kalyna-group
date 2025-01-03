import React, { useId } from 'react';
import { Box, TextField } from '@mui/material';

interface StepFifth {
  title: string;
  description: string;
}

const StepFifth: React.FC<StepFifth> = ({ title, description }) => {
  const id = useId();
  return (
    <div className={`flex flex-col gap-10`}>
      <div className={`flex flex-col`}>
        <h3 className={`text-3xl font-medium mb-2`}>{title}</h3>
        <span className={`mb-6 pr-5`}>{description}</span>
        <div className={`w-full h-[1px] bg-[#C0FFD8]`}></div>
      </div>
      <Box sx={{ width: '70%' }} className={`flex flex-col gap-5`}>
        <label htmlFor={id}>Enter your email:</label>
        <TextField
          id={id}
          name={'email'}
          variant={'outlined'}
          size={'medium'}
          label={'Email'}
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
        />
      </Box>
    </div>
  );
};

export default StepFifth;
