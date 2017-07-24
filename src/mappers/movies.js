import React from 'react';

export default function moviesLi(movies){
    return movies.map((movie, index) => {
        return <li key={index}>{movie}</li>
    })
}