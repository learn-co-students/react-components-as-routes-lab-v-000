import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(m => (<div>
        					<h3>{m.title}</h3><p>Time: {m.time} minutes</p>
        					<ul>{m.genres.map(genre => (<li>{genre}</li>))}</ul>
        				    </div>))}
       
    </div>
  );
};

export default Movies;
