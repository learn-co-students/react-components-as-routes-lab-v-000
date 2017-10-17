import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorsList = directors.map((director, i) =>
     <div>
       <h3>Director</h3>
       <ul>
         <li>{director.name}</li>
       </ul>

       <h3>Movies</h3>
       <ul>
         {director.movies.map((movie, i) => {
           return <li key={i}>{movie}</li>
         })}
       </ul>
     </div>
   );
   return (
     <div>
       <h1>Directors Page</h1>
       {directorsList}
     </div>
   );
}

export default Directors
