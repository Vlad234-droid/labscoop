import { configureStore } from '@reduxjs/toolkit';
import customers from '../core/services/customers';
import authorization from '../core/services/authorization';
import categories from '../core/services/categories';
import search from '../core/services/search';
import products from '../core/services/products';
import lab_groups from '../core/services/lab_groups';

export const store = configureStore({
  reducer: {
    customers,
    authorization,
    categories,
    search,
    lab_groups,
    products,
  },
});
