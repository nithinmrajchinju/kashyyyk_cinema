import axios from 'axios';

const BASE_URL = 'http://localhost:9000';
const AUTH_TOKEN = 'Bearer FSMovies2023';

export const fetchMoviesBygenre = () => {
    return axios.get(`${BASE_URL}/movies/bygenre`, {
        headers: {
            Authorization: AUTH_TOKEN,
        },
    });
};

export const fetchMoviesBySearch = ({ movieTitle }) => {
    return axios.get(`${BASE_URL}/movies/${movieTitle}`, {
        headers: {
            Authorization: AUTH_TOKEN,
        },
    });
};

export const createMovie = (movieData) => {
    return axios.post(`${BASE_URL}/movies`, movieData);
};
