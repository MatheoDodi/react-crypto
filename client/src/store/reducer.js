import {
  NEXT_PAGE,
  PREV_PAGE,
  SET_CURRENCIES,
  SET_LOADING,
  UNSET_LOADING,
  SHOW_MODAL,
  CLOSE_MODAL
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
    case CLOSE_MODAL:
      return {
        ...state,
        showDetailedModal: false
      };
    case SHOW_MODAL:
      return {
        ...state,
        showDetailedModal: true,
        currencySelected: action.payload
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
  const response = await fetch(
    `${API_URL}/cryptocurrencies?page=${currentPage}&perPage=20`
  );
  return response.json();
};

export const getCurrency = async id => {
  const response = await fetch(`${API_URL}/cryptocurrencies/${id}`);
  return response.json();
};

export const setCurrencies = async (dispatch, currentPage) => {
  setLoading(dispatch);
  const { currencies } = await getCurrencies(currentPage);
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

export const showModal = (dispatch, id) => {
  dispatch({
    type: SHOW_MODAL,
    payload: id
  });
};

export const closeModal = dispatch => {
  dispatch({
    type: CLOSE_MODAL
  });
};

export default reducer;
