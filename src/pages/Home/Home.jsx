// @components
import { YoutubeEmbed } from '@/components';

// @styles
import './_home.scss';
import { YoutubeLayout } from '@pages';

export const HomePage = () => {
  return (
    <div className="home__container">
      <YoutubeLayout>
        <YoutubeEmbed />
      </YoutubeLayout>
    </div>
  );
};
