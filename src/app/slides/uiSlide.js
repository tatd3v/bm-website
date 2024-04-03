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
<<<<<<< HEAD
  isMobile: false,
=======
>>>>>>> main
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialState,
  reducers: {
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
<<<<<<< HEAD
  setIsMobile,
=======
>>>>>>> main
  setShowCalendar,
  setShowDictionary,
  setShowEvent,
  setShowSubNavbar,
} = uiSlice.actions;

export default uiSlice.reducer;
