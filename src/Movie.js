import React from 'react';
import PropTypes from 'prop-types';


const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';

const Movie = ({ movie }) => {
    return (
            <div>
                <img src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
            </div>
    )
}

export default Movie;

Movie.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string.isRequired
    }).isRequired
}