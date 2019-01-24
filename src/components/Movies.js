import React from 'react';
import { movies } from '../data';


const Movies = () => {
    return (<div>
      <h1>Movies Page</h1>
      {movies.map((movie, index) =>
        <div key={index}>
          <h3>{movie.title}</h3>
          Time: {movie.time}<br></br>
          Genres:
            <ul>
              {movie.genres.map((genre, index) =>
                <li key={index}>{genre}</li>
              )}
            </ul>
        </div>
      )}
    </div>
    )
  }



export default Movies;
