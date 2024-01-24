// server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const authenticate = require('./config/auth');
const Movie = require('./models/Movie');
const { lowerCase } = require('lodash');
const app = express();
const port = process.env.PORT || 9000;

app.use(cors());

connectDB(); // Call the connectDB function to establish the MongoDB connection

// API route to get movies grouped by genres
app.get('/movies/bygenre', authenticate, async (req, res) => {
    try {
        const movies = await Movie.find();

        const groupedData = {};

        movies.forEach(movie => {
            movie.genres.forEach(genre => {
                if (!groupedData[genre]) {
                    groupedData[genre] = { category: genre, movies: [] };
                }
                groupedData[genre].movies.push({
                    director: movie.director,
                    imdb_rating: movie.imdb_rating,
                    length: movie.length,
                    poster: movie.poster,
                    title: movie.title,
                    slug: movie.slug,
                });
            });
        });

        const resultArray = Object.values(groupedData);

        return res.json(resultArray);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.get('/movies/:movieTitle', authenticate, async (req, res) => {
    try {
        const movieTitle = req.params.movieTitle
        console.log("lowerCase(movieTitle) :", lowerCase(movieTitle))
        const movies = await Movie.find();
        let moviesSearchList = []

        movies.forEach(movie => {
            if (lowerCase(movie.title).includes(lowerCase(movieTitle)))
                moviesSearchList.push({
                    director: movie.director,
                    imdb_rating: movie.imdb_rating,
                    length: movie.length,
                    poster: movie.poster,
                    title: movie.title,
                    slug: movie.slug,
                });
        });

        const resultArray = Object.values(moviesSearchList);

        return res.json(resultArray);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

app.get('/', (req, res) => {
    res.send('Hello, MERN!');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
