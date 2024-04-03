// @vendors
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserRouter } from 'react-router-dom';

// @components

// @app
import { setEventsData, setWordsData } from './app';

// @helpers
import { eventsData, words } from './helpers';
import { setIsMobile } from './app/slides/uiSlide';

// @pages
import { ErrorPage, HomePage, RootLayout } from './pages';
import { RouterProvider } from 'react-router-dom';
import { GalleryLayout } from './pages/Layouts';
import { GalleryByBall } from './pages/Gallery/GalleryByBall';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setEventsData(eventsData));
    dispatch(setWordsData(words));
    dispatch(setIsMobile(window.innerWidth <= 990 ? true : false));
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: '/gallery', element: <GalleryLayout /> },
        { path: '/gallery/:eventPath', element: <GalleryByBall /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
