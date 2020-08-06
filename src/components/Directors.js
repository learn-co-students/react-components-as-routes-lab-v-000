import React from 'react';
import { directors } from '../data';
import Person from './Person';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1> {/* These Directors probably need their own components. */}
      { directors.map( (director, index) =>
        <div key={index}>
          <Person name={director.name} movies={director.movies} />
        </div>
      ) }
    </div>
  );
}

export default Directors
