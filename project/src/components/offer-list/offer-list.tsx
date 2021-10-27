import {Offer} from '../../types/offer';
import Card from '../card/card';

function OfferList(props: {offers: Offer[], setOfferId: React.Dispatch<React.SetStateAction<number>>, isMainRender? : boolean}): JSX.Element {
  const {offers, setOfferId, isMainRender = true} = props;
  return (
    <div className={`places__list ${isMainRender ? 'cities__places-list tabs__content' :  'near-places__list'}`}>
      {offers.map((element) => <Card key={element.id} offer={element} setOfferId={setOfferId} isMainRender={isMainRender} />)}
    </div>
  );
}

export default OfferList;
