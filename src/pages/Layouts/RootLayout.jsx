// @vendors
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

// @components
import {
  Dictionary,
  EventsCalendar,
  Header,
  //FloatButton,
  Footer,
  StickyCalendar,
} from '@components';

export const RootLayout = () => {
  const { showCalendar, showDictionary } = useSelector(
    (state) => state.ui.calendar
  );
  return (
    <>
      <div className="rootlayout__container">
        <Header />
        <main>
          {/* <FloatButton /> */}
          <StickyCalendar />
          {showCalendar && <EventsCalendar />}
          {showDictionary && <Dictionary />}
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
};
