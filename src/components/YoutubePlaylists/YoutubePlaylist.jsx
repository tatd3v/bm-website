// @vendors
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

// @slices
import { fetchPlaylists } from '@app/slices';

const urls = [];

export default function YoutubePlaylist() {
  const dispatch = useDispatch();
  const playlist = useSelector((state) => state.playlist.playlist);
  const status = useSelector((state) => state.playlist.status);
  const error = useSelector((state) => state.playlist.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPlaylists(urls));
    }
  }, [status, dispatch, urls]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <Container>
      <div className="youtubeplaylist__viewer"></div>
    </Container>
  );
}
