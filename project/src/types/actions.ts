import {ActionType, AuthorizationStatus, CityType, SortingType, ErrorMessage, FetchStatus} from '../const';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from './state';
import {Offer} from './offer';
import {AuthData} from './auth-data';
import {Review, UserReview} from './review';

export type SetCity = {
  type: ActionType.SetCity,
  payload: CityType,
};

export type LoadOffers = {
  type: ActionType.LoadOffers,
  payload: {
    data: Offer[],
  },
};

export type LoadOffer = {
  type: ActionType.LoadOffer,
  payload: {
    data: Offer,
  },
};

export type SendReview = {
  type: ActionType.SendReview,
  payload: {
    data: UserReview,
  },
};

export type SetReviewFetchStatus = {
  type: ActionType.SetReviewFetchStatus,
  payload: {
    fetchStatus: FetchStatus,
  },
};

export type SetOfferFetchStatus = {
  type: ActionType.SetOfferFetchStatus,
  payload: {
    fetchStatus: FetchStatus,
  },
};

export type LoadNearbyOffers = {
  type: ActionType.LoadNearbyOffers,
  payload: {
    data: Offer[],
  },
};

export type SetNearbyOffersFetchStatus = {
  type: ActionType.SetNearbyOffersFetchStatus,
  payload: {
    fetchStatus: FetchStatus,
  },
};

export type LoadReviews = {
  type: ActionType.LoadReviews,
  payload: {
    data: Review[],
  },
};

export type SetReviewsFetchStatus = {
  type: ActionType.SetReviewsFetchStatus,
  payload: {
    fetchStatus: FetchStatus,
  },
};

export type SetOffersFetchStatus = {
  type: ActionType.SetOffersFetchStatus,
  payload: {
    fetchStatus: FetchStatus,
  },
};

export type LoadFavoriteOffers = {
  type: ActionType.LoadFavoriteOffers,
  payload: {
    data: Offer[],
  },
};

export type SetFavoriteOffersFetchStatus = {
  type: ActionType.SetFavoriteOffersFetchStatus,
  payload: {
    fetchStatus: FetchStatus,
  },
};

export type SetSorting = {
  type: ActionType.SetSorting,
  payload: SortingType,
};

export type RequireAuthorization = {
  type: ActionType.RequireAuthorization,
  payload: AuthorizationStatus,
};

export type RequireLogout = {
  type: ActionType.RequireLogout,
};

export type SetAuthData = {
  type: ActionType.SetAuthData,
  payload: {
    data: AuthData,
  },
};

export type SetAuthError = {
  type: ActionType.SetAuthError,
  payload: {
    error: ErrorMessage,
  },
};

export type Actions =
| SetCity
| SetSorting
| LoadOffer
| SetOfferFetchStatus
| LoadOffers
| SetOffersFetchStatus
| LoadNearbyOffers
| SetNearbyOffersFetchStatus
| LoadFavoriteOffers
| SetFavoriteOffersFetchStatus
| LoadReviews
| SetReviewsFetchStatus
| RequireAuthorization
| RequireLogout
| SetAuthData
| SendReview
| SetReviewFetchStatus
| SetAuthError;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
