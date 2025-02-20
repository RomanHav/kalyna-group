// redux/submit/selectors.ts
import { RootState } from '../store';

export const selectSubmitLoading = (state: RootState) => state.send.loading;
export const selectSubmitSuccess = (state: RootState) => state.send.success;
export const selectSubmitError = (state: RootState) => state.send.error;
