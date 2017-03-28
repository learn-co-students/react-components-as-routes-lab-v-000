import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const renderedDirectors = directors.map(director =>
    <div className="director">
      {director.name}
      {director.movies.join(", ")}
    </div>
  )
  return (
    <div>
      <h1>Directors Page!</h1>
      {renderedDirectors}
    </div>
  );
}

export default Directors
