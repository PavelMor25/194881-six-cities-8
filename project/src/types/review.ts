import { User } from './user';

export type Review = {
  author: User,
  comment: string,
  date: Date,
  rating: number,
}
