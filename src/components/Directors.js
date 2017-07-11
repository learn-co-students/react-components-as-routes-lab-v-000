import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorShow = directors.map(dir => {
    return (
      <div>
        <h4>Name: {dir.name}</h4>
        <p>Movies:</p>
        <ul>{dir.movies.map(movie => (<li>{movie}</li>))}</ul>
      </div>
    )
  })
  return (
    <div>
      <h1>Directors Page</h1>
      {directorShow}
    </div>
  );
}

export default Directors
