import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((d, i) => {
        return (
          <div className="actor" key={i}>
            <h3>Name: {d.name}</h3>
            Movies: {d.movies.map((m, j)=> {
              return (
                <li key={j}>{m}</li>
              )
            })}
          </div>
        )
      })}
    </div>
  );
}

export default Directors
