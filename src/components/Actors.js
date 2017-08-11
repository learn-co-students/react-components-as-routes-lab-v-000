import React from 'react';
import { actors } from '../data';

const actorList = actors.map((actor, index) => {
	return <div key={index}>{actor.name} {actor.movies}</div>
})

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
        <ul>
          {actorList}
        </ul>
    </div>
  );
};

export default Actors;
