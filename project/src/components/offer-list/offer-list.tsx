import {Offer} from '../../types/offer';
import Card from '../card/card';
import { useState } from 'react';

function OfferList(props: {offers: Offer[]}): JSX.Element {
  const {offers} = props;
  const [offerId, setOfferId] = useState(-1);
  // eslint-disable-next-line no-console
  console.log(offerId);
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((element) => <Card key={element.id} offer={element} setOfferId={setOfferId} />)}
    </div>
  );
}

export default OfferList;
