// @vendors
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

// @app
import { setEventsData, setIsMobile, setWordsData } from './app';

// @helpers
import { eventsData, setAppHeight, words } from './helpers';

// @pages
import { ErrorPage, HomePage, RootLayout } from './pages';
import { GalleryByBall, GalleryLayout } from './pages';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setAppHeight();

    window.addEventListener('resize', setAppHeight);

    dispatch(setEventsData(eventsData));
    dispatch(setWordsData(words));
    dispatch(setIsMobile(window.innerWidth <= 991 ? true : false));

    return () => {
      window.removeEventListener('resize', setAppHeight);
    };
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
