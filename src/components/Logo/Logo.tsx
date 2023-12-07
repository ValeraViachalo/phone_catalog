import React from "react";

import { Link } from "react-router-dom";
import "./Logo.scss";
import LogoImageDark from "../../images/icons/LOGO.svg";
import LogoImageLight from "../../images/icons/LOGO-white.svg";
import { useTheme } from "../../contexts/ThemeContext";

export const Logo = () => {
  const { theme } = useTheme();

  const handleLogo = () => {
    switch(theme) {
      case('light'):
        return LogoImageDark;

      case('dark'):
        return LogoImageLight;

      default:
          throw new Error()
    }
  }

  return (
    <Link to="/" className="Logo">
      <img src={handleLogo()} alt="Logo" className="Logo--image" />
    </Link>
  );
};
3