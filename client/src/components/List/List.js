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
  setCurrencies
} from '../../store/reducer';

export default () => {
  const [error, setError] = useState(null);
  const [{ loading, currentPage, currencies }, dispatch] = useReducer(
    reducer,
    initialState
  );

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
          nextPage: () => setNextPage(dispatch),
          prevPage: () => setPrevPage(dispatch)
        }}
      >
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
              <ListItem currencies={currencies} />
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination currentPage={currentPage} />
      </context.Provider>
    </Fragment>
  );
};
