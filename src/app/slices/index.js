import dataSlice, {
  setEventsData,
  setEventInfo,
  setSearchedWord,
  setWasFound,
  setWordsData,
} from './dataSlice';
import uiSlice, {
  closeSidebar,
  openSidebar,
  setShowCalendar,
  setShowDictionary,
  setShowEvent,
  setIsAnimating,
  setHideLoading,
} from './uiSlice';

import youtubePlaylistSlice, {
  fetchPlaylists,
  setCurrentVideo,
} from './youtubePlaylistSlice';

export {
  closeSidebar,
  openSidebar,
  dataSlice,
  fetchPlaylists,
  setCurrentVideo,
  setEventsData,
  setEventInfo,
  setHideLoading,
  setIsAnimating,
  setShowCalendar,
  setShowDictionary,
  setSearchedWord,
  setShowEvent,
  setWasFound,
  setWordsData,
  uiSlice,
  youtubePlaylistSlice,
};
