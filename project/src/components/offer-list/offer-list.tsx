import {Offer} from '../../types/offer';
import Card from '../card/card';


function OfferList(props: {offers: Offer[]}): JSX.Element {
  const {offers} = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((element) => <Card key={element.id} offer={element} />)}
    </div>
  );
}

export default OfferList;
