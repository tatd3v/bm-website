// @vendorss
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  eventsData: {},
};

const dataSlice = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: {
    setEventsData: (state, action) => {
      state.eventsData = action.payload;
    },
  },
});

export const { setEventsData } = dataSlice.actions;

export default dataSlice.reducer;
