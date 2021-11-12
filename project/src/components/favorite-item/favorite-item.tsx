import { Offer } from '../../types/offer';
import FavoritesCard from '../favorites-card/favorites-card';

type Props = {
  name: string,
  offers: Offer[],
}

function FavoritesItem({name, offers}: Props): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{name}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {offers.map((item) => <FavoritesCard key={item.id} offer={item} />)}
      </div>
    </li>
  );
}

export default FavoritesItem;
