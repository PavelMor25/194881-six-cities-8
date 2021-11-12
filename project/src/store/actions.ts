import {ActionType, CityType, SortingType} from '../const';
import {Offer} from '../types/offer';
import {SetCity, SetOffers, SetSorting} from '../types/actions';

const setCity = (city: CityType): SetCity => ({
  type: ActionType.SetCity,
  payload: city,
});

const setOffers = (offers: Offer[]): SetOffers => ({
  type: ActionType.SetOffers,
  payload: offers,
});

const setSorting = (sorting: SortingType): SetSorting => ({
  type: ActionType.SetSorting,
  payload: sorting,
});

export {setCity, setOffers, setSorting};
