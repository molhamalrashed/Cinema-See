import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavCinema from './components/NavCinema.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrentPage from './components/Current-page.js';
import { ApiProvider } from './components/Api-context';
import { FavoriteProvider } from './components/favorite-context';




function App() {

  return (
    <FavoriteProvider>
      <ApiProvider>
        <div>
          <NavCinema />
          <CurrentPage />
        </div>
      </ApiProvider>
    </FavoriteProvider>
  )
}

export default App;
