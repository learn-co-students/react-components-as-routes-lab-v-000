import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
     <h1>Directors Page</h1>
     {directors.map((director, i) => (
       <div key={i}>
         <h3>Name: {director.name}</h3>
         <p>Movies:
           <ul>
             {director.movies.map((movie, i) => (
               <li key={i}>{movie}</li>
             ))}
           </ul>
         </p>
       </div>
     ))}
   </div>
  );
}

export default Directors
