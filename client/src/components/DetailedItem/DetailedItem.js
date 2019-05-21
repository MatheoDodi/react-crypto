import React, { useContext, useEffect, useState, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {
  DetailContainer,
  DetailHeading,
  DetailBody,
  DetailItem,
  DetailValue,
  Overlay,
  DetailTile,
  DetailDollar
} from '../styles/styles';
import context from '../../store/store';
import { getCurrency } from '../../store/reducer';
import Loading from '../Loading/Loading';

const DetailedItem = () => {
  const { closeModal, currencySelected } = useContext(context);
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async function() {
      setLoading(true);
      const data = await getCurrency(currencySelected);
      setDetails(data);
      setLoading(false);
      console.log(details);
    })();
  }, [currencySelected]);

  const handleClick = e => {
    e.stopPropagation();
  };

  return ReactDOM.createPortal(
    <Overlay onClick={closeModal}>
      <DetailContainer onClick={handleClick}>
        <DetailBody>
          {loading ? (
            <Loading />
          ) : (
            <Fragment>
              <DetailHeading>
                {details.name} ({details.symbol})
              </DetailHeading>
              <DetailItem>
                Price <DetailValue>$ {details.price}</DetailValue>
              </DetailItem>
              <DetailItem>
                Rank <DetailValue>{details.rank}</DetailValue>
              </DetailItem>
              <DetailItem>
                24H Change <DetailValue>{details.percentChange24h}</DetailValue>
              </DetailItem>
              <DetailItem>
                <DetailTile>Market cap</DetailTile>
                <DetailDollar>$</DetailDollar>
                {details.marketCap}
              </DetailItem>
              <DetailItem>
                <DetailTile>24H Volume</DetailTile>
                <DetailDollar>$</DetailDollar>
                {details.volume24h}
              </DetailItem>
              <DetailItem>
                <DetailTile>Total supply</DetailTile>
                {details.totalSupply}
              </DetailItem>
            </Fragment>
          )}
        </DetailBody>
      </DetailContainer>
    </Overlay>,
    document.getElementById('modal')
  );
};

export default DetailedItem;
