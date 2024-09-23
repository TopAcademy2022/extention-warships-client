import React from 'react';
import ReactDOM from 'react-dom/client';
import GameField from './GameField';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GameField />
  </React.StrictMode>
);