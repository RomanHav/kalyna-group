import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface FormParams {
  name: string;
  email: string;
  phoneNumber: string;
  message: string;
  location: string;
}

axios.defaults.baseURL = process.env.NEXT_PUBLIC_RENDER_API;

export const submitForm = createAsyncThunk(
  'clientsForm/postClientsForm',
  async (formParams: FormParams, thunkAPI) => {
    try {
      const response = await axios.post(`/clients`, formParams);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(
          error.response?.data || 'Failed to post clients data'
        );
      } else if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      } else {
        return thunkAPI.rejectWithValue('Unexpected error occurred');
      }
    }
  }
);
