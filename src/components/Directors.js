import React from 'react';

const Directors = (props) => {
  return (
    <div>
      <h1>Directors Page</h1>
      {props.directors.map((director,index) =>
      <div key={index}>
        {director.name}
        <ul>
          {director.movies.map((movie,index) => <li key={index}>{movie}</li>)}
        </ul>
      </div>)}
    </div>
  );
}

export default Directors
