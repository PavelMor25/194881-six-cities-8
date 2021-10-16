import { User } from './user';
import { Review } from './review';

export type Offer = {
  id: number,
  type: string,
  city: string,
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
