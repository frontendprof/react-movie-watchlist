import React from 'react'

export const MovieCard = ({movie}) => {
    return (
        <div className="movie-card">
            <div className="overlay">
                {movie.poster_path?(
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}/>
                ):"Huh"}
            </div>
            
        </div>
    )
}