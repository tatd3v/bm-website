// @vendors
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

// @components
import {
  BackgroundVideo,
  Dictionary,
  EventsCalendar,
  Header,
  Footer,
} from '../../components';

export const RootLayout = () => {
  const { showCalendar, showDictionary } = useSelector(
    (state) => state.ui.calendar
  );
  return (
    <>
      <BackgroundVideo blur={1}>
        <Header />
        <main>
          {showCalendar && <EventsCalendar />}
          {showDictionary && <Dictionary />}
          <Outlet />
        </main>
      </BackgroundVideo>
      <Footer />
    </>
  );
};
