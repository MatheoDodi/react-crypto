import React, { useState, useEffect, useReducer, Fragment } from 'react';
import PageContext, { initialState } from '../../store/store';
import { NEXT_PAGE } from '../../store/types';
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
import reducer from '../../store/reducer';

export default () => {
  const [loading, setLoading] = useState(true);
  const [currencies, setCurrencies] = useState([]);
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
        setCurrencies(data.currencies);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, [state.currentPage]);

  const setCurrentPage = () => {
    dispatch({
      type: NEXT_PAGE
    });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Fragment>
      <PageContext.Provider
        value={{
          currentPage: state.currentPage,
          setCurrentPage
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
        <Pagination currentPage={state.currentPage} />
      </PageContext.Provider>
    </Fragment>
  );
};
