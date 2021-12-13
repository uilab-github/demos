import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RadioState {
  value: string;
}

export const initialState: RadioState = {
  value: '',
};

export const radio = createSlice({
  name: 'radio',
  initialState,
  reducers: {
    updateRadio: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { updateRadio } = radio.actions;

export default radio.reducer;
