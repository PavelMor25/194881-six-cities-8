import { User } from './user';
import { Review } from './review';

export type Offer = {
  id: number,
  type: string,
  price: number,
  title: string,
  photos: string[],
  goods: string[],
  rating: number,
  isPremium: boolean,
  rooms: number,
  maxAdults: number,
  owner: User,
  reviews: Review[],
}
