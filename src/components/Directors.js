import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div className="director">
      <h1>Directors Page</h1>
      {directors.map((director, index) => {
        return(
        <div key={index} className="director">
          <h3>{director.name}</h3>
          {director.movies}
        </div>
      )}
    )}
    </div>
  );
};

export default Directors
