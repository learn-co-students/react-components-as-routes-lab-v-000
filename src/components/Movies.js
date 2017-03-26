import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      <ul>
        {
          movies.map((m, i) => {
            return(
              <div>
                <li key={i}>
                  Title: {m.title}<br/>
                  Run time: {m.time} min<br/>
                  Genres:
                  <ul>
                    {m.genres.map((g, i2) => {
                      return(
                        <li key={i2}>{g}</li>
                      )
                    })}
                  </ul>
                </li>
              </div>
            )
          })
        }
      </ul>
    </div>
  );
};

export default Movies;
