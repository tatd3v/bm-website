// @vendors
import { useEffect } from 'react';
import { Accordion, CloseButton } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

// @slices
import { closeSidebar, fetchPlaylists, setCurrentVideo } from '@app';

// @styles
import './_playlistSidebar.scss';

// @components
import { StickyButton } from '@components';

export default function PlaylistSidebar() {
  const dispatch = useDispatch();
  const playlists = useSelector((state) => state.youtubePlaylist.playlists);
  const status = useSelector((state) => state.youtubePlaylist.status);
  const error = useSelector((state) => state.youtubePlaylist.error);
  const isSidebarOpen = useSelector((state) => state.ui.youtube.sidebar.isOpen);

  console.log('Playlist', typeof playlists, playlists.length);
  console.log({ isSidebarOpen });

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPlaylists());
    }
  }, [status, dispatch]);

  const handleVideoClick = (videoId) => {
    dispatch(setCurrentVideo(videoId));
  };

  const handleCloseSidebar = () => {
    dispatch(closeSidebar());
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  console.log({ playlists });

  return (
    <>
      <div
        id="sidebar"
        className={`ps__container ${isSidebarOpen ? 'open' : ''}`}
      >
        <div className="ps__sidebar-header">
          <div className="ps__close-button" onClick={handleCloseSidebar}>
            <CloseButton />
          </div>
          <h4 className="ps__sidebar-title">Balls Playlist</h4>
        </div>
        <Accordion className="ps__accordion-container">
          {playlists.length > 0 ? (
            playlists.map((playlist) => (
              <Accordion.Item key={playlist.id} eventKey="0">
                <Accordion.Header>{playlist.title}</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    {playlist.videos &&
                      playlist.videos.map((item) => (
                        <li key={item.videoId}>
                          <button
                            onClick={() => handleVideoClick(item.videoId)}
                          >
                            {item.title}
                          </button>
                        </li>
                      ))}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            ))
          ) : (
            <div>No playlists found</div>
          )}
        </Accordion>
      </div>
      <StickyButton />
    </>
  );
}
