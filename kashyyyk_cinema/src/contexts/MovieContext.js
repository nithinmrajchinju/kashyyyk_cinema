import React, { createContext, useState } from 'react';

const MovieContext = createContext();

const MovieContextProvider = ({ children }) => {
    const [searchMoviesList, setSearchMoviesList] = useState('');
    const [isSearched, setIsSearched] = useState(false);

    return (
        <MovieContext.Provider value={
            {
                searchMoviesList,
                setSearchMoviesList,
                isSearched,
                setIsSearched
            }
        }>
            {children}
        </MovieContext.Provider>
    );
};

export { MovieContext, MovieContextProvider };
