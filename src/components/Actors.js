import React from 'react';

const Actors = (props) => {
  return (
    <div>
      <h1>Actors Page</h1>
      {props.actors.map((actor,index) =>
      <div key={index}>
        {actor.name}
        <ul>
          {actor.movies.map((movie,index) => <li key={index}>{movie}</li>)}
        </ul>
      </div>)}
    </div>
  );
};

export default Actors;
