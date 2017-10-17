import React from 'react';
import { movies } from '../data';

// {
//   title: 'Doctor Strange',
//   time: 115,
//   genres: ['Action', 'Adventure', 'Fantasy'],
//   metascore: 74
// },

const Movies = () => {
  const moviesList = movies.map((movie, i) =>
     <div>
       <h3>Movie</h3>
       <ul>
         <li>{movie.title}</li>
       </ul>
       <h3>Time</h3>
       <ul>
         <li>{movie.time} minutes</li>
       </ul>
       <h3>Genres</h3>
       <ul>
         {movie.genres.map((genre, i) => {
           return <li key={i}>{genre}</li>
         })}
       </ul>
       <h3>Metascore</h3>
       <ul>
         <li>{movie.metascore}</li>
       </ul>
     </div>
   );
   return (
     <div>
       <h1>Movies Page</h1>
       {moviesList}
     </div>
   );
};

export default Movies;
