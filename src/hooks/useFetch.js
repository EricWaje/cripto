import { useEffect, useState } from 'react';

const BASE_URL =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false';

export const useFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getUrl = async () => {
    setLoading(loading);
    const datos = await fetch(BASE_URL);
    const response = await datos.json();
    setLoading(!loading);
    setData(response);
  };

  useEffect(() => {
    getUrl();
    // eslint-disable-next-line
  }, [BASE_URL]);

  return { loading, data };
};
