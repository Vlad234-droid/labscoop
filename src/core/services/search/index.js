import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchApi } from '../fetchApi';

const { REACT_APP_API_URL } = process.env;

const initialState = {
  value: 0,
  status: 'idle',
};

const searchProducts = createAsyncThunk('search/searchProducts', async (body) => {
  try {
    const response = await fetchApi(`${REACT_APP_API_URL}/search/products`, 'POST', null, JSON.stringify(body));
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
});

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
  extraReducers: {
    // [authorizeCustomer.pending]: (state, action) => {
    //   state.status = 'loading';
    // },
  },
});

export const actions = { ...searchSlice.actions, searchProducts };

// export const test = (test) => (dispatch, getState) => {
//   console.log(test);
//   console.log(dispatch);
//   console.log(getState);
// };

export default searchSlice.reducer;
