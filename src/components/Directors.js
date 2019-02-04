import React from 'react';
import { directors } from '../data';
import Director from './FilmWorker'

const Directors = () => {
  return (
    <React.Fragment>
      <h1>Directors Page</h1>
      {directors.map(d => <Director key={d.name} name={d.name} movies={d.movies}/>)}
    </React.Fragment>
  );
}

export default Directors
