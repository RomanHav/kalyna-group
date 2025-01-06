import React from 'react';
import { Box, TextField } from '@mui/material';
import { useFormikContext } from 'formik';

interface StepFirstProps {
  title: string;
  description: string;
}

const StepFirst: React.FC<StepFirstProps> = ({ title, description }) => {
  const { values, handleChange } = useFormikContext();

  return (
    <div className={`flex flex-col gap-10 text-white`}>
      <div className={`flex flex-col`}>
        <h3 className={`text-3xl font-medium mb-2`}>{title}</h3>
        <span className={`mb-6 min-h-[48px]`}>{description}</span>
        <div className={`w-full h-[1px] bg-[#C0FFD8]`}></div>
      </div>
      <div className="min-h-[270px]">
        <Box sx={{ width: '70%' }} className={`flex flex-col gap-5`}>
          <label htmlFor="name">Enter your name</label>
          <TextField
            id="name"
            name="name"
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error 
            value={values.name || ''}
            onChange={handleChange}
            fullWidth
            variant="outlined"
            size="medium"
            label="Name"
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
