import React from 'react';
import { directors } from '../data';
import Movies from './Movies';

const Directors = () => {
 return (
   <div>
     <h1>Directors Page</h1>
     {directors.map((director, index) => (
       <div key={index}>
         <h1>Name: {director.name}</h1>
         <p>Movies:</p>
           <ul>{director.movies.map((movie, index) => (
             <li key={index}>{movie}</li>
           ))}
           </ul>
       </div>
     ))}
   </div>
 );
}

export default Directors
