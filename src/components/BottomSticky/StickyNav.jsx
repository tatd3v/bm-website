// @vendors
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// @app
import { setSocialMedia } from '../../app';

// @components
import { StickyIcon } from './StickyIcon';

// @data
import { logos } from './iconsData';

// @styles
import './stickyNav.scss';

export const StickyNav = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSocialMedia(logos));
  }, []);

  return (
    <div className="sn_sticky-nav-container">
      <StickyIcon />
    </div>
  );
};
