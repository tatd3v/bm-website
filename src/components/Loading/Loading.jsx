// @vendors
import { useSelector } from 'react-redux';

// @assets
import { voguerLoader } from '../../assets';

// @components
import { LoadingWord } from './LoadingWord';

// @styles
import './loading.scss';

export const Loading = () => {
  const { hide } = useSelector(state => state.ui.loading);

  return (
    <div
      className="loading-container"
      style={{
        display: hide ? 'none' : 'flex',
      }}
    >
      <LoadingWord />
      <img src={voguerLoader} alt="voguer" className="loading-voguer" />
    </div>
  );
};
