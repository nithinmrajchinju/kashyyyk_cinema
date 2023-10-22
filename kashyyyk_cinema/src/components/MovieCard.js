import React from 'react';
import './MovieCard.css'
import { Icon } from '@iconify/react';

function MovieCard({ movieData }) {
    return (
        <div className="movie-card">
            <img className='movie-poster' src={movieData.poster} alt={movieData.title} />
            <div className="movie-details">
                <div className='movie-title'>{movieData.title}</div>
                <div className='movie-director-wrapper'>
                    <div className='movie-director'>Director: </div>
                    <div>{movieData.director}</div>
                </div>
                <div className='movie-imdb-length-wrapper'>
                    <div className='movie-imdb-wrapper'><Icon icon="fa6-brands:imdb" /> {movieData.imdb_rating}</div>
                    <div className='movie-length-wrapper'><Icon icon="bi:clock" /> {movieData.length}</div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
