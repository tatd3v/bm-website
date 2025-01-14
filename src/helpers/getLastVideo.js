export const getLastVideo = (playlists) =>
  playlists.flatMap((item) => item.videos.map((video) => video.videoId))[0];
