import React from 'react';

import { NavigationLink } from '../Navigation/NavigatioLink';
import { IconLinks } from './IconLinks';

import './HeaderActions.scss';
import { useTheme } from '../../../contexts/ThemeContext';

import iconSun from '../../../images/icons/icon-sun.svg';
import iconMoon from '../../../images/icons/icon-moon.svg';

const ACTIONS_PAGES = ['favorites', 'cart'];

export const HeaderActions = () => {
  const themeContext = useTheme();

  const getTheme = () => {
    if (themeContext) {
      const { theme } = themeContext;
      const themeMode = theme;

      return themeMode;
    }

    return 'light';
  };

  const getThemeToggle = () => {
    if (themeContext) {
      const { toggleTheme } = themeContext;
      const themeFunction = toggleTheme();

      return themeFunction;
    }

    return null;
  };

  return (
    <div className="Actions">
      <button
        type="button"
        aria-label="Toggle Dark Mode"
        className="navigation-link navigation-switch"
        onClick={getThemeToggle}
      >
        <img
          className="navigation-switch__image"
          alt="mode"
          src={getTheme() === 'dark' ? iconMoon : iconSun}
        />
      </button>
      {ACTIONS_PAGES.map((currentAction) => (
        <NavigationLink
          to={currentAction}
          type="icon"
          aria-label={currentAction}
          key={currentAction}
        >
          <IconLinks type={currentAction as 'favorites' | 'cart'} />
        </NavigationLink>
      ))}
    </div>
  );
};
