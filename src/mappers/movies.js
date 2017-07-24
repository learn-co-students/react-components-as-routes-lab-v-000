import React from 'react';

export default function moviesLi(movies){
    return movies.map(movie => {
        return <li>{movie}</li>
    })
}