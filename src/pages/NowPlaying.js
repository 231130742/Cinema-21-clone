import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import '../styles/NowPlaying.css';

const movieData = [
  { id: 1, title: 'Absolution', poster: 'https://media.21cineplex.com/webcontent/gallery/pictures/172907313513116_290x426.jpg', advance: false, rating: 'D17+' },
  { id: 2, title: 'Koma - Berhenti Sebelum Mati ', poster: 'https://media.21cineplex.com/webcontent/gallery/pictures/17290033061306_290x426.jpg', advance: false, rating: 'R13+' },
  { id: 3, title: 'Venom: The Last Dance', poster: 'https://media.21cineplex.com/webcontent/gallery/pictures/17284681325846_290x426.jpg', advance: true, rating: 'SU' },
  { id: 4, title: 'Here', poster: 'https://media.21cineplex.com/webcontent/gallery/pictures/172803756862475_290x426.jpg', advance: false, rating: 'R13+' },
];

function NowPlaying() {
  const [movies, setMovies] = useState([]);
  const [selectedCity, setSelectedCity] = useState('Jakarta');

  useEffect(() => {
    setMovies(movieData);
  }, []);

  return (
    <div className="nowplaying-page">
      <div className="container-upcoming">
        <div className="header-now">
          <h2 className="section-title-now">Now Playing</h2>
          <div className="city-dropdown-container">
            <select
              className="city-dropdown"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              <option value="Jakarta">Jakarta</option>
              <option value="Bandung">Bandung</option>
              <option value="Surabaya">Surabaya</option>
              <option value="Medan">Medan</option>
              <option value="Bali">Bali</option>
            </select>
          </div>
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

export default NowPlaying;
