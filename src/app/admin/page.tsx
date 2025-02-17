'use client'

import LogoutButton from '../components/LogoutButton';
import { Box, TextField } from '@mui/material';
import React from 'react';
import { Poppins } from 'next/font/google';
import UploadPhoto from "@/app/components/UploadPhoto";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
});


export default function AdminDashboard() {
  return (
    <div
      data-lenis-prevent={false}
      className={`${poppins.className} relative top-0 left-0 flex z-[80] items-center justify-center h-screen bg-cover bg-test`}
    >
      <div className="absolute w-full h-screen bg-black/40"></div>
      <div
        className={`relative bg-white p-6 rounded-lg flex flex-col gap-8 shadow-lg`}
      >
        <div className={`flex items-center gap-40`}>
          <h1 className={`text-3xl underline`}>Admin Dashboard</h1>
          <LogoutButton />
        </div>
        <div className={`flex flex-col gap-8`}>
          <UploadPhoto/>
          <Box sx={{ width: '100%' }}>
            <TextField
              name="description"
              value={''}
              multiline
              label={'Post Description'}
              placeholder={'Write more details here'}
              minRows={6}
              fullWidth
              sx={{
                '& .MuiInputLabel-root': {
                  color: '#00000',
                },
                '& label.Mui-focused': {
                  color: '#00000',
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: '#00000',
                },
                '& .MuiOutlinedInput-root': {
                  color: '#00000',
                  '& fieldset': {
                    borderColor: '#00000',
                  },
                  '&:hover fieldset': {
                    borderColor: '#00000',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#00000',
                  },
                },
              }}
            />
          </Box>
        </div>
        <button
          className={`${poppins.className} tracking-wider text-xl font-semibold border border-custom-background bg-custom-background text-white transition-colors duration-300 hover:bg-white py-2 px-6 uppercase hover:text-black hover:border-black rounded`}
        >
          Publish Post
        </button>
      </div>
    </div>
  );
}
