// @components
import { SocialMediaIcon } from './SocialMediaIcon';

// @data
import { logos } from './iconsData';

// @styles
import './_socialMediaNav.scss';

export const SocialMediaNav = () => {
  return (
    <div className="smn_container">
      {logos.map((logo, index) => {
        return (
          <SocialMediaIcon
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
