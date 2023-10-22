import React, { useEffect, useState } from 'react'
import { fetchMoviesBygenre } from '../services/MovieServices'
import './MovieGenreList.css'
import MovieCardCarousel from './MovieCardCarousel'

function MovieGenreList() {
    const [movieslist, setMovieslist] = useState([])

    const fetchMoviesByGenreList = async () => {
        try {
            const response = await fetchMoviesBygenre()
            setMovieslist(response.data)
        } catch (error) {

        }
    }

    useEffect(() => {
        fetchMoviesByGenreList()
    }, [])

    return (
        <div className="genres-container">
            {movieslist.map((movieData) =>
                <div className="genre-movies-wrapper" >
                    <div className="genre-label">{movieData.category}</div>
                    <MovieCardCarousel movieData={movieData.movies} />
                </div>
            )}
        </div>
    )
}

export default MovieGenreList