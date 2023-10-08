
import React from 'react';
import CurrentPage from './CurrentPage';
import apiUrls from '../components/cinema-urls';


export const MoviesPage = () => {
    const moviesUrl = apiUrls.movies;
    return (
        <div>
            <CurrentPage url={moviesUrl} />
        </div>
    );
};

export default MoviesPage;
