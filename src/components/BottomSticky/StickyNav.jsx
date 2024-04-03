// @components
import { StickyIcon } from './StickyIcon';

// @data
import { logos } from './iconsData';

// @styles
import './stickyNav.scss';

export const StickyNav = () => {
  return (
    <div className="sn_sticky-nav-container">
      {logos.map((logo, index) => {
        return (
          <StickyIcon
            key={index}
            name={logo.name}
            source={logo.source}
            url={logo.url}
          />
        );
      })}
    </div>
  );
};
