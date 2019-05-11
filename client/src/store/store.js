import { createContext } from 'react';

export const initialState = {
  currentPage: 1,
  currencies: [],
  filteredCurrencies: [],
  loading: true,
  showDetailedModal: false,
  currencySelected: ''
};

const context = createContext(initialState);

export default context;
