// @vendors
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

// @components
import {
  BackgroundVideo,
  Dictionary,
  EventsCalendar,
  Header,
  StickyNav,
} from '../../components';

export const RootLayout = () => {
  const { showCalendar, showDictionary } = useSelector(
    (state) => state.ui.calendar
  );
  return (
    <div>
      <BackgroundVideo blur={1}>
        <Header />

        {showCalendar && <EventsCalendar />}
        {showDictionary && <Dictionary />}

        <Outlet />
        <StickyNav />
      </BackgroundVideo>
    </div>
  );
};
