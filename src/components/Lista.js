import React from 'react';
import './Lista.css';

const Lista = ({
  id,
  current_price,
  image,
  name,
  symbol,
  market_cap_change_percentage_24h,
}) => {
  return (
    <>
      <div className="contenedorCripto mt-5">
        <img src={image} alt="imagen-cripto" />
        <h3 className="symbol">{symbol}</h3>
        <h3 className="current">$ {current_price.toFixed(2)}</h3>
        {market_cap_change_percentage_24h > 0 ? (
          <h3 className="perc green">
            {market_cap_change_percentage_24h.toFixed(2)} %
          </h3>
        ) : (
          <h3 className="perc red">
            {market_cap_change_percentage_24h.toFixed(2)} %
          </h3>
        )}
      </div>
    </>
  );
};

export default Lista;
