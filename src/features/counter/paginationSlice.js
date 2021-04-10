import { createSlice } from '@reduxjs/toolkit';

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState: 1,
  reducers: {
    increment: (state, action) => {
      console.log('increment', action.payload);
      return action.payload;
    },
    decrement: (state, action) => {
      console.log('decrement', action.payload);
      return action.payload;
    },
  },
});

export const { increment, decrement } = paginationSlice.actions;

export default paginationSlice.reducer;
