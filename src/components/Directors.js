import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const directorLi = directors.map((director, i) => {

    const movieLi = director.movies.map(movie => <li>{movie}</li>)

    return (
      <div>
        <li key={i}>{director.name}</li>
        <ul>
          {movieLi}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Directors Page</h1>
      <ul>
        {directorLi}
      </ul>
    </div>
  );
}

export default Directors
