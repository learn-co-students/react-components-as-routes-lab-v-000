import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>

        {actors.map((a, index) => (
          <div key={index}>
                <h3>Name: {a.name}</h3>
                <p>Movies:</p>
                <ul>
                    {a.movies.map((movie, index) => (
                        <li key={index}>{movie}</li>
                    ))}
                </ul>
            </div>
        ))}
      </div>
  );
};

export default Actors;
