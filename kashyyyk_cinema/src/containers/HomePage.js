import React, { useContext } from 'react'
import Header from '../components/Header'
import MovieGenreList from '../components/MovieGenreList'
import { MovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';

function HomePage() {
    const { searchMoviesList, isSearched } = useContext(MovieContext);

    return (
        <div>
            <Header />
            {searchMoviesList.length > 0 ? searchMoviesList.map((movie) => (
                <MovieCard movieData={movie} />
            )) : isSearched && <>No search result found</>}
            <MovieGenreList />
        </div>
    )
}

export default HomePage