// @vendors
import { createSlice } from '@reduxjs/toolkit';

// @helpers
import { groupByYear } from '../../helpers';

const initialState = {
  calendar: {
    eventsByYear: {},
    eventsData: [],
    eventInfo: {},
  },
  dictionary: {
    searchedWord: [],
    wasFound: false,
    wordsData: [],
  },
  bottomSticky: {
    socialMedia: [],
  },
};

const dataSlice = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: {
    selectSocialMedia: (state) => {
      const logos = state.bottomSticky.socialMedia.map((logo) => logo);

      return logos;
    },
    setEventsData: (state, action) => {
      state.calendar.eventsData = action.payload;
      state.calendar.eventsByYear = groupByYear(action.payload);
    },
    setEventInfo: (state, action) => {
      state.calendar.eventInfo = action.payload;
    },
    setSocialMedia: (state, action) => {
      state.bottomSticky.socialMedia = action.payload;
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
  selectSocialMedia,
  setEventsData,
  setEventInfo,
  setSocialMedia,
  setSearchedWord,
  setWasFound,
  setWordsData,
} = dataSlice.actions;

export default dataSlice.reducer;
