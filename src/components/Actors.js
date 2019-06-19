import React from 'react';
import { actors } from '../data';

const actorList = () => {
  return (
    actors.map(actor =>
      <div key={actor.name}>
        {actor.name}
        <ul>
          {actor.movies.map(movie => <li key={movie}>{movie}</li>)}
        </ul>
      </div>
    )
  )
}

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actorList()}
      {/*{code here}*/}
    </div>
  );
};

export default Actors;
