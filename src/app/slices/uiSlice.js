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
  youtube: {
    sidebar: {
      isOpen: true,
    },
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    closeSidebar(state) {
      state.youtube.sidebar.isOpen = false;
    },
    openSidebar(state) {
      state.youtube.sidebar.isOpen = true;
    },
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
  closeSidebar,
  openSidebar,
  setHideLoading,
  setIsAnimating,
  setShowCalendar,
  setShowDictionary,
  setShowEvent,
} = uiSlice.actions;

export default uiSlice.reducer;
