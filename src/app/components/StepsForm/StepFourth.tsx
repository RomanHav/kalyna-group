'use client';

import React, { useEffect, useId, useState } from 'react';
import { Box, Slider, TextField, Typography } from '@mui/material';
import { useFormikContext } from 'formik';

interface StepFourthProps {
  title: string;
  description: string;
  isModal?: boolean;
}

const StepFourth: React.FC<StepFourthProps> = ({
  title,
  description,
  isModal,
}) => {
  const min = 300;
  const max = 15000;
  const id = useId();

  const initialVal =
    typeof window !== 'undefined'
      ? JSON.parse(window.localStorage.getItem('budget')) || [1500, 5000]
      : [1500, 5000];

  const [val, setVal] = useState<number[]>(initialVal);
  const [inputValues, setInputValues] = useState<string[]>([
    val[0].toString(),
    val[1].toString(),
  ]);
  const [errors, setErrors] = useState<{ min: string; max: string }>({
    min: '',
    max: '',
  });

  const { setFieldValue } = useFormikContext();

  useEffect(() => {
    setFieldValue('budget', val);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('budget', JSON.stringify(val));
    }
  }, [val, setFieldValue]);

  const handleSliderChange = (_: Event, newValue: number | number[]) => {
    const newValues = newValue as number[];
    setVal(newValues);
    setInputValues([newValues[0].toString(), newValues[1].toString()]);
    validateInputs(newValues[0], newValues[1]);
  };

  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues([event.target.value, inputValues[1]]);
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues([inputValues[0], event.target.value]);
  };

  const handleMinBlur = () => {
    const newMin = Math.max(min, Math.min(Number(inputValues[0]), val[1]));
    setVal([newMin, val[1]]);
    setInputValues([newMin.toString(), inputValues[1]]);
    validateInputs(newMin, val[1]);
  };

  const handleMaxBlur = () => {
    const newMax = Math.min(max, Math.max(Number(inputValues[1]), val[0]));
    setVal([val[0], newMax]);
    setInputValues([inputValues[0], newMax.toString()]);
    validateInputs(val[0], newMax);
  };

  const validateInputs = (minVal: number, maxVal: number) => {
    const newErrors = { min: '', max: '' };
    if (minVal < min || minVal >= maxVal) {
      newErrors.min = `Min value should be at least ${min} and less than Max value`;
    }
    if (maxVal > max || maxVal <= minVal) {
      newErrors.max = `Max value should be at most ${max} and greater than Min value`;
    }
    setErrors(newErrors);
  };

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col">
        <h3 className="text-3xl font-medium mb-2">{title}</h3>
        <span className="mb-6 min-h-[48px]">{description}</span>
        <div className="w-full h-[1px] bg-[#C0FFD8]"></div>
      </div>
      <div
        className={`${isModal ? 'min-h-[150px]' : 'lg:min-h-[270px]'} flex flex-col justify-center`}
      >
        <div className="flex justify-center lg:pt-10 lg:pb-5 pb-10">
          <Box sx={{ width: '70%' }}>
            <Slider
              value={val}
              valueLabelDisplay="on"
              min={min}
              max={max}
              step={50}
              onChange={handleSliderChange}
              sx={{ color: '#19D288', m: '0' }}
            />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body2">{min}$</Typography>
              <Typography variant="body2">{max}$</Typography>
            </Box>
          </Box>
        </div>
        <div className={`${isModal ? 'hidden' : 'flex'} gap-10 justify-center`}>
          <Box
            sx={{ width: { md: '20%', xs: '50%' } }}
            className="flex flex-col gap-5"
          >
            <label htmlFor={`${id}-min`}>Enter your min value</label>
            <TextField
              type={'number'}
              id={`${id}-min`}
              value={inputValues[0]}
              onChange={handleMinChange}
              onBlur={handleMinBlur}
              fullWidth
              variant="outlined"
              size="medium"
              label="Min number"
              error={!!errors.min}
              helperText={errors.min}
              sx={{
                '& .MuiInputLabel-root': { color: '#FFFFFF60' },
                '& label.Mui-focused': { color: '#EEE' },
                '& .MuiOutlinedInput-root': {
                  color: '#fff',
                  '& fieldset': { borderColor: '#E0E3E7' },
                  '&:hover fieldset': { borderColor: '#EEE' },
                  '&.Mui-focused fieldset': { borderColor: '#6F7E8C' },
                },
              }}
            />
          </Box>
          <Box
            sx={{ width: { md: '20%', xs: '50%' } }}
            className="flex flex-col gap-5"
          >
            <label htmlFor={`${id}-max`}>Enter your max value</label>
            <TextField
              id={`${id}-max`}
              type={'number'}
              value={inputValues[1]}
              onChange={handleMaxChange}
              onBlur={handleMaxBlur}
              fullWidth
              variant="outlined"
              size="medium"
              label="Max number"
              error={!!errors.max}
              helperText={errors.max}
              sx={{
                '& .MuiInputLabel-root': { color: '#FFFFFF60' },
                '& label.Mui-focused': { color: '#EEE' },
                '& .MuiOutlinedInput-root': {
                  color: '#fff',
                  '& fieldset': { borderColor: '#E0E3E7' },
                  '&:hover fieldset': { borderColor: '#EEE' },
                  '&.Mui-focused fieldset': { borderColor: '#6F7E8C' },
                },
              }}
            />
          </Box>
        </div>
      </div>
    </div>
  );
};

export default StepFourth;
