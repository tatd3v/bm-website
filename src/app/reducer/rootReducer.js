// @vendors
import { combineReducers } from '@reduxjs/toolkit';

// @slices
import { dataSlice, uiSlice, youtubePlaylistSlice } from '@app/slices';

export const rootReducer = combineReducers({
  data: dataSlice,
  ui: uiSlice,
  youtubePlaylist: youtubePlaylistSlice,
});
