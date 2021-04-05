import { configureStore } from '@reduxjs/toolkit';
import paginationReducer from '../features/counter/paginationSlice';
import subscribersReducer from '../features/counter/subscribersSlice';

export default configureStore({
  reducer: {
    pagination: paginationReducer,
    data: subscribersReducer,
  },
});
