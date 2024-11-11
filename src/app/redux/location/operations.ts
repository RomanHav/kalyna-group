// redux/location/operations.ts
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLocation = createAsyncThunk(
  'location/fetchLocation',
  async () => {
    const response = await axios.get('https://ipapi.co/json/');
    return response.data;
  }
);
