import {AuthorizationStatus, CityType, SortingType, ErrorMessage, FetchStatus} from '../const';
import {Offer} from './offer';
import {AuthData} from './auth-data';
import {Review} from './review';

export type State = {
  city: CityType,
  sort: SortingType,
  offer: {
    data: Offer | null,
    fetchStatus: FetchStatus,
  },
  auth: {
    data: AuthData | null,
    error: ErrorMessage,
    status: AuthorizationStatus,
  },
  offers: {
    data: Offer[],
    fetchStatus: FetchStatus,
  },
  nearbyOffers: {
    data: Offer[],
    fetchStatus: FetchStatus,
  },
  favoriteOffers: {
    data: Offer[],
    fetchStatus: FetchStatus,
  },
  reviews: {
    data: Review[],
    fetchStatus: FetchStatus,
  },
  review: {
    fetchStatus: FetchStatus,
  }
}
