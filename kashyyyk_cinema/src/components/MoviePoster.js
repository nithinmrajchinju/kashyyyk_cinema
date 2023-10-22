import React, { useState } from 'react'
import './MoviePoster.css'

function MoviePoster({ movieData }) {
    const [card, setCard] = useState(false)
    return (
        <div className="movie-poster">
            <img className='poster' src={movieData.poster} alt={movieData.title} onClick={() => setCard(!card)} />
        </div>
    )
}

export default MoviePoster