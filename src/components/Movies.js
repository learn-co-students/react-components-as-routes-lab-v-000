import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (

    <div>
        <h1>Movies Page</h1>
        {movies.map( movie =>

            <div>

            <h3> { movie.title } <h5> { movie.time } minutes </h5> </h3>

            <ul>
              <h3> Genres </h3>
              {movie.genres.map( genre =>
                  (<li> { genre }</li>)
                ) }
            </ul>

            <h3> { movie.metascore } </h3>

          </div>

        )
      }
    </div>

  );
};

export default Movies;
