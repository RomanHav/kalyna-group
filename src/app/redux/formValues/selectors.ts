// redux/submit/selectors.ts
import { RootState } from '../store';

export const selectSubmitLoading = (state: RootState) => state.submit.loading;
export const selectSubmitSuccess = (state: RootState) => state.submit.success;
export const selectSubmitError = (state: RootState) => state.submit.error;
