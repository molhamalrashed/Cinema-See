import React, { useState, createContext, useContext } from 'react';

export const FavoriteContext = createContext();

export function FavoriteProvider({ children }) {
    const [favoriteItems, setFavoriteItems] = useState([]);

    const addFavoriteItem = ({ title, description, imgUrl, id }) => {
        const item = {
            title: title,
            description: description,
            poster: imgUrl,
            id: id
        }
        setFavoriteItems((prevItems) => [...prevItems, item]);
    }

    const removeFromFavoriteItems = (id) => {
        setFavoriteItems((prevItems) =>
            prevItems.filter((item) => item.id !== id)
        );
    }

    const isFavorite = (itemId) => {
        return favoriteItems.some((item) => item.id === itemId);
    }

    return (
        <FavoriteContext.Provider value={{ favoriteItems, addFavoriteItem, removeFromFavoriteItems, isFavorite }}>
            {children}
        </FavoriteContext.Provider>
    );
}


export function useFavorite() {
    return useContext(FavoriteContext);
} 
