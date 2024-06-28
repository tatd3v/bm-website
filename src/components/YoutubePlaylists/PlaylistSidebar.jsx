// @vendors
import { useEffect } from 'react';
import { Accordion, Button, CloseButton, Stack } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

// @slices
import {
  closeSidebar,
  fetchPlaylists,
  openSidebar,
  setCurrentVideo,
} from '@app';

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

  const handleOpenSidebar = () => {
    dispatch(openSidebar());
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
        className={`ps__sidebar-container ${isSidebarOpen ? 'open' : ''}`}
      >
        <div className="ps__sidebar-header">
          <div className="ps__close-button" onClick={handleCloseSidebar}>
            <CloseButton />
          </div>
          <h4 className="ps__sidebar-title">Lista de Balls</h4>
        </div>
        <Accordion className="ps__accordion-container">
          {playlists.length > 0 ? (
            playlists.map((playlist, index) => (
              <Accordion.Item key={playlist.id} eventKey={index}>
                <Accordion.Header>{playlist.title}</Accordion.Header>
                <Accordion.Body>
                  <Stack direction="vertical" gap={2}>
                    {playlist.videos &&
                      playlist.videos.map((item) => (
                        <Button
                          className="ps__video-button"
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

        <div className="ps__sticky-button-container">
          <StickyButton
            onClick={handleOpenSidebar}
            isOpen={isSidebarOpen}
            parentComponent="sidebar"
          />
        </div>
      </div>
    </>
  );
}
