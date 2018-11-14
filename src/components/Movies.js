import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
    <h1 align ='center'> Movies Page</h1>
         {movies.map((el, index) =>
           <div key={index}>
             <h2> {index +1 }. {el.title}</h2>
             <p>{el.time}</p>
             <p>Genres:</p>
             <ul>
               {el.genres.map((genre, index) =>
                 <li key={index}>{genre}</li>
               )}
             </ul>
           </div>
         )}

    </div>
  );
};

export default Movies;
