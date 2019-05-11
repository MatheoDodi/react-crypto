import React, { useContext } from 'react';
import { SearchContainer, SearchInput } from '../styles/styles';
import context from '../../store/store';

const Search = () => {
  const { filteredCurrencies, filterCur } = useContext(context);

  const handleChangeInput = e => {
    const query = e.target.value;
    const filteredCncs = filteredCurrencies.filter(currency =>
      currency.name.includes(query)
    );

    filterCur(filteredCncs);
  };

  return (
    <SearchContainer>
      <SearchInput
        placeholder="Search Crypto..."
        onChange={handleChangeInput}
      />
    </SearchContainer>
  );
};

export default Search;
