import React, { useContext } from 'react';
import { PaginationContainer, PaginationButton } from '../styles/styles';
import PageContext from '../../store/store';

export default () => {
  const { currentPage, setCurrentPage } = useContext(PageContext);

  return (
    <PaginationContainer>
      {currentPage !== 1 && (
        <PaginationButton onClick={setCurrentPage}>&larr;</PaginationButton>
      )}
      {currentPage !== 5 && (
        <PaginationButton onClick={setCurrentPage}>&rarr;</PaginationButton>
      )}
    </PaginationContainer>
  );
};
