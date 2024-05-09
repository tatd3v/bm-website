// @vendors
import { combineReducers } from '@reduxjs/toolkit';

// @slices
import { dataSlice, uiSlice } from '../slices';

export const rootReducer = combineReducers({
  data: dataSlice,
  ui: uiSlice,
});
