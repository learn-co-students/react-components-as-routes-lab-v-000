import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {/*{code here}*/
        directors.map((director,idx) => (
          <div key={idx}>{director.name}
            <ul key={idx}>
              {director.movies.map(movie => <li key={movie}>{movie}</li>)}
            </ul>
          </div>
          ))
        }
    </div>
  );
}

export default Directors
