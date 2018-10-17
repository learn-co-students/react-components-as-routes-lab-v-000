import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
    <h1>Directors Page</h1>
      {directors.map(x => 
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
}

export default Directors
