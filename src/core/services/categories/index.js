import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchApi } from '../fetchApi';

const { REACT_APP_API_URL } = process.env;

const initialState = {
  value: 0,
  status: 'idle',
};

const getTopLevelCategories = createAsyncThunk('categories/getTopLevelCategories', async (body) => {
  try {
    const response = await fetchApi(`${REACT_APP_API_URL}/​categories`, null, null, JSON.stringify(body));
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
});
const categoriesTree = createAsyncThunk('categories/categoriesTree', async (body) => {
  try {
    const response = await fetchApi(`${REACT_APP_API_URL}/​categories/tree`, null, null, JSON.stringify(body));
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
});

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: {
    // [authorizeCustomer.pending]: (state, action) => {
    //   state.status = 'loading';
    // },
  },
});

export const actions = { ...categoriesSlice.actions, getTopLevelCategories, categoriesTree };

// export const test = (test) => (dispatch, getState) => {
//   console.log(test);
//   console.log(dispatch);
//   console.log(getState);
// };

export default categoriesSlice.reducer;
