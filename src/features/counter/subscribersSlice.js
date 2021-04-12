import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = [];

export const fetchData = createAsyncThunk(
  'subscriber/fetchData',
  async (_, thunkAPI) => {
    const currentPage = thunkAPI.getState().pagination;
    const response = await fetch(
      `https://604868d1b801a40017ccdac6.mockapi.io/api/v1/subscriber?page=${currentPage}&limit=7`
    ).then((res) => res.json());
    return response;
  }
);

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
