// @vendors
import { combineReducers } from '@reduxjs/toolkit';

// @slides
import { dataSlide, uiSlide } from '../slides';

export const rootReducer = combineReducers({
  data: dataSlide,
  ui: uiSlide,
});
