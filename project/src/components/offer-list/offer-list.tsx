import {Offer} from '../../types/offer';
import Card from '../card/card';

type Props = {
  offers: Offer[],
  setOfferId:  React.Dispatch<React.SetStateAction<number>>,
  isMainRender?: boolean,
}

function OfferList({offers, setOfferId, isMainRender = true}: Props): JSX.Element {
  return (
    <div className={`places__list ${isMainRender ? 'cities__places-list tabs__content' :  'near-places__list'}`}>
      {offers.map((element) => <Card key={element.id} offer={element} setOfferId={setOfferId} isMainRender={isMainRender} />)}
    </div>
  );
}

export default OfferList;
