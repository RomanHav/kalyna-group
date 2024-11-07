// redux/location/selectors.ts
import { RootState } from '../store';

export const selectLocationData = (state: RootState) => state.location.data;

export const selectCountryCode = (state: RootState) =>
  state.location.data?.country_code || '';

export const selectCountryName = (state: RootState) =>
  state.location.data?.country_name || '';

export const selectLocationLoading = (state: RootState) => state.location.loading;

export const selectLocationError = (state: RootState) => state.location.error;
