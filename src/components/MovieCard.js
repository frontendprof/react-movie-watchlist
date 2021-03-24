
import React from 'react'

const MovieCard = ({movie,type}) => {
    return (
        <div className="movie-card">
            <div className="overlay">

                {movie.poster_path?(
                        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title} Poster`}/>
                    ):(
                        <div className="filler-poster">

                        </div>
                )}

            </div>
        </div>
    )
}

export default MovieCard
