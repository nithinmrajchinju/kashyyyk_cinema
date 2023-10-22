const express = require('express');
const router = express.Router();
const authenticate = require('../config/auth');
const Movie = require('../models/Movie');

// API route to get movies grouped by genres
router.get('/movies', authenticate, async (req, res) => {
    try {
        const movies = await Movie.find();
        const groupedMovies = {};

        movies.forEach((movie) => {
            const genre = movie.genre;

            if (!groupedMovies[genre]) {
                groupedMovies[genre] = [];
            }

            groupedMovies[genre].push({
                title: movie.title,
                director: movie.director,
                imdb_rating: movie.imdb_rating,
                length: movie.length,
                poster: movie.poster,
                slug: movie.slug,
            });
        });

        const result = Object.keys(groupedMovies).map((category) => ({
            category,
            movies: groupedMovies[category],
        }));

        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
