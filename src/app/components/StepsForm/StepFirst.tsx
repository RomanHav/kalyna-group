import React, { useState } from 'react';
import { Box, TextField } from '@mui/material';
import { useFormikContext } from 'formik';

interface StepFirstProps {
  title: string;
  description: string;
}

const StepFirst: React.FC<StepFirstProps> = ({ title, description }) => {
  const { values, handleChange } = useFormikContext();
  const [error, setError] = useState<boolean>(false);
  const handleChangeName = evt => {
    handleChange(evt);
    if (evt.target.validity.valid) {
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <div className={`flex flex-col gap-10 text-white`}>
      <div className={`flex flex-col`}>
        <h3 className={`text-2xl lg:text-3xl font-medium mb-5 lg:mb-2`}>{title}</h3>
        <span className={`mb-3 lg:mb-6 min-h-[48px]`}>{description}</span>
        <div className={`w-full h-[1px] bg-[#C0FFD8]`}></div>
      </div>
      <div className="lg:min-h-[270px]">
        <Box sx={{ width: {lg:'70%', xs:'100%'} }} className={`flex flex-col gap-5`}>
          <label htmlFor="name">Enter your name</label>
          <TextField
            required
            id="name"
            name="name"
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            value={values.name || ''}
            onChange={handleChangeName}
            fullWidth
            variant="outlined"
            size="medium"
            label="Name"
            error={error}
              helperText={
                error ? 'Please enter your full name. Example: John Snow' : ''
              }
            slotProps={{ htmlInput: { pattern: `[A-Za-z]+ [A-Za-z]+` } }}
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
    </div>
  );
};

export default StepFirst;
