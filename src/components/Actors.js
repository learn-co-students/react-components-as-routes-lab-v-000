import React from 'react';
import { actors } from '../data';

const actors = data.actors;

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(a => (<div>
                  <h4>{a.name}</h4>
                  
                  <ul>{a.movies.map(movie => (<li>{movie}</li>))}</ul>
                    </div>))}  
    </div>
  );
};

export default Actors;
