// @vendors
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  calendar: {
    eventsData: [],
    eventInfo: {},
  },
  dictionary: {
    searchedWord: [],
    wasFound: false,
    wordsData: [],
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
    setSearchedWord: (state, action) => {
      state.dictionary.searchedWord = action.payload;
    },
    setWasFound: (state, action) => {
      state.dictionary.wasFound = action.payload;
    },
    setWordsData: (state, action) => {
      state.dictionary.wordsData = action.payload;
    },
  },
});

export const {
  setEventsData,
  setEventInfo,
  setSearchedWord,
  setWasFound,
  setWordsData,
} = dataSlice.actions;

export default dataSlice.reducer;
