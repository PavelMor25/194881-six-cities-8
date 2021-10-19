import { User } from './user';

export type Review = {
  id: number,
  author: User,
  comment: string,
  date: Date,
  rating: number,
}
