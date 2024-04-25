// @vendors
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  calendar: {
    showCalendar: false,
    showDictionary: false,
    showEvent: false,
  },
  header: {
    showSubNavbar: false,
  },
  isMobile: false,
  loading: {
    hide: false,
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialState,
  reducers: {
    setHideLoading: (state, action) => {
      state.loading.hide = action.payload;
    },
    setIsMobile: (state, action) => {
      state.isMobile = action.payload;
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
    setShowSubNavbar: (state) => {
      state.header.showSubNavbar = !state.header.showSubNavbar;
    },
  },
});

export const {
  setHideLoading,
  setIsMobile,
  setShowCalendar,
  setShowDictionary,
  setShowEvent,
  setShowSubNavbar,
} = uiSlice.actions;

export default uiSlice.reducer;
