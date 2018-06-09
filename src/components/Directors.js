import React from 'react';
import { directors } from '../data';

const Directors = () => {
  let directorList = directors.map((director) => {
    return <div className="director">
              <h3>Name: {director.name}</h3>
              <h4>Movies:</h4>
              <ul>
                {director.movies.map(movie => <li key={movie}>{movie}</li>)}
              </ul>
            </div>;
      })

  return (
    <div>
      <h1>Directors Page</h1>
        {directorList}
    </div>
  );
};

export default Directors
