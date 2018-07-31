import React from 'react';
import { directors } from '../data';

const Directors = () => {

  let directorDivs = directors.map(director => {
    return <div>
      <h3>Name: {director.name}</h3>
      <p>Movies:</p>
      <ul>
        {director.movies.map(movie => <li>{movie}</li>)}
      </ul>
    </div>
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {directorDivs}
    </div>
  );
}

export default Directors
