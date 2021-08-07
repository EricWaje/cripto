import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import Lista from './Lista';
import Search from './Search';

const Home = () => {
  const { loading, data } = useFetch();
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const dataFiltrado = data.filter((x) =>
    x.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <h1 className="text-center mt-5 titulo">CRYPTO LIST</h1>
      <Search handleChange={handleChange} />
      {loading ? (
        <h2 className="text-center mt-5 cargando">Cargando...</h2>
      ) : !dataFiltrado ? (
        <>
          {data.map((datos) => (
            <Lista key={datos.id} {...datos} />
          ))}
        </>
      ) : (
        <>
          {dataFiltrado.map((datos) => (
            <Lista key={datos.id} {...datos} />
          ))}
        </>
      )}
    </>
  );
};

export default Home;
