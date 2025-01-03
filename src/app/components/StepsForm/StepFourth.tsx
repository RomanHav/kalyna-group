import React from 'react';
import { Box, Slider } from '@mui/material';

interface StepFourth {
  title: string;
  description: string;
}

// Роскоментируй

// function valuewithtext(item: number) {
//   return `${item}$`;
// }


const StepFourth: React.FC<StepFourth> = ({ title, description }) => {
  // const [value, setValue] = useState<number[]>([0, 20000]);
  return (
    <div className={`flex flex-col gap-10`}>
      <div className={`flex flex-col`}>
        <h3 className={`text-3xl font-medium mb-2`}>{title}</h3>
        <span className={`mb-6`}>{description}</span>
        <div className={`w-full h-[1px] bg-[#C0FFD8]`}></div>
      </div>
      <Box sx={{ width: '100%' }}>
        <Slider

        />
      </Box>
    </div>
  );
};

export default StepFourth;
