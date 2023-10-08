
import React from 'react';
import CurrentPage from './CurrentPage';
import apiUrls from '../components/cinema-urls';

const SeriesPage = () => {
    const seriesUrl = apiUrls.TV;
    return (
        <div>
            <h1>Series</h1>
            <CurrentPage url={seriesUrl} />
        </div>
    );
};

export default SeriesPage;
