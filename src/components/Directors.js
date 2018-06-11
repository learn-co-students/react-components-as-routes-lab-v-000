import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director,index)=>{
        return(
          <div key={index}>
            {director.name}
            <ul>
              {director.movies.map((m,i)=> <li key={i}>{m}</li>)}    
            </ul>
          </div>  
        )  
        })}        
    </div>
  );
}

export default Directors
