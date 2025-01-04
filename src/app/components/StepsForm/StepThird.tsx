import React from 'react';
import { Box, TextField } from '@mui/material';

interface StepThird {
  title: string;
  description: string;
}

const StepThird: React.FC<StepThird> = ({ title, description }) => {
  return (
    <div className={`flex flex-col gap-10`}>
      <div className={`flex flex-col`}>
        <h3 className={`text-3xl font-medium mb-2`}>{title}</h3>
        <span className={`mb-6 min-h-[48px]`}>{description}</span>
        <div className={`w-full h-[1px] bg-[#C0FFD8]`}></div>
      </div>
      <div className='min-h-[270px] flex items-center'>
        <Box sx={{ width: '100%' }}>
          <TextField
            multiline
            label={'Description'}
            placeholder={'Write more details here'}
            minRows={10}
            fullWidth
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

export default StepThird;
