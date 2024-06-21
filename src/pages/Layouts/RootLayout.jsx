// @vendors
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

// @components
import { Dictionary, Header, Footer, StickyCalendar } from '@components';

export const RootLayout = () => {
  const { showDictionary } = useSelector((state) => state.ui.calendar);
  return (
    <>
      <div className="rootlayout__container">
        <Header />
        <main className="rootlayout__main">
          {/* <FloatButton /> */}
          <StickyCalendar />
          {showDictionary && <Dictionary />}
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};
