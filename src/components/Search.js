import React from 'react';
import './Search.css';

const Search = ({ handleChange }) => {
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <form>
              <input
                type="text"
                placeholder="Search by name"
                onChange={handleChange}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
