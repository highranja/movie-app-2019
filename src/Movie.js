import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ year, title, summary, poster, genres }) {
    return(
        <div className="movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie_title">{title}</h3>
                <h4 className="movie_year">{year}</h4>
                <p className="movie_summary">{summary}</p>
                <ul className='genres'>{
                genres.map((genre,index) => <li key={index} className='genres__genre'>{genre}</li>)
                }</ul>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired, 
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
}

export default Movie;