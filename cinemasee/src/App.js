import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavCinema from './components/NavCinema.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import CurrentPage from './components/Current-page.js';
import { ApiProvider } from './components/Api-context';
import { FavoriteProvider } from './components/favorite-context';
import FavoritePage from './components/Favorite-page';
import AllDetails from './components/All-details';
import Search from './components/Search';




function App() {

  return (
    <FavoriteProvider>
      <ApiProvider>
        <Router>
          <div>
            <NavCinema />
            <Routes>
              <Route path="/" element={<CurrentPage />} />
              <Route path="/favorites" element={<FavoritePage />} />
              <Route path="/details/:id" element={<AllDetails />} />
              <Route path="/search/:searchQuery" element={<Search />} />
            </Routes>
          </div>
        </Router>
      </ApiProvider>
    </FavoriteProvider>
  )
}

export default App;
