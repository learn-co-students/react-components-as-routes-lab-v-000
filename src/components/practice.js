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


const Actors = () => {
  return (
    <div>
      <h1> Actors page </h1>
      { actors.map(actor => (
        
      ))}
    </div>
  )
}
