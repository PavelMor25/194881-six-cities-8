import {Offer} from '../../types/offer';
import Card from '../card/card';

function OfferList(props: {offers: Offer[], setOfferId: React.Dispatch<React.SetStateAction<number>>}): JSX.Element {
  const {offers, setOfferId} = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((element) => <Card key={element.id} offer={element} setOfferId={setOfferId} />)}
    </div>
  );
}

export default OfferList;
