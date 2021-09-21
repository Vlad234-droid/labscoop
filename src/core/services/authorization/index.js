import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchApi } from '../fetchApi';
import lockr from 'lockr';

const { REACT_APP_API_URL } = process.env;

const initialState = {
  APP_AUTH_KEY: lockr.get('APP_AUTH_KEY') || null,
  isloggedIn: lockr.get('APP_AUTH_KEY') ? true : false,
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
  reducers: {
    logout: (state) => {
      state.isloggedIn = false;
      state.APP_AUTH_KEY = null;
      lockr.rm('APP_AUTH_KEY');
    },
  },
  extraReducers: {
    [authorizeCustomer.fulfilled]: (state, action) => {
      if (action.payload.access_token) {
        state.APP_AUTH_KEY = action.payload.access_token;
        state.isloggedIn = true;
      }
    },
  },
});

export const actions = { ...authorizationSlice.actions, authorizeCustomer };

export default authorizationSlice.reducer;
