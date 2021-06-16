import React from 'react';
import { movies } from '../data';


const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {
          movies.map(m => (
            <div>
              <p>{m.title}</p>
              <p>{m.time}</p>
                <ul>
                  {m.genres.map(g => (<li>{g}</li>))}
                </ul>
            </div>
          ))}
          </div>
          );
};

export default Movies;
