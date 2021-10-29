import { Offer } from '../../types/offer';

export const uniqCity = (offers: Offer[]): string[] => [...new Set(offers.map((item) => item.city.name))];
