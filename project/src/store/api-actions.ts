import {ThunkActionResult} from '../types/actions';
import {loadOffers, loadNearbyOffers, loadOffer, loadReviews, setReviewFetchStatus, setNearbyOffersFetchStatus, setOfferFetchStatus, setReviewsFetchStatus, requireAuthorization, requireLogout, setFavoriteOffersFetchStatus, setOffersFetchStatus, loadFavoriteOffers, setAuthData, setAuthError} from './actions';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AuthorizationStatus, ErrorMessage, FetchStatus} from '../const';
import {RawOffer} from '../types/offer';
import {RawReview, UserReview} from '../types/review';
import {RawAuthData, UserAuthData} from '../types/auth-data';
import {adaptOfferToClient, adaptAuthDataToClient, adaptReviewToClient} from '../services/adapters';
import {toast} from 'react-toastify';

export const getOfferAction = (id: string): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setOfferFetchStatus(FetchStatus.Loading));
    await api.get<RawOffer>(APIRoute.GetOffer(id))
      .then(({data}) => {
        dispatch(loadOffer(adaptOfferToClient(data)));
        dispatch(setOfferFetchStatus(FetchStatus.Success));
      })
      .catch(({response}) => {
        dispatch(setOfferFetchStatus(response && response.status === 404 ? FetchStatus.NotFound : FetchStatus.Fail));
        !response && toast.error(ErrorMessage.FailToLoadOffer);
      });
  }
);

export const getOffersAction = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setOffersFetchStatus(FetchStatus.Loading));
    await api.get<RawOffer[]>(APIRoute.GetOffers())
      .then(({data}) => {
        dispatch(loadOffers(data.map(adaptOfferToClient)));
        dispatch(setOffersFetchStatus(FetchStatus.Success));
      })
      .catch(() => {
        dispatch(setOffersFetchStatus(FetchStatus.Fail));
        toast.error(ErrorMessage.FailToLoadOffers);
      });
  }
);

export const getNearbyOffersAction = (id: string): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setNearbyOffersFetchStatus(FetchStatus.Loading));
    await api.get<RawOffer[]>(APIRoute.GetNearbyOffers(id))
      .then(({data}) => {
        dispatch(loadNearbyOffers(data.map(adaptOfferToClient)));
        dispatch(setNearbyOffersFetchStatus(FetchStatus.Success));
      })
      .catch(({response}) => {
        dispatch(setNearbyOffersFetchStatus(FetchStatus.Fail));
        !response && toast.error(ErrorMessage.FailToLoadNearbyOffers);
      });
  }
);

export const getFavoriteOffersAction = (): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setFavoriteOffersFetchStatus(FetchStatus.Loading));
    await api.get<RawOffer[]>(APIRoute.GetFavoriteOffers())
      .then(({data}) => {
        dispatch(loadFavoriteOffers(data.map(adaptOfferToClient)));
        dispatch(setFavoriteOffersFetchStatus(FetchStatus.Success));
      })
      .catch(() => {
        dispatch(setFavoriteOffersFetchStatus(FetchStatus.Fail));
        toast.error(ErrorMessage.FailToLoadFavoriteOffers);
      });
  }
);

export const getReviewsAction = (id: string): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setReviewsFetchStatus(FetchStatus.Loading));
    await api.get<RawReview[]>(APIRoute.GetReviews(id))
      .then(({data}) => {
        dispatch(loadReviews(data.map(adaptReviewToClient)));
        dispatch(setReviewsFetchStatus(FetchStatus.Success));
      })
      .catch(({response}) => {
        dispatch(setReviewsFetchStatus(FetchStatus.Fail));
        !response && toast.error(ErrorMessage.FailToLoadReviews);
      });
  }
);

export const postReviewAction = (id: string, review: UserReview): ThunkActionResult => (
  async (dispatch, _getState, api): Promise<void> => {
    dispatch(setReviewFetchStatus(FetchStatus.Loading));
    await api.post<RawReview[]>(APIRoute.PostReview(id), review)
      .then(({data}) => {
        dispatch(loadReviews(data.map(adaptReviewToClient)));
        dispatch(setReviewFetchStatus(FetchStatus.Success));
      })
      .catch(({response}) => {
        dispatch(setReviewFetchStatus(FetchStatus.Fail));
        !response && toast.error(ErrorMessage.FailToSendReview);
      });
  }
);

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login())
      .then(({data: rawAuthData}) => {
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
        dispatch(setAuthData(adaptAuthDataToClient(rawAuthData)));
        dispatch(setAuthError(ErrorMessage.NoFailure));
      })
      .catch((error) => {
        dispatch(setAuthError(error.message));
      });
  };

export const loginAction = ({login: email, password}: UserAuthData): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    await api.post<RawAuthData>(APIRoute.Login(), {email, password})
      .then(({data: rawAuthData}) => {
        const authData = adaptAuthDataToClient(rawAuthData);
        authData && saveToken(authData.token);
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
        dispatch(setAuthData(authData));
        dispatch(setAuthError(ErrorMessage.NoFailure));
      })
      .catch((error) => {
        const errorMessage = error.response ? error.response.data.error : error.message;
        dispatch(setAuthError(errorMessage));
        toast.error(errorMessage);
      });
  }
);

export const logoutAction = (): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    await api.delete(APIRoute.Logout())
      .then(() => {
        dropToken();
        dispatch(requireLogout());
        dispatch(setAuthData(null));
        dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
      })
      .catch((error) => {
        const errorMessage = error.response ? error.response.data.error : error.message;
        dispatch(setAuthError(errorMessage));
        toast.error(errorMessage);
      });
  }
);

