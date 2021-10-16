import Header from '../headers/header';
import FavoritesCityGroup from '../favorites-city-group/favorites-city-group';
import { Offer } from '../../types/offer';

function Favorites(props: {offers: Offer[]}): JSX.Element {
  const {offers} = props;
  const favoritesOffer = offers.filter((item) => item.isFavorite);
  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <FavoritesCityGroup offers={favoritesOffer} />
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}

export default Favorites;
