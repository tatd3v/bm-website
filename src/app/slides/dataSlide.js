// @vendors
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  calendar: {
    eventsData: [],
    eventInfo: {},
  },
};

const dataSlice = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: {
    setEventsData: (state, action) => {
      state.calendar.eventsData = action.payload;
    },
    setEventInfo: (state, action) => {
      state.calendar.eventInfo = action.payload;
    },
  },
});

export const { setEventsData, setEventInfo } = dataSlice.actions;

export default dataSlice.reducer;
