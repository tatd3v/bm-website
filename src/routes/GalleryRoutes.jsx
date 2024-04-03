// @vendors
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';

// @pages
import { Gallery } from '../pages/Gallery';

export const GalleryRoutes = () => {
  const { eventInfo } = useSelector((state) => state.data.eventInfo);

  return (
    <Routes>
      <Route
        path={`/gallery/${eventInfo?.title.toLowerCase()}`}
        element={<Gallery />}
      />
    </Routes>
  );
};
