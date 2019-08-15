import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      {/*{code here}*/}
      <h1>Actors Page</h1>
      {actors.map((actor) =>
        <div>Actor's Name: {actor.name}
             Actor's Movies:<ul>{actor.movies.map((movie) => (<li>{movie}</li>))}</ul>
        </div>)}
    </div>
  );
};

export default Actors;
