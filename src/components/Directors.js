import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const mappedDirectors = directors.map(director => {
    const movies = director.movies.map(movie => <li>{ movie }</li>);
    return (
          <div>
            <h1>{director.name}</h1>
            <ul>{movies}</ul>
          </div>
    );  
  });
  return (
    <div>
      <h1>Directors Page</h1>
      {mappedDirectors}
    </div>
  );
}

export default Directors
