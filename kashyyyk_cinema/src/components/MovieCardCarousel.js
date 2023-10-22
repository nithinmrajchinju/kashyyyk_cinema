import React from 'react';
import "./MovieCardCarousel.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MovieCard from './MovieCard';

function MovieCardCarousel({ movieData }) {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        autoplay: true,
    };

    return (
        <Slider {...settings} className='slider'>
            {movieData.map((movie) => (
                <MovieCard movieData={movie} />
            ))}
        </Slider>
    );
}

export default MovieCardCarousel;
