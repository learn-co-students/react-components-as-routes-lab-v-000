import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (

    <div>

       <h1> Movies Page</h1>
            {movies.map(function(movie){
              return(
                 <div>
                     <h1>Name: {movie.title} </h1>
                       <p>Time: {movie.time}</p>
                     <p> Genres: </p>
                    <ul>
                           {movie.genres.map(function(movie){
                             return (
                              <li>{movie}</li>
                              )
                             }
                            )
                         }  
                    </ul>

                  </div>
                   ) 
                  }
                )
               }
    </div>
  );
};

export default Movies;
