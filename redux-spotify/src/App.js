import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ArtistPage from './components/ArtistPage';
import AlbumPage from './components/AlbumPage';
import Sidebar from './components/Sidebar';
import PlayerBar from './components/PlayerBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <Sidebar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/artist" element={<ArtistPage />} />
          <Route path="/album" element={<AlbumPage />} />
        </Routes>
        <PlayerBar />
      </div>
    </Router>
  );
};

export default App;