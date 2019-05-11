import { createContext } from 'react';

export const initialState = {
  currentPage: 1,
  currencies: [],
  loading: true
};

const context = createContext(initialState);

export default context;
