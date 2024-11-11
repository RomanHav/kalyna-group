// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './location/slice';
import submitReducer from './formValues/slice';

export const store = configureStore({
  reducer: {
    location: locationReducer,
    submit: submitReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
