import { createSlice } from '@reduxjs/toolkit';

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState: 1,
  reducers: {
    increment: (state, action) => {
      return action.payload;
    },
    decrement: (state, action) => {
      return action.payload;
    },
  },
});

export const { increment, decrement } = paginationSlice.actions;

export default paginationSlice.reducer;
