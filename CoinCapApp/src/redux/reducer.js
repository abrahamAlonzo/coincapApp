import {LOAD_COINS} from './constants';

function reducer(state, action) {
  switch (action.type) {
    case LOAD_COINS:
      return {
        ...state,
        currency: action.currency,
      };

    default:
      throw new Error();
  }
}

export {reducer};
