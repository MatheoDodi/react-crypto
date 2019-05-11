import {
  NEXT_PAGE,
  PREV_PAGE,
  SET_CURRENCIES,
  SET_LOADING,
  UNSET_LOADING
} from './types';
import { API_URL } from '../utils/API';

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
        currencies: action.payload
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case UNSET_LOADING:
      return {
        ...state,
        loading: false
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

export const getCurrencies = async currentPage => {
  return fetch(`${API_URL}/cryptocurrencies?page=${currentPage}&perPage=20`);
};

export const setCurrencies = async (dispatch, currentPage) => {
  setLoading(dispatch);
  const response = await getCurrencies(currentPage);
  const data = await response.json();
  const currencies = data.currencies;
  unsetLoading(dispatch);

  dispatch({
    type: SET_CURRENCIES,
    payload: currencies
  });
};

export const setLoading = dispatch => {
  dispatch({
    type: SET_LOADING
  });
};

export const unsetLoading = dispatch => {
  dispatch({
    type: UNSET_LOADING
  });
};

export default reducer;
