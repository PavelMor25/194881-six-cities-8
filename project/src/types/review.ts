import { User } from './user';

export type Review = {
  id: number,
  author: User,
  comment: string,
  date: Date,
  rating: number,
}

export type RawReview = {
  'comment': string;
  'date': string;
  'id': number;
  'rating': number;
  'user': {
    'avatar_url': string;
    'id': number;
    'is_pro': boolean;
    'name': string;
  }
}

export type UserReview = {
  rating: number;
  comment: string;
}
