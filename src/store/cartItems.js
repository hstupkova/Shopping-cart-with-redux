import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  items: [
    /* { 
      title: 'Test Item', 
      quantity: 3, 
      total: 18, 
      price: 6 
    },
    { 
      title: 'Test Item 2', 
      quantity: 10, 
      total: 10, 
      price: 1
    }, */
  ],
};

const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState: initialCartState,
  reducers: {
    plusItem(state) {

    },
    minusItem(state) {
      
    },
    addItem(state) {
      
    },
  },
});

export const cartItemsActions = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
