import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import MainScreenTabs from '../main-screen-tabs/main-screen-tabs';
import MainScreenSort from '../main-screen-sort/main-screen-sort';
import OfferList from '../offer-list/offer-list';
import Header from '../headers/header';
import {useState} from 'react';
import Map from '../map/map';
import { getOffersByCity, getSortOffers } from '../utils/utils';

const mapStateToProps = ({city, offers, sort}: State) => ({
  city,
  offers,
  sort,
});

const connector = connect(mapStateToProps);

function Main(props: ConnectedProps<typeof connector>): JSX.Element {
  const {city, offers, sort} = props;
  const currentOffers = getOffersByCity(offers, city);
  const currentSort = getSortOffers(currentOffers, sort);
  const [offerId, setOfferId] = useState(-1);

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
                  <p className="cities__status-description">We could not find any property available at the moment in {city}</p>
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

export {Main};
export default connector(Main);
