// @vendors
import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';

// @reducer
import { rootReducer } from '../reducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
