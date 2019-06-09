import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
          <h1> Directors Page</h1>
            {directors.map(function(director){
              return(
                 <div>
                     <h1>{director.name} </h1>
                     <p> Movies: </p>
                    <ul>
                           {director.movies.map(function(movie){
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
}

export default Directors
