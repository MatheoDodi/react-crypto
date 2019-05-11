import React, { useContext, useReducer } from 'react';
import context, { initialState } from '../../store/store';
import { PaginationContainer, PaginationButton } from '../styles/styles';
import reducer, { setNextPage, setPrevPage } from '../../store/reducer';

export default () => {
  const { currentPage, nextPage, prevPage } = useContext(context);

  return (
    <PaginationContainer>
      {currentPage !== 1 && (
        <PaginationButton onClick={prevPage}>&larr;</PaginationButton>
      )}
      {currentPage !== 5 && (
        <PaginationButton onClick={nextPage}>&rarr;</PaginationButton>
      )}
    </PaginationContainer>
  );
};
