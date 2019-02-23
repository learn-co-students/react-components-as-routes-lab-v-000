import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorList = directors.map(director => {
    const movieList = director.movies.map(genre => <li>{genre}</li>)
    return(<div><h3>{director.name}</h3><ul>{movieList}</ul></div>)
  })

  return (
    <div>
        <h1>Directors Page</h1>
        {directorList}
    </div>
  );
}

export default Directors
