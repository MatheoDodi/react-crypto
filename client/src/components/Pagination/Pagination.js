import React from 'react';
import { PaginationContainer, PaginationButton } from '../styles/styles';

export default ({ handleCurrentPage, currentPage }) => (
  <PaginationContainer>
    {currentPage !== 1 && (
      <PaginationButton onClick={() => handleCurrentPage('prev')}>
        &larr;
      </PaginationButton>
    )}
    {currentPage !== 5 && (
      <PaginationButton onClick={() => handleCurrentPage('next')}>
        &rarr;
      </PaginationButton>
    )}
  </PaginationContainer>
);
