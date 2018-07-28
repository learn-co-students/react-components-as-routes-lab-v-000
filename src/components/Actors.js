import React from 'react';
import { actors } from '../data';

const card = {
  width: '400px',
  padding: '5px 15px',
  margin: '0 5px 5px',
  border: '1px solid grey',
}

const Actors = () => {
  const actorsDisplay = actors.map((actor, index) => 
    <div key={index} className="card">
      Name: {actor.name}
      <br />
      Movies: <ul>{actor.movies.map((movie, index) => <li key={index}>{movie}</li>)}</ul>
    </div>
  );
  return (
    <div>
        <h1>Actors Page</h1>
        {actorsDisplay}
    </div>
  );
};

export default Actors;
