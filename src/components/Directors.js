import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const directorCards = directors.map((director, index) => <div key={index}>Name: {director.name} {director.movies.map(movie => <ul>{movie}</ul>)} </div>)

  return (
    <div>
      <h1>Directors Page</h1>
      
      {directorCards}
    </div>
  );
}

export default Directors
