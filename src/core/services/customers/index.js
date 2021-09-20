import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchApi } from '../fetchApi';
import lockr from 'lockr';

const { REACT_APP_API_URL } = process.env;

const initialState = {
  value: 0,
  status: 'idle',
  idCustomer: null,
};

const registerCustomer = createAsyncThunk('customers/registerCustomer', async (body) => {
  try {
    const response = await fetchApi(
      `${REACT_APP_API_URL}/customers`,
      'POST',
      { 'Content-type': 'application/json' },
      JSON.stringify(body),
    );
    return response;
  } catch (err) {
    throw new Error(err);
  }
});

const validateCustomerEmail = createAsyncThunk('customers/validateCustomerEmail', async (body) => {
  try {
    const response = await fetchApi(
      `${REACT_APP_API_URL}/customers/validate-email`,
      'POST',
      { 'Content-type': 'application/json' },
      JSON.stringify(body),
    );
    return response;
  } catch (err) {
    throw new Error(err);
  }
});

const resetPasswordRequest = createAsyncThunk('customers/resetPasswordRequest', async (body) => {
  try {
    const response = await fetchApi(
      `${REACT_APP_API_URL}​/customers​/reset-password`,
      'POST',
      null,
      JSON.stringify(body),
    );
    return response;
  } catch (err) {
    throw new Error(err);
  }
});

