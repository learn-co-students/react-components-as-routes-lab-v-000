import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div className="actors">
    <h1>Actors Page</h1>
    {actors.map((actor, index) => (
        <React.Fragment>
        <div>{actor.name}
        <ul>
          <li>{actor.movies}</li>
        </ul>
        </div> 
        </ React.Fragment>
      ))}
    </div>
      )
};

export default Actors;
