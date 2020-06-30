import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(m => (<div>
        					<h4>{m.title}</h4>
        					<p>{m.time}</p>
        					<ul>{m.genres.map(genre => (<li>{genre}</li>))}</ul>
        				    </div>))}
       
    </div>
  );
};

export default Movies;
