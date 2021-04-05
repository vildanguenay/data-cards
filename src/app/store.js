import { configureStore } from '@reduxjs/toolkit';
import paginationReducer from '../features/counter/paginationSlice';
import subscribersSlice from '../features/counter/subscribersSlice';

export default configureStore({
  reducer: {
    pagination: paginationReducer,
    data: subscribersSlice,
  },
});
