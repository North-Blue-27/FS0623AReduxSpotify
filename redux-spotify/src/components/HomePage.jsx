import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import PlayerBar from './PlayerBar';
import { Link } from 'react-router-dom';


const HomePage = () => {
  useEffect(() => {
    // Inizializzazioni per la pagina
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="col-12 col-md-9 offset-md-3 mainPage">
          <div className="row">
            <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
              {/* Aggiungi i link principali della home page... */}
              <Link to="#">TRENDING</Link>
              <Link to="#">PODCAST</Link>
              <Link to="#">MOODS AND GENRES</Link>
              <Link to="#">NEW RELEASES</Link>
              <Link to="#">DISCOVER</Link>
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <div id="searchResults" style={{ display: 'none' }}>
                <h2>Search Results</h2>
                <div
                  className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                ></div>
              </div>
            </div>
          </div>
          {/* Aggiungi il resto del codice per la home page... */}
        </div>
      </div>
      <PlayerBar />
    </div>
  );
}

export default HomePage;