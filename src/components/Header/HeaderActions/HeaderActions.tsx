import React from "react";

import { NavigationLink } from "../Navigation/NavigatioLink";
import { IconLinks } from "./IconLinks";

import "./HeaderActions.scss";
import { useTheme } from "../../../contexts/ThemeContext";

import iconSun from '../../../images/icons/icon-sun.svg';
import iconMoon from '../../../images/icons/icon-moon.svg';

const ACTIONS_PAGES = ["favorites", "cart"];

export const HeaderActions = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="Actions">

    <button
      aria-label="Toggle Dark Mode"
      className="navigation-link navigation-switch"
      onClick={toggleTheme}
    >
      <img
        className="navigation-switch__image"
        alt="mode"
        src={theme === 'dark' ? (iconMoon) : (iconSun)}
      />
    </button>
  
      {ACTIONS_PAGES.map((currentAction) => (
        <NavigationLink
          to={currentAction}
          type="icon"
          aria-label={currentAction}
          key={currentAction}
        >
          <IconLinks type={currentAction as "favorites" | "cart"} />
        </NavigationLink>
      ))}
    </div>
  );
};
