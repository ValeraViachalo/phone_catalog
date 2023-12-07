import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
} from 'react-router-dom';

import { CartContextProvider } from './contexts/CartContextProvider';
import { FavoriteContextProvider } from './contexts/FavoriteContextProvider';
import App from './App';

import './styles/main.scss';
import { ThemeProvider } from './contexts/ThemeContext';

ReactDOM.render(
  <Router>
    <CartContextProvider>
      <FavoriteContextProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </FavoriteContextProvider>
    </CartContextProvider>
  </Router>,
  document.getElementById('root'),
);
