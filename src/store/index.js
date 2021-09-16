import { configureStore } from '@reduxjs/toolkit';
import customers from '../core/services/customers';

export const store = configureStore({
  reducer: {
    customers,
  },
});
