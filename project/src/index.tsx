import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { offers } from './mocks/offer-mock';

ReactDOM.render(
  <React.StrictMode>
    <App
      offers = {offers}
    />
  </React.StrictMode>,
  document.getElementById('root'));
