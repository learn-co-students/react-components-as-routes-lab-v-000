import React from 'react';
import { actors } from '../data';

const Actors = () => {


  // showActors = () => {

  const actorList = actors.map((a) => {

    // console.log("Actor Object: ", a)
    const movies = a.movies.map((m) => {
      return (<li> {m} </li>)
    })

    console.log("Movies:", movies)


    return (
      <div className="actor">
      {a.name} <br/>
      Movies:
        <ul>
          {movies}
        </ul>
      </div>
    )
  })

  console.log(actorList)
  // }
  //
  // const actorsList = actors.map((actor) => {
  //
  //   const movies = actor.movies.map((movie) => <li> {movie} </li> )
  //
  //   return (
  //     <div className="actor">
  //       <p> {actor.name} </p>
  //       <ul>
  //         {movies}
  //       </ul>
  //     </div>
  //   )
  // })

  return (
    <div>
      <h1>Actors Page</h1>
      {actorList}
    </div>
  );
};

export default Actors;
