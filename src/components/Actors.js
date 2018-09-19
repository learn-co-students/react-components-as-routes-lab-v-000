import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>

      <h1>Actors Page</h1>
        {actors.map(movie => 
        	<div key={movie}>
        	<h3>{movie.name}</h3>
   
        	<ul>
        	{movie.movies.map(genre => <li>{genre}</li>)}
        	</ul>
        	</div>
        	)}

    </div>
  );
};

export default Actors;
