import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const renderDirectors = directors.map((director) => {
      return <div>
                <h2>Name: {director.name}</h2>
                <h3>Movies:</h3>
                <ul>
                {director.movies.map(movie => <li>{movie}</li>)}
                </ul>
              </div>
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {renderDirectors}
    </div>
  );
}

export default Directors
