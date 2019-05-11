import React, { useState, useEffect, useReducer, Fragment } from 'react';
import context, { initialState } from '../../store/store';
import ListItem from './ListItem/ListItem';
import Pagination from '../Pagination/Pagination';
import Loading from '../Loading/Loading';
import {
  TableContainer,
  Table,
  TableHead,
  TableTh,
  TableBody
} from '../styles/styles';
import reducer, {
  setNextPage,
  setPrevPage,
  setCurrencies,
  closeModal,
  showModal
} from '../../store/reducer';
import DetailedItem from '../DetailedItem/DetailedItem';

export default () => {
  const [
    { loading, currentPage, currencies, showDetailedModal, currencySelected },
    dispatch
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    setCurrencies(dispatch, currentPage);
  }, [currentPage]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Fragment>
      <context.Provider
        value={{
          currentPage: currentPage,
          showDetailedModal,
          currencySelected,
          nextPage: () => setNextPage(dispatch),
          prevPage: () => setPrevPage(dispatch),
          closeModal: () => closeModal(dispatch),
          showModal: () => showModal(dispatch)
        }}
      >
        {showDetailedModal && <DetailedItem />}
        <TableContainer>
          <Table>
            <TableHead>
              <tr>
                <TableTh>Cryptocurrency</TableTh>
                <TableTh>Price</TableTh>
                <TableTh>Market Cap</TableTh>
                <TableTh>24H Change</TableTh>
              </tr>
            </TableHead>
            <TableBody>
              <ListItem
                currencies={currencies}
                showModal={id => showModal(dispatch, id)}
              />
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination currentPage={currentPage} />
      </context.Provider>
    </Fragment>
  );
};
