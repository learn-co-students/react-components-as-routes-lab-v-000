import React from 'react';
import { directors } from '../data';

const renderDirectors = (directors) => {
  return directors.map((director, idx) => {
    return (
      <div key={idx}>
        <h2>{director.name}</h2>
        <p>Movies:</p>
        <ul>
          {director.movies.map((m, i) => <li key={i}>{m}</li>)}
        </ul>
      </div>
    )
  })
}

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors(directors)}
    </div>
  );
}

export default Directors
