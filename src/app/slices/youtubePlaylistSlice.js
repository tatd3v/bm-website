// @vendors
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// @api
import { fetchMultiplePlaylists } from '@api/Youtube';

const YOUTUBE_CHANNEL_ID = process.env.VITE_YOUTUBE_CHANNEL_ID;

const initialState = {
  currentVideo: '',
  playlists: [],
  status: 'idle',
  error: null,
};

export const fetchPlaylists = createAsyncThunk(
  'playlist/fetchPlaylists',
  async (_, thunkAPI) => {
    try {
      const playlists = await fetchMultiplePlaylists(YOUTUBE_CHANNEL_ID);
      return playlists;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to fetch playlists');
    }
  }
);

const youtubePlaylistSlice = createSlice({
  name: 'playlist',
  initialState,
  reducers: {
    setCurrentVideo: (state, action) => {
      state.currentVideo = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlaylists.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchPlaylists.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.error = null;
        state.playlists = action.payload.map((playlist) => ({
          id: playlist.id,
          title: playlist.title,
          videos: playlist.videos,
        }));
        state.currentVideo = action.payload.flatMap((item) =>
          item.videos.map((video) => video.videoId)
        )[0];
      })
      .addCase(fetchPlaylists.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Failed to fetch playlists';
      });
  },
});

export const { setCurrentVideo } = youtubePlaylistSlice.actions;

export default youtubePlaylistSlice.reducer;
