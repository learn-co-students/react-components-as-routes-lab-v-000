import React from 'react';
import { directors } from '../data';



// generateMovies = (movies) => {
//   return movies.map( (movie, idx) => <p>{movie.idx}</p>)
// };

const Directors = () => {


  return (
      <div>
          <h1>Directors Page</h1>
         
         {directors.map( (director) => <div className="director">{director.name} {director.movies}</div>)}
       
      </div>
  )
}



export default Directors

