export enum AppRoute {
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id',
  Root = '/'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const enum ErrorMessage {
  NoFailure = '',
  FailToLoadOffer = 'Failed to load rental place',
  FailToLoadOffers = 'Failed to load rental places',
  FailToLoadNearbyOffers = 'Failed to load nearby places',
  FailToLoadFavoriteOffers = 'Failed to load saved places',
  FailToLoadReviews = 'Failed to load reviews',
  FailToSendReview = 'Failed to send review',
}

export const APIRoute = {
  GetOffer: (id: string) => `/hotels/${id}`,
  GetOffers: () => '/hotels',
  GetNearbyOffers: (id: string) => `/hotels/${id}/nearby`,
  GetFavoriteOffers: () => '/favorite',
  GetReviews: (id: string) => `/comments/${id}`,
  PostReview: (id: string) => `/comments/${id}`,
  Login: () => '/login',
  Logout: () => '/logout',
} as const;

export enum FetchStatus {
  Success = 'SUCCESS',
  Fail = 'FAIL',
  Loading = 'LOADING',
  Unknown = 'UNKNOWN',
  NotFound = 'NOT_FOUND',
}

export enum CityType {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export enum ActionType {
  SetCity = 'main/setCity',
  SetSorting = 'main/setSorting',
  LoadOffers = 'data/loadOffers',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  SetOffersFetchStatus = 'data/setOffersFetchStatus',
  LoadFavoriteOffers = 'data/loadFavoriteOffers',
  SetFavoriteOffersFetchStatus = 'data/setFavoriteOffersFetchStatus',
  SetAuthData = 'user/setAuthData',
  SetAuthError = 'user/setAuthError',
  LoadOffer = 'data/loadOffer',
  SetOfferFetchStatus = 'data/setOfferFetchStatus',
  LoadNearbyOffers = 'data/loadNearOffers',
  SetNearbyOffersFetchStatus = 'data/setNearOffersFetchStatus',
  LoadReviews = 'data/loadReviews',
  SetReviewsFetchStatus = 'data/setReviewsFetchStatus',
  SendReview = 'data/sendReview',
  SetReviewFetchStatus = 'data/setReviewFetchStatus',
}

export enum SortingType {
  Popular = 'Popular',
  LowToHigh = 'Price: low to high',
  HighToLow = 'Price: high to low',
  Rating = 'Top rated first',
}

export const monthName: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
