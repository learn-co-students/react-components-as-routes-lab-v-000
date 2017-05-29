import React from 'react';
import data from '../data';

const Directors = () => {

  const directors = data.directors.map( (director, index) => (
    <div key={index}>
      <h3>Name: {director.name}</h3>
      <p>Movies:</p>
      <ul>
         {director.movies.map((movie, index) => (
          <li key={index}>{movie}</li>
        ))}
      </ul>
    </div>
  ))

  return (
    <div>
      <h1>Directors Page</h1>
        {directors}
    </div>
  );
};

export default Directors;