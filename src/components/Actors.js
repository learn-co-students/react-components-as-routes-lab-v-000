import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
     {actors.map(actor=>{return(<div>Name: {actor.name}<br></br>{actor.movies.map(genre=>{return(<ul>{genre}</ul>)})} </div>)})}
    </div>
  );
};

export default Actors;
