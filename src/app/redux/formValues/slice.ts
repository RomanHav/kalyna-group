// redux/submit/slice.ts
import { createSlice } from '@reduxjs/toolkit';
import { submitForm } from './operations';

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
  name: 'submit',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitForm.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(submitForm.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(submitForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to submit form';
      });
  },
});

export default submitSlice.reducer;
