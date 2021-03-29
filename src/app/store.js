import { configureStore } from '@reduxjs/toolkit';
import paginationReducer from '../features/counter/paginationSlice';

export default configureStore({
  reducer: {
    pagination: paginationReducer,
  },
});
