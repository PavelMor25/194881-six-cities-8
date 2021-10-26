import Header from '../headers/header';
import FavoritesItem from '../favorite-item/favorite-item';
import { Offer } from '../../types/offer';
import { uniqCity } from '../utils/utils';

function Favorites(props: {offers: Offer[]}): JSX.Element {
  const {offers} = props;
  const citesGroup = uniqCity(offers);
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {citesGroup.map((city) => <FavoritesItem key={city} offers={offers.filter((item) => city === item.city.name)} name={city} />)}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="/">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}

export default Favorites;
