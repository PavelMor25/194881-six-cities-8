import { User } from './user';
// import { Review } from './review';
import { City } from './city';

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type Offer = {
  id: number,
  type: string,
  city: City,
  location: {
    lat: number;
    lng: number;
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
  // reviews: Review[],
}

export type RawOffer = {
  bedrooms: number;
  city: {
    location: Location,
    name: string,
  },
  description: string;
  goods: string[];
  host: {
    'avatar_url'?: string;
    id: number;
    'is_pro'?: boolean;
    name: string;
  }
  id: number;
  images: string[];
  'is_favorite'?: boolean;
  'is_premium'?: boolean;
  location: Location;
  'max_adults'?: number;
  'preview_image'?: string;
  price: number;
  rating: number;
  title: string;
  type: string;
}
