import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import NowPlaying from './pages/NowPlaying';
import Upcoming from './pages/Upcoming';
import Theaters from './pages/Theaters';
import './styles/index.css';
import Profile from './components/Profile';
import MovieDetail from './components/MovieDetail';
import Terms from './components/Terms';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/now-playing" element={<NowPlaying />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/theaters" element={<Theaters />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/terms" Component={Terms} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;