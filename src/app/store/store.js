// @vendors
import { configureStore } from '@reduxjs/toolkit';

// @reducer
import { rootReducer } from '../reducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
