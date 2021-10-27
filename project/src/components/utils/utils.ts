import { Offer } from '../../types/offer';

export const uniqCity = (offers: Offer[]): string[] => {
  const citiesName = new Set('');
  offers.forEach((item) => citiesName.add(item.city.name));
  return [...citiesName];
};
