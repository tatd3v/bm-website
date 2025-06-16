// @components
import { YoutubeEmbed } from '@/components';

// @pages
import { YoutubeLayout } from '@pages';

// @styles
import './_home.scss';

export const HomePage = () => {
  return (
    <div className="home__container">
      <YoutubeLayout>
        <YoutubeEmbed />
      </YoutubeLayout>
    </div>
  );
};
