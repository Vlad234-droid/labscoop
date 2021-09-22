import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchApi } from '../fetchApi';
import lockr from 'lockr';

const { REACT_APP_API_URL } = process.env;

const initialState = {
  countries: [],
};

const getCountries = createAsyncThunk('authorization/authorizeCustomer', async () => {
  try {
    const response = await fetchApi(`${REACT_APP_API_URL}/data/countries`, 'GET', null, null);
    return response;
  } catch (err) {
    throw new Error(err);
  }
});

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    logout: (state) => {
      state.isloggedIn = false;
      state.APP_AUTH_KEY = null;
      lockr.rm('APP_AUTH_KEY');
    },
  },
  extraReducers: {
    [getCountries.fulfilled]: (state, action) => {
      if (action.payload) {
        state.countries = action.payload;
      }
    },
  },
});

export const actions = { ...dataSlice.actions, getCountries };

export default dataSlice.reducer;
