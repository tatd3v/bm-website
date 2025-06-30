// @vendors
import { useDispatch } from 'react-redux';
import { NavigationMenu } from 'radix-ui';
import { useState } from 'react';

// @components
import { Hamburglar } from '@ui';

// @styles
import './_subNavbar.scss';

const SubNavbar = () => {
  const dispatch = useDispatch();

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  // const onClickDictionary = () => {
  //   dispatch(setShowCalendar(false));
  //   dispatch(setShowDictionary(true));
  // };

  return (
    <>
      <NavigationMenu.Root className="sub-navbar__root">
        <div className="sub-navbar__container container-fluid">
          <div className="sub-navbar__mobile-toggle">
            <Hamburglar isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
          </div>

          <NavigationMenu.List
            className={`sub-navbar__list ${isMobileMenuOpen ? 'sub-navbar__mobile-open' : ''}`}
          >
            <NavigationMenu.Link className="sub-navbar__link">
              Historia y Raíces
            </NavigationMenu.Link>

            <NavigationMenu.Indicator className="sub-navbar__indicator">
              <div className="sub-navbar__arrow" />
            </NavigationMenu.Indicator>
          </NavigationMenu.List>

          <div className="sub-navbar__viewport-position">
            <NavigationMenu.Viewport className="sub-navbar__viewport" />
          </div>
        </div>
      </NavigationMenu.Root>
    </>
  );
};

SubNavbar.displayName = 'SubNavbar';

export default SubNavbar;
