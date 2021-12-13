import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface RadioState {
  value: string;
}

export const initialState: RadioState = {
  value: '',
};

export const radioSlice = createSlice({
  name: 'radio',
  initialState,
  reducers: {
    updateRadio: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { updateRadio } = radioSlice.actions;

// export const selectcount = (state: RootState) => state.counter.value;

export default radioSlice.reducer;
