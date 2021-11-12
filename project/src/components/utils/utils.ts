import { CityType, SortingType } from '../../const';
import { Offer} from '../../types/offer';


export const uniqCity = (offers: Offer[]): string[] => [...new Set(offers.map((item) => item.city.name))];

export const getOffersByCity = (offers: Offer[], city: CityType): Offer[] => offers.filter((offer) => offer.city.name === city);

export const getSortOffers = (offers: Offer[], sortingType: SortingType): Offer[] => {
  const copyOffers = offers;
  switch (sortingType) {
    case SortingType.LowToHigh: {
      return [...copyOffers].sort((firstOffer, secondOffer) => (firstOffer.price - secondOffer.price));
    }
    case SortingType.HighToLow: {
      return [...copyOffers].sort((firstOffer, secondOffer) => (secondOffer.price - firstOffer.price));
    }
    case SortingType.Rating: {
      return [...copyOffers].sort((firstOffer, secondOffer) => (secondOffer.rating - firstOffer.rating));
    }
    default: {
      return [...copyOffers];
    }
  }
};
