import React, { useContext } from 'react';
import context from '../../store/store';
import { PaginationContainer, PaginationButton } from '../styles/styles';

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
