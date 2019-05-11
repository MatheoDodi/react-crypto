import React, { useState, useEffect, Fragment } from 'react';
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

export default () => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [currencies, setCurrencies] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    (async function() {
      try {
        setLoading(true);
        const response = await fetch(
          `${API_URL}/cryptocurrencies?page=${currentPage}&perPage=20`
        );
        const data = await response.json();
        setCurrencies(data.currencies);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    })();
  }, [currentPage]);

  if (loading) {
    return <Loading />;
  }

  function handleCurrentPage(page) {
    console.log(page);
    if (currentPage === 0 && page === 'next') {
      return;
    } else if (page === 'next') {
      return setCurrentPage(currentPage + 1);
    } else {
      return setCurrentPage(currentPage - 1);
    }
  }

  return (
    <Fragment>
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
      <Pagination
        currentPage={currentPage}
        handleCurrentPage={next => handleCurrentPage(next)}
      />
    </Fragment>
  );
};
