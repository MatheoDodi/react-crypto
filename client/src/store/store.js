import { createContext } from 'react';

export const initialState = {
  currentPage: 1
};

const PageContext = createContext(initialState);

export default PageContext;
