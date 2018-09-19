import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
        {directors.map(movie => 
        	<div key={movie}>
        	<h3>{movie.name}</h3>
   
        	<ul>
        	{movie.movies.map(genre => <li>{genre}</li>)}
        	</ul>
        	</div>
        	)}
    </div>
  );
}

export default Directors
