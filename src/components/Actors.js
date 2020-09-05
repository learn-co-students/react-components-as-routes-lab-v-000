import React from 'react';
import { actors } from '../data';


// how can I access that actors array in the data file?

// console.log("actors", actors)
// console.log("actor movies", actors[0].movies)


// here I had to change two things: adding these returns, and also
// adding the brackets within the return. without those it printed,
// but literally just 'actor.name'.
const Actors = () => {
  return (
         <div>
            <h1>Actors Page</h1>
              {actors.map(actor => (
                <div>
              <h3> {actor.name} </h3>
              <ul>
                {actor.movies.map((movie, index) => {
                  return <li key={index}>{movie}</li>
                }) }
              </ul>
              </div>
            ))}
         </div>
 )
}





// const Actors = () => {
//   return (
//     <div>
//       // {mapActorsNames(actors)}
//     </div>
//   );
// };

export default Actors;
