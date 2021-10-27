import { User } from './user';
import { Review } from './review';
import { City } from './city';

export type Offer = {
  id: number,
  type: string,
  city: City,
  location: {
    lat: number,
    lng: number,
  },
  price: number,
  title: string,
  description: string,
  photos: string[],
  goods: string[],
  rating: number,
  isPremium: boolean,
  isFavorite: boolean,
  rooms: number,
  maxAdults: number,
  owner: User,
  reviews: Review[],
}
