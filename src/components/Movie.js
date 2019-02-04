import React from 'react'

const Movie = (props) => {

    const renderGenres = () => (
        <React.Fragment>
            <h4>Genres</h4>
            <ul>
                {props.genres.map(g => <li>{g}</li>)}
            </ul>
        </React.Fragment>
    )

    return (
        <div className="Movie">
            <h3>{props.title}</h3>
            {renderGenres()}
            <p>Time: {props.time}</p>
            <hr />
        </div>
    )

}

export default Movie