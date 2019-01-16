import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      <React.Fragment>
      </React.Fragment>
      <React.Fragment>
        {actors.map(actor =>
          <div>
            <h3> {actor.name} </h3>
            Movies:
            <ul>
              {actor.movies.map(movie =>
                <li>{movie}</li>
              )}
            </ul>
          </div>
        )}
      </React.Fragment>
    </div>
  );
};

export default Actors;
