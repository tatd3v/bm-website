// @vendors
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  calendar: {
    isMobile: false,
    showCalendar: false,
    showDictionary: false,
    showEvent: false,
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
  },
});

export const { setShowCalendar, setShowDictionary, setShowEvent } = uiSlice.actions;

export default uiSlice.reducer;
