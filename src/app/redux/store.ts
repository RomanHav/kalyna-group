// redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './location/slice';
import submitReducer from './formValues/slice';
import postsReducer from './posts/slice';
import sendReducer from './subscribersForm/slice'

export const store = configureStore({
  reducer: {
    location: locationReducer,
    submit: submitReducer,
    posts: postsReducer,
    send: sendReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
