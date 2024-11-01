import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/MovieDetail.css';

const movieData = [
  { 
    id: 1, 
    title: 'Absolution', 
    duration: '112 Minutes', 
    genre: 'Action, Crime', 
    producer: 'Michael Besman, Roger Birnbaum, Eric Gold', 
    director: 'Hans Petter Moland', 
    writer: 'Tony Gayton', 
    production: 'Samuel Goldwyn Films', 
    cast: 'Liam Neeson, Ron Perlman, Frankie Shaw, Daniel Diemer, Yolonda Ross, Deanna Tarraza, Levon Panek, Ryan Homchick', 
    synopsis: 'Seorang gangster (Liam Neeson) berusaha untuk berhubungan kembali dengan anak-anaknya dan memperbaiki kesalahan masa lalunya. Namun, dunia hitam kriminal tidak rela melepaskannya begitu saja.', 
    rating: 'D17+', 
    poster: 'https://media.21cineplex.com/webcontent/gallery/pictures/172907313513116_290x426.jpg' 
  },
  // Add other movies here as needed
];

function MovieDetail() {
  const { id } = useParams();
  const movie = movieData.find(movie => movie.id === parseInt(id));

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div className="movie-detail">
      <h2 className="movie-title">{movie.title}</h2>
      <div className="movie-info">
        <div className="movie-poster-container">
          <img src={movie.poster} alt={movie.title} className="movie-poster" />
          <div className="duration-rating">
            <img 
              src="https://21cineplex.com/theme/v5/assets/img/icons/labels/d17.png" 
              alt={movie.rating} 
              className="rating-icon" 
            />
            <span className="movie-duration">{movie.duration}</span>
          </div>
        </div>
        <div className="movie-details">
          <p><strong>Jenis Film:</strong> {movie.genre}</p>
          <p><strong>Produser:</strong> {movie.producer}</p>
          <p><strong>Sutradara:</strong> {movie.director}</p>
          <p><strong>Penulis:</strong> {movie.writer}</p>
          <p><strong>Produksi:</strong> {movie.production}</p>
          <p><strong>Casts:</strong> {movie.cast}</p>
          <div className="movie-links">
            <a href="/watch-trailer" className="link-button">Watch Trailer</a>
            <a href="/playing-at" className="link-button">Playing At</a>
          </div>
          <div className="synopsis">
            <h3>Sinopsis</h3>
            <p>{movie.synopsis}</p>
          </div>
          <button className="buy-ticket">Buy Ticket</button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
