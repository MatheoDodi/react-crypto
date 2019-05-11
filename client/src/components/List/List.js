import React, { useState, useEffect, useReducer, Fragment } from 'react';
import context, { initialState } from '../../store/store';
import ListItem from './ListItem/ListItem';
import Pagination from '../Pagination/Pagination';
import Loading from '../Loading/Loading';
import { API_URL } from '../../utils/API';
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
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async function() {
      try {
        setLoading(true);
        const response = await fetch(
          `${API_URL}/cryptocurrencies?page=${state.currentPage}&perPage=20`
        );
        const data = await response.json();
        setCurrencies(dispatch, data.currencies);
        console.log(state);
      } catch (err) {
        setError(err);
      }
    })();
  }, [state.currentPage]);

  if (loading) {
    return <Loading />;
  }

  return (
    <Fragment>
      <context.Provider
        value={{
          currentPage: state.currentPage,
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
              <ListItem currencies={state.currencies} />
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination currentPage={state.currentPage} />
      </context.Provider>
    </Fragment>
  );
};
