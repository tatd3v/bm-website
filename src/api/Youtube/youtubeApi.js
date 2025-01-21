// @vendors
import axios from 'axios';

const YOUTUBE_API_KEY = process.env.VITE_YOUTUBE_API_KEY;

export async function fetchMultiplePlaylists(channelId) {
  try {
    const playlistsResponse = await axios.get(
      `https://www.googleapis.com/youtube/v3/playlists`,
      {
        params: {
          part: 'snippet',
          channelId: channelId,
          maxResults: 50,
          key: YOUTUBE_API_KEY,
        },
      }
    );

    const playlistIds = playlistsResponse.data.items.map(
      (playlist) => playlist.id
    );

    const playlists = await Promise.all(
      playlistIds.map(async (playlistId) => {
        const playlistItemsResponse = await axios.get(
          `https://www.googleapis.com/youtube/v3/playlistItems`,
          {
            params: {
              part: 'snippet',
              playlistId: playlistId,
              maxResults: 50,
              key: YOUTUBE_API_KEY,
            },
          }
        );

        const videos = playlistItemsResponse.data.items.map((item) => ({
          videoId: item.snippet.resourceId.videoId,
          title: item.snippet.title,
        }));

        return {
          id: playlistId,
          title: playlistsResponse.data.items.find(
            (playlist) => playlist.id === playlistId
          ).snippet.title,
          videos: videos,
        };
      })
    );

    return playlists;
  } catch (error) {
    console.error('Failed to fetch playlists:', error);
    throw new Error('Failed to fetch playlists');
  }
}
