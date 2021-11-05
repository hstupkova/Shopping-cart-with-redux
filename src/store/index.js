import { configureStore } from '@reduxjs/toolkit';

import cartTogglerReducer from './cartToggler';

const store = configureStore({
  reducer: { cartToggler: cartTogglerReducer },
});

export default store;