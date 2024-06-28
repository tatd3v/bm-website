// @components
import { PlaylistSidebar } from '@/components';

// @styles
import './_home.scss';

export const HomePage = () => {
  return <div className="home__container">{<PlaylistSidebar />}</div>;
};
