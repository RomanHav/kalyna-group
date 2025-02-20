import { createSlice } from '@reduxjs/toolkit';
import { sendSubscriber } from './operations';

interface SubmitState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

const initialState: SubmitState = {
  loading: false,
  success: false,
  error: null,
};

const submitSlice = createSlice({
  name: 'send',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(sendSubscriber.pending, state => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(sendSubscriber.fulfilled, state => {
        state.loading = false;
        state.success = true;
      })
      .addCase(sendSubscriber.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to send email!';
      });
  },
});

export default submitSlice.reducer;
