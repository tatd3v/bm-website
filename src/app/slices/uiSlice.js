// @vendors
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  calendar: {
    isAnimating: false,
    showCalendar: false,
    showDictionary: false,
    showEvent: false,
  },
  device: {
    appHeight: '100vh',
    isSafari: /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
  },
  loading: {
    hideLoading: false,
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialState,
  reducers: {
    setHideLoading: (state, action) => {
      state.loading.hideLoading = action.payload;
    },
    setIsAnimating: (state, action) => {
      state.calendar.isAnimating = action.payload;
    },
    setShowCalendar: (state, action) => {
      state.calendar.showCalendar = action.payload;
    },
    setShowDictionary: (state, action) => {
      state.calendar.showDictionary = action.payload;
    },
    setShowEvent: (state, action) => {
      state.calendar.showEvent = action.payload;
    },
  },
});

export const {
  setHideLoading,
  setIsAnimating,
  setShowCalendar,
  setShowDictionary,
  setShowEvent,
} = uiSlice.actions;

export default uiSlice.reducer;
