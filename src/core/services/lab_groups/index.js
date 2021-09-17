import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchApi } from '../fetchApi';
import lockr from 'lockr';

const { REACT_APP_API_URL } = process.env;

const initialState = {
  value: 0,
  status: 'idle',
};

const getShoppingCartDetails = createAsyncThunk('customers/getShoppingCartDetails', async (cart_id) => {
  const token = lockr.get('auth-token');
  const headers = {
    Accept: 'application/json',
    Authorization: `bearer ${token}`,
    'Content-Type': 'application/json',
  };
  try {
    const response = await fetchApi(`${REACT_APP_API_URL}​​​​​​​/cart​/${cart_id}`, null, headers, null);
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
});

export const lab_groupsSlice = createSlice({
  name: 'lab_groups',
  initialState,
  reducers: {},
  extraReducers: {},
});

export const actions = {
  ...lab_groupsSlice.actions,
  getShoppingCartDetails,
};

// export const test = (test) => (dispatch, getState) => {
//   console.log(test);
//   console.log(dispatch);
//   console.log(getState);
// };

export default lab_groupsSlice.reducer;
