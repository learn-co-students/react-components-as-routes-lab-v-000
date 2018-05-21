import React from 'react';
import {directors} from '../data';

const Directors = () => {
  let directorDisplay = directors.map((director, index) => {
    return (
      <div key={index}>
        <strong>{director.name}</strong>
        <ul>{director.movies.map(movie => <li>{movie}</li>)}</ul>
      </div>
    )
  });

  return (
    <div>
      <h1>Directors Page</h1>
      {directorDisplay}
    </div>
  );
}

export default Directors
