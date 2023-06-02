// @vendors
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  calendar: {
    eventData: {},
    showEvent: false,
  },
};

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialState,
  reducers: {
    setEventData: (state, action) => {
      state.calendar.eventData = action.payload;
    },
    setShowEvent: (state, action) => {
      state.calendar.showEvent = action.payload;
    },
  },
});

//export const {} = uiSlice.actions;

export default uiSlice.reducer;
