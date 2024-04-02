// @vendors
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StickyContainer, Sticky } from 'react-sticky';

// @components
import {
  BackgroundVideo,
  Dictionary,
  EventsCalendar,
  Header,
} from '../../components';

export const RootLayout = () => {
  const { showCalendar, showDictionary } = useSelector(
    (state) => state.ui.calendar
  );
  return (
    <>
      <StickyContainer>
        <BackgroundVideo blur={1}>
          <Header />
          {showCalendar && <EventsCalendar />}
          {showDictionary && <Dictionary />}

          <Outlet />
        </BackgroundVideo>
      </StickyContainer>
    </>
  );
};
