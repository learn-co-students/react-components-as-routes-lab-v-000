import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div className="directors-list">
      <h1>Directors Page</h1>
        {directors.map((director) =>
          <div className="directors">
              {director.name}
            <ul className="movies">
              {director.movies.map((movie) =>
                <li>
                  {movie}
                </li>
              )} 
            </ul>
          </div>
        )}
    </div>
  );
}

export default Directors
