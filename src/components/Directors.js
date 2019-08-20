import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const listDirectors = directors.map(director =>
    <div>
      <h3>Name: {director.name}</h3>
      Movies:<ul>
        {director.movies.map((movie, index) => <li key={index}>{movie}</li>)}
      </ul>
    </div>
  );

  return (
    <div>
    <h1>Directors Page</h1>
        {listDirectors}
    </div>
  );
}

export default Directors
