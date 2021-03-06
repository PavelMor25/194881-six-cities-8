import {ActionType, CityType, SortingType} from '../const';
import {State} from '../types/state';
import {Actions} from '../types/actions';

const initialState = {
  city: CityType.Paris,
  offers: [],
  sort: SortingType.Popular,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.SetCity: {
      return {...state, city: action.payload};
    }
    case ActionType.SetOffers: {
      return {...state, offers: action.payload};
    }
    case ActionType.SetSorting: {
      return {...state, sort: action.payload};
    }
    default: {
      return state;
    }
  }
};

export {reducer};
