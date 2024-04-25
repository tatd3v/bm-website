// @vendors
import { useSelector } from 'react-redux';

// @assets
import { voguerLoader } from '../../assets';

// @components
import { LoadingWord } from './LoadingWord';

// @styles
import './loading.scss';

export const Loading = ({ voguerSize = 100, loaderHeight = 100 }) => {
  const { hide } = useSelector((state) => state.ui.loading);
  return (
    <div
      className="loading-container"
      style={{ height: `${loaderHeight}px`, display: `${hide && 'none'}` }}
    >
      <LoadingWord />
      <img
        src={voguerLoader}
        alt="voguer"
        style={{ height: `${voguerSize}px`, width: `${voguerSize}px` }}
      />
    </div>
  );
};
