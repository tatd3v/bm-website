// @vendors
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

// @components
import { PlaylistSidebar, StickyButton } from '@components';

// @slices
import { openSidebar } from '@app';

// @styles
import './_youtubeLayout.scss';

const YoutubeLayout = ({ children }) => {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector(state => state.ui.youtube.sidebar.isOpen);

  const handleOpenSidebar = () => {
    dispatch(openSidebar());
  };
  return (
    <div className={`yl__wrapper ${isSidebarOpen ? 'with-sidebar' : ''}`}>
      <PlaylistSidebar />
      {children}
      <StickyButton
        onClick={handleOpenSidebar}
        isOpen={isSidebarOpen}
        parentComponent="sidebar"
      />
    </div>
  );
};

YoutubeLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default YoutubeLayout;
