import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface SubscriberParams {
  email: string;
  location: string
}

axios.defaults.baseURL = process.env.NEXT_PUBLIC_RENDER_API;

export const sendSubscriber = createAsyncThunk(
  'subscriberForm/postSubscriber',
  async (subscriberParams: SubscriberParams, thunkAPI) => {
    try {
      const response = await axios.post(`/subscribers`, subscriberParams);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkAPI.rejectWithValue(
          error.response?.data || 'Failed to post subscriber data'
        );
      } else if (error instanceof Error) {
        return thunkAPI.rejectWithValue(error.message);
      } else {
        return thunkAPI.rejectWithValue('Unexpected error occurred');
      }
    }
  }
);
