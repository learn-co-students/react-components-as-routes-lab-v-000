import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const displayDirectors = () => {
    return directors.map(({name,movies}, index) => {
      return (<div key={index}>
        <h2>{name}</h2>
        <ul>
          {movies.map((movie,index) => <li key={index}>{movie}</li>)}
        </ul>
      </div>)
    })
  }
  return (
    <div>
      <h1>Directors Page</h1>
      {displayDirectors()}
    </div>
  );
}

export default Directors
