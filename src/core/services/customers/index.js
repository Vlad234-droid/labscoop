import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchApi } from '../fetchApi';

const { REACT_APP_API_URL } = process.env;

const initialState = {
  value: 0,
  status: 'idle',
};

const registerCustomer = createAsyncThunk('customers/registerCustomer', async (body) => {
  try {
    const response = await fetchApi(`${REACT_APP_API_URL}/customers`, 'POST', null, JSON.stringify(body));
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
});

export const customersSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {},
  extraReducers: {
    [registerCustomer.pending]: (state, action) => {
      state.status = 'loading';
    },
  },
});

export const actions = { ...customersSlice.actions, registerCustomer };

// export const test = (test) => (dispatch, getState) => {
//   console.log(test);
//   console.log(dispatch);
//   console.log(getState);
// };

export default customersSlice.reducer;
