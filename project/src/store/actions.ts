import {ActionType, AuthorizationStatus, CityType, ErrorMessage, SortingType, FetchStatus} from '../const';
import {Offer} from '../types/offer';
import {SetCity, LoadOffers, SetSorting, LoadFavoriteOffers, SetOffersFetchStatus, SendReview, SetReviewFetchStatus, SetFavoriteOffersFetchStatus,  SetAuthData, SetAuthError, LoadReviews, SetReviewsFetchStatus, SetOfferFetchStatus, LoadOffer, LoadNearbyOffers, SetNearbyOffersFetchStatus} from '../types/actions';
import {AuthData} from '../types/auth-data';
import {Review, UserReview} from '../types/review';

export const setCity = (city: CityType): SetCity => ({
  type: ActionType.SetCity,
  payload: city,
} as const);

export const setSorting = (sorting: SortingType): SetSorting => ({
  type: ActionType.SetSorting,
  payload: sorting,
} as const);

export const loadOffers = (offers: Offer[]): LoadOffers => ({
  type: ActionType.LoadOffers,
  payload: {
    data: offers,
  },
} as const);

export const loadOffer = (offer: Offer): LoadOffer => ({
  type: ActionType.LoadOffer,
  payload: {
    data: offer,
  },
} as const);

export const setOfferFetchStatus = (fetchStatus: FetchStatus): SetOfferFetchStatus => ({
  type: ActionType.SetOfferFetchStatus,
  payload: {
    fetchStatus: fetchStatus,
  },
} as const);

export const setOffersFetchStatus = (fetchStatus: FetchStatus): SetOffersFetchStatus => ({
  type: ActionType.SetOffersFetchStatus,
  payload: {
    fetchStatus: fetchStatus,
  },
} as const);

export const loadNearbyOffers = (nearOffers: Offer[]): LoadNearbyOffers => ({
  type: ActionType.LoadNearbyOffers,
  payload: {
    data: nearOffers,
  },
} as const);

export const setNearbyOffersFetchStatus = (fetchStatus: FetchStatus): SetNearbyOffersFetchStatus => ({
  type: ActionType.SetNearbyOffersFetchStatus,
  payload: {
    fetchStatus: fetchStatus,
  },
} as const);

export const loadReviews = (reviews: Review[]): LoadReviews => ({
  type: ActionType.LoadReviews,
  payload: {
    data: reviews,
  },
} as const);

export const setReviewsFetchStatus = (fetchStatus: FetchStatus): SetReviewsFetchStatus => ({
  type: ActionType.SetReviewsFetchStatus,
  payload: {
    fetchStatus: fetchStatus,
  },
} as const);

export const sendReview = (review: UserReview): SendReview => ({
  type: ActionType.SendReview,
  payload: {
    data: review,
  },
} as const);

export const setReviewFetchStatus = (fetchStatus: FetchStatus): SetReviewFetchStatus => ({
  type: ActionType.SetReviewFetchStatus,
  payload: {
    fetchStatus: fetchStatus,
  },
} as const);

export const loadFavoriteOffers = (favoriteOffers: Offer[]): LoadFavoriteOffers => ({
  type: ActionType.LoadFavoriteOffers,
  payload: {
    data: favoriteOffers,
  },
} as const);

export const setFavoriteOffersFetchStatus = (fetchStatus: FetchStatus): SetFavoriteOffersFetchStatus => ({
  type: ActionType.SetFavoriteOffersFetchStatus,
  payload: {
    fetchStatus: fetchStatus,
  },
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);

export const setAuthData = (data: AuthData | null): SetAuthData => ({
  type: ActionType.SetAuthData,
  payload: {
    data: data,
  },
} as const);

export const setAuthError = (error: ErrorMessage): SetAuthError => ({
  type: ActionType.SetAuthError,
  payload: {
    error: error,
  },
} as const);

