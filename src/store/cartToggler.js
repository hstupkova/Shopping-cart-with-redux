import { createSlice } from '@reduxjs/toolkit';

const initialToggleState = {
  isShown: false,
};

const cartToggleSlice = createSlice({
  name: 'cartToggler',
  initialState: initialToggleState,
  reducers: {
    toggleCart(state) {
      state.isShown = !state.isShown;
    }
  },
});

export const toggleCartActions = cartToggleSlice.actions;

export default cartToggleSlice.reducer;