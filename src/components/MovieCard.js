import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MovieCard.css';

function MovieCard({ movie }) {
  // URLs for rating icons
  const ratingIcons = {
    'R13+': 'https://21cineplex.com/theme/v5/assets/img/icons/labels/r13.png',
    'D17+': 'https://21cineplex.com/theme/v5/assets/img/icons/labels/d17.png',
    'SU': 'https://21cineplex.com//theme/v5/assets/img/icons/labels/su.png'
  };

  return (
    <div className="movie-card-wrapper">
      {movie.advance && <div className="badge">ADVANCE TICKET SALES</div>}
      <div className="movie-card">
        <Link to={`/movie/${movie.id}`}>
          <img src={movie.poster} alt={movie.title} className="movie-poster" />
        </Link>
        <h3 className="movie-title">{movie.title}</h3>
      </div>
      {movie.rating && (
        <img src={ratingIcons[movie.rating]} alt={movie.rating} className="rating-icon-outside" />
      )}
    </div>
  );
}

export default MovieCard;
