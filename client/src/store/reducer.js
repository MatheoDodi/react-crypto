import { NEXT_PAGE, PREV_PAGE, SET_CURRENCIES } from './types';

let reducer = (state, action) => {
  switch (action.type) {
    case NEXT_PAGE:
      return {
        ...state,
        currentPage: state.currentPage + 1
      };
    case PREV_PAGE:
      return {
        ...state,
        currentPage: state.currentPage - 1
      };
    case SET_CURRENCIES:
      return {
        ...state,
        currencies: action.payload.currencies
      };
    default:
      return state;
  }
};

// Actions

export const setNextPage = dispatch => {
  dispatch({
    type: NEXT_PAGE
  });
};

export const setPrevPage = dispatch => {
  dispatch({
    type: PREV_PAGE
  });
};

export const setCurrencies = (dispatch, currencies) => {
  dispatch({
    type: SET_CURRENCIES,
    payload: currencies
  });
};

export default reducer;
