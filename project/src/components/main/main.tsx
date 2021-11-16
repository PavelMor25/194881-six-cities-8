import {State} from '../../types/state';
import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect, useState} from 'react';
import MainScreenTabs from '../main-screen-tabs/main-screen-tabs';
import MainScreenSort from '../main-screen-sort/main-screen-sort';
import OfferList from '../offer-list/offer-list';
import Header from '../headers/header';
import Map from '../map/map';
import { getOffersByCity, getSortOffers } from '../utils/utils';
import {FetchStatus} from '../../const';
import {getOffersAction} from '../../store/api-actions';
import Loader from '../loader/loader';

function Main(): JSX.Element {
  const {city, offers, sort} = useSelector((state: State) => state);
  const currentOffers = getOffersByCity(offers.data, city);
  const currentSort = getSortOffers(currentOffers, sort);
  const [offerId, setOfferId] = useState(-1);
  const dispatch = useDispatch();

  useEffect(() => {
    if (offers.fetchStatus === FetchStatus.Unknown) {
      dispatch(getOffersAction());
    }
  }, [dispatch, offers.fetchStatus]);

  if (offers.fetchStatus === FetchStatus.Loading) {
    return <Loader />;
  }

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className={`page__main page__main--index ${!currentSort.length ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <MainScreenTabs />
        <div className="cities">
          <div className={`cities__places-container container ${!currentSort.length ? 'cities__places-container--empty' : ''}`}>
            {Boolean(currentSort.length) && (
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{currentSort.length} places to stay in Amsterdam</b>
                <MainScreenSort />
                <OfferList offers={currentSort} setOfferId={setOfferId}/>
              </section>)}
            {!currentSort.length && (
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property available at the moment in {city} {currentSort.length}</p>
                </div>
              </section>)}
            <div className="cities__right-section">
              {currentSort.length && <Map city={currentSort[0].city} selectedOffer={offerId} offers={currentSort} renderPlace={'cities'}/>}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
