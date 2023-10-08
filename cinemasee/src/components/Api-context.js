import React, { useState, createContext, useContext } from 'react';
import apiUrls from './cinema-urls';

export const ApiContext = createContext();

export function ApiProvider({ children }) {
    const [apiUrl, setApiUrl] = useState(apiUrls.items);

    const handleApiUrl = (parameter) => {
        let newUrl = '';
        if (parameter === 'movies') {
            newUrl = apiUrls.movies;
        } else if (parameter === 'series') {
            newUrl = apiUrls.TV;
        } else if (parameter === 'home') {
            newUrl = apiUrls.items;
        } else {
            newUrl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${parameter}&api_key=0665c6c71e9e8a9e72a2cd9f0db72bef`;
        }

        setApiUrl(newUrl);
    }
    return (
        <ApiContext.Provider value={{ apiUrl, handleApiUrl }}>
            {children}
        </ApiContext.Provider>
    );
}

export function useApi() {
    return useContext(ApiContext);
}