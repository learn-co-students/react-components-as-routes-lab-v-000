import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div className="directors">
      <h1 className="directors">Directors Page</h1>
       { directors.map((director, index) => (
         <div key={ index }>
          <h4>{ director.name }</h4>
          <ul>
            { director.movies.map(movie => (
              <li>{ movie }</li>
            )) }
          </ul>
        </div>
        )) }
    </div>
  );
};

export default Directors;
