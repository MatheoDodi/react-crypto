import React from 'react';
import { TableTd, Rank, Dollar, TableRow } from '../../styles/styles';

export default ({ currencies }) =>
  currencies.map(currency => (
    <TableRow key={currency.id}>
      <TableTd>
        <Rank>{currency.rank}</Rank>
        {currency.name}
      </TableTd>
      <TableTd>
        <Dollar>$ {currency.price}</Dollar>
      </TableTd>
      <TableTd>
        <Dollar>$ {currency.marketCap}</Dollar>
      </TableTd>
      <TableTd>{renderChangeOfPercent(currency.percentChange24h)}</TableTd>
    </TableRow>
  ));

function renderChangeOfPercent(percent) {
  if (percent > 0) {
    return <span className="percent-raised">{percent}% &uarr;</span>;
  } else if (percent < 0) {
    return <span className="percent-fallen">{percent}% &darr;</span>;
  } else {
    return <span>{percent}</span>;
  }
}
