import React, { useReducer } from 'react';
import context, { initialState } from '../../store/store';
import reducer, {
  setCurrencies,
  setNextPage,
  setPrevPage,
  closeModal,
  showModal,
  filterCurrencies
} from '../../store/reducer';

const Provider = ({ children }) => {
  const [
    {
      loading,
      currentPage,
      currencies,
      filteredCurrencies,
      showDetailedModal,
      currencySelected
    },
    dispatch
  ] = useReducer(reducer, initialState);

  return (
    <context.Provider
      value={{
        currentPage,
        currencies,
        filteredCurrencies,
        showDetailedModal,
        currencySelected,
        loading,
        nextPage: () => setNextPage(dispatch),
        prevPage: () => setPrevPage(dispatch),
        setCurrencies: () => setCurrencies(dispatch, currentPage),
        closeModal: () => closeModal(dispatch),
        showModal: id => showModal(dispatch, id),
        filterCur: filteredCur => filterCurrencies(dispatch, filteredCur)
      }}
    >
      {children}
    </context.Provider>
  );
};

export default Provider;
