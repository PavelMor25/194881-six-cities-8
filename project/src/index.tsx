import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';


const Settings = {
  CARDS_AMOUNT: new Array(5).fill(1),
};

ReactDOM.render(
  <React.StrictMode>
    <App
      cardsAmount = {Settings.CARDS_AMOUNT}
    />
  </React.StrictMode>,
  document.getElementById('root'));
