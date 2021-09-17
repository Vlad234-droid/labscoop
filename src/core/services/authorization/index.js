import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchApi } from '../fetchApi';

const { REACT_APP_API_URL } = process.env;

const initialState = {
  value: 0,
  status: 'idle',
};

const authorizeCustomer = createAsyncThunk('authorization/authorizeCustomer', async (body) => {
  const headers = {
    accept: ' application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  try {
    const response = await fetchApi(`${REACT_APP_API_URL}/auth`, 'POST', headers, JSON.stringify(body));
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
});

export const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {},
  extraReducers: {
    // [authorizeCustomer.pending]: (state, action) => {
    //   state.status = 'loading';
    // },
  },
});

export const actions = { ...authorizationSlice.actions, authorizeCustomer };

// export const test = (test) => (dispatch, getState) => {
//   console.log(test);
//   console.log(dispatch);
//   console.log(getState);
// };

export default authorizationSlice.reducer;
