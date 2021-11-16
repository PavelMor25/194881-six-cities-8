import {Offer, RawOffer} from '../types/offer';
import {Review, RawReview} from '../types/review';
import {AuthData, RawAuthData} from '../types/auth-data';

export const adaptOfferToClient = (offer: RawOffer): Offer => {
  const adaptedOffer = Object.assign(
    {},
    offer,
    {
      owner: {
        ...offer.host,
        photo: offer.host.avatar_url,
        isPro: offer.host.is_pro,
      },
      location: {
        lat: offer.location.latitude,
        lng: offer.location.longitude,
      },
      city: {
        location: {
          lat: offer.city.location.latitude,
          lng: offer.city.location.longitude,
          zoom: offer.city.location.zoom,
        },
        name: offer.city.name,
      },
      isFavorite: offer.is_favorite,
      isPremium: offer.is_premium,
      maxAdults: offer.max_adults,
      rooms: offer.bedrooms,
      photos: offer.images,
    },
  );

  delete adaptedOffer.host.avatar_url;
  delete adaptedOffer.host.is_pro;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.preview_image;


  return adaptedOffer as Offer;
};

export const adaptReviewToClient = (review: RawReview): Review => {
  const adaptedReview = Object.assign(
    {},
    review,
    {
      author: {
        id: review.user.id,
        photo: review.user.avatar_url,
        name: review.user.name,
        isPro: review.user.is_pro,
      },
      date: new Date(review.date),
    },
  );

  return adaptedReview;
};

export const adaptAuthDataToClient = (rawAuthData: RawAuthData): AuthData => ({
  avatarUrl: rawAuthData.avatar_url,
  email: rawAuthData.email,
  id: rawAuthData.id,
  isPro: rawAuthData.is_pro,
  name: rawAuthData.name,
  token: rawAuthData.token,
});

