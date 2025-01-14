// @vendors
import { useSelector } from 'react-redux';

// @styles
import './_youtubeEmbed.scss';

const YoutubeEmbed = () => {
  const { currentVideo } = useSelector((state) => state.youtubePlaylist);

  return (
    <div className="ye__responsive-container" id="player">
      <iframe
        src={`https://www.youtube.com/embed/${currentVideo}`}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default YoutubeEmbed;
