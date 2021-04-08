import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [];

export const fetchData = createAsyncThunk('subscriber/fetchData', async () => {
  const response = fetch(
    'https://604868d1b801a40017ccdac6.mockapi.io/api/v1/subscriber'
  ).then((res) => res.json());
  return response;
});

export const subscribersSlice = createSlice({
  name: 'subscriber',
  initialState,
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      return action.payload;
    },
  },
});

export default subscribersSlice.reducer;
