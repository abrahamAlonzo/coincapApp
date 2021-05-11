import {UPDATE_COINS} from './constants';

function reducer(state, action) {
  switch (action.type) {
    case UPDATE_COINS:
      // console.log('coinValues', action.coinValues);
      return {
        ...state,
        // currency: action.currency,
      };

    default:
      throw new Error('ACTION NAME DOES NOT EXIST');
  }
}

export {reducer};
