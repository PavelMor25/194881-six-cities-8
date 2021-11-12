import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {createStore} from '@reduxjs/toolkit';
import {reducer} from './store/reducer';
import {setOffers} from './store/actions';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { offers } from './mocks/offer-mock';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

store.dispatch(setOffers(offers));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        offers = {offers}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
