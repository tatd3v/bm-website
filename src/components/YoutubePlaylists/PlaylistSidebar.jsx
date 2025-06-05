// @vendors
import { useEffect } from 'react';
import { Accordion, Button, CloseButton, Stack } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

// @slices
import { closeSidebar, fetchPlaylists, setCurrentVideo } from '@app';

// @components
import { Loading } from '@components';

// @styles
import './_playlistSidebar.scss';

export default function PlaylistSidebar() {
  const dispatch = useDispatch();
  const { currentVideo, error, playlists, status } = useSelector(
    (state) => state.youtubePlaylist
  );
  const isSidebarOpen = useSelector((state) => state.ui.youtube.sidebar.isOpen);

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
    return <Loading />;
  }

  if (status === 'failed' && playlists.length === 0) {
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <>
      <div
        id="sidebar"
        className={`ps__sidebar-container ${isSidebarOpen ? 'open' : ''}`}
      >
        <div className="ps__sidebar-header">
          <div className="ps__close-button" onClick={handleCloseSidebar}>
            <CloseButton />
          </div>
          <h4 className="ps__sidebar-title">Lista de Balls</h4>
        </div>
        <Accordion className="ps__accordion-container" defaultActiveKey={0}>
          {playlists.length > 0 ? (
            playlists.map((playlist, index) => (
              <Accordion.Item key={playlist.id} eventKey={index}>
                <Accordion.Header>{playlist.title}</Accordion.Header>
                <Accordion.Body>
                  <Stack direction="vertical" gap={2}>
                    {playlist.videos &&
                      playlist.videos.map((item) => (
                        <Button
                          className={`ps__video-button ${currentVideo === item.videoId && 'animate'
                            }`}
                          variant="outline-light"
                          key={item.videoId}
                          onClick={() => handleVideoClick(item.videoId)}
                        >
                          {item.title}
                        </Button>
                      ))}
                  </Stack>
                </Accordion.Body>
              </Accordion.Item>
            ))
          ) : (
            <div>No se han encontrado listas de Youtube.</div>
          )}
        </Accordion>
      </div>
    </>
  );
}
