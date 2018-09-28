import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((d, i) => (
      	<div key={i}>
      		<h2>{d.name}</h2>
      		{d.movies.map((m, i) => (<ul key={i}>{m}</ul>))}
      	</div>
      ))}
    </div>
  );
}

export default Directors
