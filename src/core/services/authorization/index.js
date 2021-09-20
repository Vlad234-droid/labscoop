import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchApi } from '../fetchApi';
import lockr from 'lockr';

const { REACT_APP_API_URL } = process.env;

const initialState = {
  value: 0,
  status: 'idle',
};

const authorizeCustomer = createAsyncThunk('authorization/authorizeCustomer', async (body) => {
  const formData = new FormData();
  for (let i in body) {
    formData.append(i, body[i]);
  }
  try {
    const response = await fetchApi(`${REACT_APP_API_URL}/auth`, 'POST', null, formData);
    return response;
  } catch (err) {
    throw new Error(err);
  }
});

export const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {},
  extraReducers: {
    [authorizeCustomer.fulfilled]: (state, action) => {
      lockr.set('token', action.payload.access_token);
    },
  },
});

export const actions = { ...authorizationSlice.actions, authorizeCustomer };

export default authorizationSlice.reducer;
