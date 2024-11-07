import { createSlice } from '@reduxjs/toolkit';
import { fetchLocation } from './operations';

interface LocationData {
  country_code: string;
  country_name: string;
}

interface LocationState {
  data: LocationData | null;
  loading: boolean;
  error: string | null;
}

const initialState: LocationState = {
  data: null,
  loading: false,
  error: null,
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLocation.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchLocation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch location';
      });
  },
});

export default locationSlice.reducer;