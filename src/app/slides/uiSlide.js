// @vendors
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  calendar: {
    isMobile: false,
    showCalendar: false,
    showDictionary: false,
    showEvent: false,
  },
  header: {
    showSubNavbar: false,
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialState,
  reducers: {
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
  setShowCalendar,
  setShowDictionary,
  setShowEvent,
  setShowSubNavbar,
} = uiSlice.actions;

export default uiSlice.reducer;
