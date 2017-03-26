import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      <ul>
        {
          directors.map((director, i) =>{
            return(
              <div key={i}>
                <li>
                  Name: {director.name}
                  Movies:
                  <ul>
                    {
                      director.movies.map((movie, i2) => {
                        return(
                          <li key={i2}>{movie}</li>
                        )
                      })
                    }
                  </ul>
                </li>
              </div>
            )
          })
        }
      </ul>
    </div>
  );
}

export default Directors
