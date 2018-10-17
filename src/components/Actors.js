import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
    <h1>Actors Page</h1>
      {actors.map(x => 
      	<div>
      	<p>{x.name}</p>
      	<ul>
      	{x.movies.map(y =>
      	      		<li>
      	      			{y}
      	      		</li>
      	      	)}
      	</ul>
      	</div>
      	)}
    </div>
  );
};

export default Actors;
