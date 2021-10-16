import { Offer } from '../../types/offer';
import FavoritesItem from '../favorite-item/favorite-item';

function FavoritesCityGroup(props: {offers: Offer[]}): JSX.Element {
  const {offers} = props;
  const citiesName = new Set('');
  offers.forEach((item) => citiesName.add(item.city));
  const citiesGroup = [...citiesName].map((item, index) => (
    {
      id: index,
      name: item,
      places: offers.filter((offer) => offer.city === item),
    }
  ));

  return (
    <>
      {citiesGroup.map((item) => <FavoritesItem key={item.id} offers={item.places} name={item.name} />)};
    </>
  );
}

export default FavoritesCityGroup;
