import React from 'react';

import { Ping } from '@uiball/loaders';
import './Loader.scss';
import { useTheme } from '../../contexts/ThemeContext';

export const Loader = () => {
  const themeContext = useTheme();

  const getTheme = () => {
    if (themeContext) {
      const { theme } = themeContext;
      const themeMode = theme;

      return themeMode;
    }

    return 'light';
  };

  return (
    <div className="loader">
      <Ping size={65} speed={1.8} color={getTheme() === 'dark' ? 'white' : 'black'} />
    </div>
  );
};
