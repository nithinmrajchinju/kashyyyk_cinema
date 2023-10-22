import React, { useContext, useState } from 'react';
import { Icon } from '@iconify/react';
import './SearchField.css'
import { MovieContext } from '../contexts/MovieContext';
import { fetchMoviesBySearch } from '../services/MovieServices';

function SearchField() {
    const { setSearchMoviesList, setIsSearched } = useContext(MovieContext);
    const [search, setsearch] = useState('')

    const fetchMovies = async () => {
        try {
            console.log('search :', search)
            const response = await fetchMoviesBySearch({ movieTitle: search || 'emptySearch' })
            setIsSearched(true)
            setSearchMoviesList(response.data)
        } catch (error) {

        }
    }

    return (
        <div className="search-field">
            <Icon icon="il:search" rotate={1} onClick={() => fetchMovies()} />
            <input
                type="text"
                placeholder='search movies'
                className="search-input"
                onChange={(e) => setsearch(e.target.value)}
            />
        </div>
    );
}

export default SearchField;
