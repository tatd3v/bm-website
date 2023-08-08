// @vendors
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// @src
import './App.css';

// @components
import { BackgroundVideo, EventsCalendar, Header } from './components';

// @pages
//import { Home } from './pages';

// @app
import { setEventsData } from './app';

// @helpers
import { eventsData } from './helpers';

const App = () => {
  const dispatch = useDispatch();
  const showCalendar = useSelector((state) => state.ui.calendar.showCalendar);

  useEffect(() => {
    dispatch(setEventsData(eventsData));
  }, []);

  return (
    <div className="App">
      <BackgroundVideo blur={1}>
        <Header />
        {showCalendar && <EventsCalendar />}
      </BackgroundVideo>
      {/* <Home /> */}
    </div>
  );
};

export default App;
