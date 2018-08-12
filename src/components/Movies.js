import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((mov)=>{
          return(
            <div>
              <h1>Title: {mov.title}</h1>
              <p>Run Time: {mov.time}</p>
              <p>Meta Score: {mov.metascore}</p>
              <ul>{mov.genres.map((gen)=>{
                return <li>{gen}</li>
              })}
              </ul>
            </div>
            )
        })}
    </div>
  );
};

export default Movies;
