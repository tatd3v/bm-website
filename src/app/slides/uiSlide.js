// @vendors
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  calendar: {
    isMobile: false,
    showCalendar: false,
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
    setShowEvent: (state, action) => {
      state.calendar.showEvent = action.payload;
    },
  },
});

export const { setShowCalendar, setShowEvent } = uiSlice.actions;

export default uiSlice.reducer;
