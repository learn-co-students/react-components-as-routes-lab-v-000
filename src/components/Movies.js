import React from 'react';
import { movies } from '../data';

const Movies = () => {

  const movieList = movies.map((m) => {

    // console.log("Actor Object: ", a)
    const genres = m.genres.map((g) => {
      return (<li> {g} </li>)
    })

    console.log("Movies:", movies)

    return (
      <div className="director">
      {m.title} <br/>
      {m.time}
      Genres:
        <ul>
          {genres}
        </ul>
      </div>
    )
  })

  return (
    <div>
      <h1>Movies Page</h1>
        {movieList}
    </div>
  );

  // return (
  //   <div>
  //     <h1>Movies Page</h1>
  //
  //
  //       {/*{code here}*/}
  //   </div>
  // );
};

export default Movies;
