import React, { useState, createContext, useContext } from 'react';

const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
    const [favoriteIds, setFavoriteIds] = useState([]);

    const addFavoriteId = (itemId) => {
        setFavoriteIds((prevIds) => [...prevIds, itemId]);
    }

    const removeFromFavoriteIds = (itemId) => {
        setFavoriteIds((prevIds) =>
            prevIds.filter((id) => id !== itemId)
        );
    }

    const isFavorite = (itemId) => {
        return favoriteIds.includes(itemId);
    }

    return (
        <FavoriteContext.Provider value={{ favoriteIds, addFavoriteId, removeFromFavoriteIds, isFavorite }}>
            {children}
        </FavoriteContext.Provider>
    );
}


export function useFavorite() {
    return useContext(FavoriteContext);
} 
