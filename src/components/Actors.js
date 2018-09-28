import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((a, i) => (
      	<div key={i}>
      		<h2>{a.name}</h2>
      		{a.movies.map((m, i) => (<ul key={i}>{m}</ul>))}
      	</div>
      ))}
    </div>
  );
};

export default Actors;
