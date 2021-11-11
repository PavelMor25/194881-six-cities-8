import {ActionType, CityType, SortingType} from '../const';
import {Offer} from './offer';

export type SetCity = {
  type: ActionType.SetCity,
  payload: CityType,
};

export type SetOffers = {
  type: ActionType.SetOffers,
  payload: Offer[] | [],
};

export type SetSorting = {
  type: ActionType.SetSorting,
  payload: SortingType,
};

export type Actions =
  | SetCity
  | SetOffers
  | SetSorting;
