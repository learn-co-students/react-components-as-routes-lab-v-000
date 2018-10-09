import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>{movies.map(x => <div><h3>{x.title}</h3><p>{x.time}</p><ul>{x.genres.map(y => <li key={y}>{y}</li>)}</ul></div>)}
    </div>
  );
};

export default Movies;
