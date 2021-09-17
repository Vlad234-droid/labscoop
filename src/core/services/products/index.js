import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchApi } from '../fetchApi';
import lockr from 'lockr';

const { REACT_APP_API_URL } = process.env;

const initialState = {
  value: 0,
  status: 'idle',
};

const getProductsDetails = createAsyncThunk('products/getProductsDetails', async (product_slug) => {
  try {
    const response = await fetchApi(`${REACT_APP_API_URL}​/products​/by-slug​/${product_slug}`, null, null, null);
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
});

const getProductsCitations = createAsyncThunk('products/getProductsCitations', async (product_id) => {
  try {
    const response = await fetchApi(`${REACT_APP_API_URL}​​/products​/${product_id}​/citations`, null, null, null);
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
});

const getProductsReviews = createAsyncThunk('products/getProductsReviews', async (product_id) => {
  try {
    const response = await fetchApi(`${REACT_APP_API_URL}​​​/products​/${product_id}​/reviews`, null, null, null);
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
});

const addReviewForProduct = createAsyncThunk('products/addReviewForProduct', async ({ product_id, body }) => {
  const token = lockr.get('auth-token');
  const headers = { Accept: 'application/json', Authorization: `bearer ${token}`, 'Content-Type': 'application/json' };

  try {
    const response = await fetchApi(`${REACT_APP_API_URL}​/products​/${product_id}​/reviews`, 'POST', headers, body);
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
});

const uploadFileToReview = createAsyncThunk('products/uploadFileToReview', async ({ product_id, body }) => {
  // через formdata

  const token = lockr.get('auth-token');
  const headers = { Accept: 'application/json', Authorization: `bearer ${token}`, 'Content-Type': 'application/json' };

  try {
    const response = await fetchApi(`${REACT_APP_API_URL}​/products​/${product_id}​/reviews`, 'POST', headers, body);
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
});

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: {
    // [registerCustomer.pending]: (state, action) => {
    //   state.status = 'loading';
    // },
  },
});

export const actions = {
  ...productsSlice.actions,
  getProductsDetails,
  getProductsCitations,
  getProductsReviews,
  addReviewForProduct,
  uploadFileToReview,
};

export default productsSlice.reducer;
