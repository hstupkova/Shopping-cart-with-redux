import { configureStore } from '@reduxjs/toolkit';

import cartTogglerReducer from './cartToggler';
import cartItemsReducer from './cartItems';

const store = configureStore({
  reducer: { 
    cartToggler: cartTogglerReducer,
    cartItems: cartItemsReducer
  },
});

export default store;