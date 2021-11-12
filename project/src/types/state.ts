import {CityType, SortingType} from '../const';
import {Offer} from './offer';

export type State = {
  city: CityType,
  offers: Offer[],
  sort: SortingType,
}