const verifyResetPasswordHash = createAsyncThunk('customers/verifyResetPasswordHash', async (body) => {
  try {
    const response = await fetchApi(
      `${REACT_APP_API_URL}​/customers​/reset-password​/verify-hash`,
      'POST',
      null,
      JSON.stringify(body),
    );
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
});

const updatePassword = createAsyncThunk('customers/updatePassword', async (body) => {
  try {
    const response = await fetchApi(
      `${REACT_APP_API_URL}​​/customers​/update-password`,
      'POST',
      null,
      JSON.stringify(body),
    );
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
});

const addProductToBookmarks = createAsyncThunk('customers/addProductToBookmarks', async (body) => {
  const token = lockr.get('auth-token');
  const headers = { Accept: 'application/json', Authorization: `bearer ${token}`, 'Content-Type': 'application/json' };
  try {
    const response = await fetchApi(
      `${REACT_APP_API_URL}​​/customers​/update-password`,
      'POST',
      headers,
      JSON.stringify(body),
    );
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
});

const getCustomerAddresses = createAsyncThunk('customers/getCustomerAddresses', async () => {
  const token = lockr.get('auth-token');
  const headers = { Accept: 'application/json', Authorization: `bearer ${token}`, 'Content-Type': 'application/json' };
  try {
    const response = await fetchApi(`${REACT_APP_API_URL}​​/customers​/update-password`, null, headers, null);
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
});

const addAddress = createAsyncThunk('customers/addAddress', async (body) => {
  const token = lockr.get('auth-token');
  const headers = { Accept: 'application/json', Authorization: `bearer ${token}`, 'Content-Type': 'application/json' };
  try {
    const response = await fetchApi(
      `${REACT_APP_API_URL}​​​/customers​/me​/address`,
      'POST',
      headers,
      JSON.stringify(body),
    );
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
});

const changePassword = createAsyncThunk('customers/changePassword', async (body) => {
  const token = lockr.get('auth-token');
  const headers = { Accept: 'application/json', Authorization: `bearer ${token}`, 'Content-Type': 'application/json' };
  try {
    const response = await fetchApi(
      `${REACT_APP_API_URL}​​​​/customers​/me​/password`,
      'POST',
      headers,
      JSON.stringify(body),
    );
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
});

const getCustomerSupplierList = createAsyncThunk('customers/getCustomerSupplierList', async () => {
  const token = lockr.get('auth-token');
  const headers = { Accept: 'application/json', Authorization: `bearer ${token}`, 'Content-Type': 'application/json' };
  try {
    const response = await fetchApi(`${REACT_APP_API_URL}​​​​/customers​/me​/password`, null, headers, null);
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
});

const addSupplierToCustomer = createAsyncThunk('customers/addSupplierToCustomer', async (body) => {
  const token = lockr.get('auth-token');
  const headers = { Accept: 'application/json', Authorization: `bearer ${token}`, 'Content-Type': 'application/json' };
  try {
    const response = await fetchApi(
      `${REACT_APP_API_URL}​​​​​/customers​/me​/suppliers`,
      'POST',
      headers,
      JSON.stringify(body),
    );
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
});

const updateCustomerSupplier = createAsyncThunk(
  'customers/updateCustomerSupplier',
  async ({ customer_supplier_id, body }) => {
    const token = lockr.get('auth-token');
    const headers = {
      Accept: 'application/json',
      Authorization: `bearer ${token}`,
      'Content-Type': 'application/json',
    };
    try {
      const response = await fetchApi(
        `${REACT_APP_API_URL}​​​​​​/customers​/me​/suppliers​/${customer_supplier_id}`,
        'PUT',
        headers,
        JSON.stringify(body),
      );
      return response;
    } catch (err) {
      return Promise.reject(err);
    }
  },
);

const deleteCustomerSupplier = createAsyncThunk('customers/deleteCustomerSupplier', async (customer_supplier_id) => {
  const token = lockr.get('auth-token');
  const headers = {
    Accept: 'application/json',
    Authorization: `bearer ${token}`,
    'Content-Type': 'application/json',
  };
  try {
    const response = await fetchApi(
      `${REACT_APP_API_URL}​​​​​​​/customers​/me​/suppliers​/${customer_supplier_id}`,
      'DELETE',
      headers,
      null,
    );
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
});

const getCustomerCarts = createAsyncThunk('customers/getCustomerCarts', async () => {
  const token = lockr.get('auth-token');
  const headers = {
    Accept: 'application/json',
    Authorization: `bearer ${token}`,
    'Content-Type': 'application/json',
  };
  try {
    const response = await fetchApi(`${REACT_APP_API_URL}​​​​​​​​/customers​/me​/carts`, null, headers, null);
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
});

const listCustomerTickets = createAsyncThunk('customers/listCustomerTickets', async () => {
  const token = lockr.get('auth-token');
  const headers = {
    Accept: 'application/json',
    Authorization: `bearer ${token}`,
    'Content-Type': 'application/json',
  };
  try {
    const response = await fetchApi(`${REACT_APP_API_URL}​/customers​/me​/support​/tickets`, null, headers, null);
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
});

const subscribePromotionalChannel = createAsyncThunk('customers/subscribePromotionalChannel', async (body) => {
  const token = lockr.get('auth-token');
  const headers = {
    Accept: 'application/json',
    Authorization: `bearer ${token}`,
    'Content-Type': 'application/json',
  };
  try {
    const response = await fetchApi(
      `${REACT_APP_API_URL}​​/me​/email_subscriptions`,
      'POST',
      headers,
      JSON.stringify(body),
    );
    return response;
  } catch (err) {
    return Promise.reject(err);
  }
});

const addLabMateNotificationEmailAddress = createAsyncThunk(
  'customers/addLabMateNotificationEmailAddress',
  async (body) => {
    const token = lockr.get('auth-token');
    const headers = {
      Accept: 'application/json',
      Authorization: `bearer ${token}`,
      'Content-Type': 'application/json',
    };
    try {
      const response = await fetchApi(
        `${REACT_APP_API_URL}​​​/me​/email_settings`,
        'POST',
        headers,
        JSON.stringify(body),
      );
      return response;
    } catch (err) {
      return Promise.reject(err);
    }
  },
);

const deleteLabMateNotificationEmailAddress = createAsyncThunk(
  'customers/deleteLabMateNotificationEmailAddress',
  async (body) => {
    const token = lockr.get('auth-token');
    const headers = {
      Accept: 'application/json',
      Authorization: `bearer ${token}`,
      'Content-Type': 'application/json',
    };
    try {
      const response = await fetchApi(
        `${REACT_APP_API_URL}​​​​/me​/email_settings`,
        'DELETE',
        headers,
        JSON.stringify(body),
      );
      return response;
    } catch (err) {
      return Promise.reject(err);
    }
  },
);

const subscribeScienceSamplesProgram = createAsyncThunk('customers/subscribeScienceSamplesProgram', async (body) => {
  const token = lockr.get('auth-token');
  const headers = {
    Accept: 'application/json',
    Authorization: `bearer ${token}`,
    'Content-Type': 'application/json',
  };
  try {
    const response = await fetchApi(
      `${REACT_APP_API_URL}​​​​​​/me​/science-samples`,
      'POST',
      headers,
      JSON.stringify(body),
    );
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
    [registerCustomer.fulfilled]: (state, action) => {
      state.idCustomer = action?.payload?.id;
      lockr.set('email', action?.meta?.arg?.email);
    },
  },
});

export const actions = {
  ...customersSlice.actions,
  registerCustomer,
  validateCustomerEmail,
  resetPasswordRequest,
  verifyResetPasswordHash,
  updatePassword,
  addProductToBookmarks,
  getCustomerAddresses,
  addAddress,
  changePassword,
  getCustomerSupplierList,
  addSupplierToCustomer,
  updateCustomerSupplier,
  deleteCustomerSupplier,
  getCustomerCarts,
  listCustomerTickets,
  subscribePromotionalChannel,
  addLabMateNotificationEmailAddress,
  deleteLabMateNotificationEmailAddress,
  subscribeScienceSamplesProgram,
};

export default customersSlice.reducer;
