import { combineReducers } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';

import radio from './radioSlice';

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    radio,
  })(state, action);
};

export default reducer;
