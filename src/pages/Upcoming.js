// src/pages/Upcoming.js
import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import '../styles/Upcoming.css'

const movieData = [
  { id: 1, title: 'Singham Again', poster: 'https://media.21cineplex.com/webcontent/gallery/pictures/173028817723172_290x426.jpg', advance: false, rating: 'D17+' },
  { id: 2, title: 'Bhool Bhulaiyaa 3', poster: 'https://media.21cineplex.com/webcontent/gallery/pictures/173028807185255_290x426.jpg', advance: false, rating: 'R13+' },
  { id: 3, title: 'Red One (IMAX 2D)', poster: 'https://media.21cineplex.com/webcontent/gallery/pictures/173011047695881_290x426.jpg', advance: true, rating: 'D17+' },
  { id: 4, title: 'You Will Die in 6 Hours', poster: 'https://media.21cineplex.com/webcontent/gallery/pictures/172976694182117_290x426.jpg', advance: false, rating: 'R13+' },
  // Add more movie data if needed
];

function Upcoming() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(movieData);
  }, []);

  return (
    <div className="upcoming-page">
      <div className="container">
        <h2 className="section-title">Upcoming Movies</h2>
        <div className="movies-grid">
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
        <div className="movies-grid">
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Upcoming;
