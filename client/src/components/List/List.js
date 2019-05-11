import React, {
  useState,
  useEffect,
  useReducer,
  Fragment,
  useContext
} from 'react';
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
import Search from '../Search/Search';

export default () => {
  const {
    currentPage,
    currencies,
    showDetailedModal,
    currencySelected,
    loading,
    nextPage,
    prevPage,
    setCurrencies,
    closeModal,
    showModal
  } = useContext(context);

  useEffect(() => {
    setCurrencies();
  }, [currentPage]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Fragment>
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
            <ListItem currencies={currencies} showModal={id => showModal(id)} />
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination currentPage={currentPage} />
    </Fragment>
  );
};
