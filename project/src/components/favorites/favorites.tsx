import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {State} from '../../types/state';
import Header from '../headers/header';
import FavoritesItem from '../favorite-item/favorite-item';
import { uniqCity } from '../utils/utils';
import {FetchStatus} from '../../const';
import {getFavoriteOffersAction} from '../../store/api-actions';
import Loader from '../loader/loader';

function Favorites(): JSX.Element {
  const {data: favoriteOffers, fetchStatus} = useSelector((state: State) => state.favoriteOffers);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus === FetchStatus.Unknown) {
      dispatch(getFavoriteOffersAction());
    }
  }, [dispatch, fetchStatus]);

  if (fetchStatus === FetchStatus.Loading) {
    return <Loader />;
  }

  const citesGroup = uniqCity(favoriteOffers);

  return (
    <div className={`page ${!favoriteOffers.length ? 'page--favorites-empty' : ''}`}>
      <Header />
      {Boolean(favoriteOffers.length) &&
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {citesGroup.map((city) => <FavoritesItem key={city} offers={favoriteOffers.filter((item) => city === item.city.name)} name={city} />)}
            </ul>
          </section>
        </div>
      </main>}
      {!favoriteOffers.length && (
        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan your future trips.</p>
              </div>
            </section>
          </div>
        </main>
      )}
      <footer className="footer container">
        <a className="footer__logo-link" href="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}

export default Favorites;
