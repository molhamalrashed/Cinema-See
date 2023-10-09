import React, { useEffect, useState } from 'react';
import UseFetch from './Use-fetch';
import '../App.css';
import { useFavorite } from './favorite-context';
import responsive from './responsive-carousel';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieRender from './Movie-render';

export function FavoritePage() {
    const favoriteIds = useFavorite();
    const [favoriteItems, setFavoriteItems] = useState([]);

    useEffect(() => {
        const items = [];

        for (const id of favoriteIds) {
            const newUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=0665c6c71e9e8a9e72a2cd9f0db72bef`;
            const { data: myItem, loading: itemsLoading, error: itemsError } = UseFetch(newUrl);

            if (itemsLoading) {
                console.log(`Loading item with ID ${id}...`);
            } else if (itemsError) {
                console.error(`Error fetching item with ID ${id}: ${itemsError.message}`);
            } else {
                const item = {
                    title: myItem.title || myItem.name,
                    description: myItem.overview,
                    poster: myItem.poster_path,
                    id: myItem.id
                };
                items.push(item);
            }
        }

        setFavoriteItems(items);

    }, [favoriteIds]);

    return (
        <div className='home-page'>
            <ul>
                <Carousel className='carousel' responsive={responsive}>
                    {favoriteItems.map((item) => (
                        <li key={item.id}>
                            <MovieRender title={item.title} description={item.overview} imgUrl={`https://image.tmdb.org/t/p/w500${item.poster}`} id={item.id} />
                        </li>
                    ))}
                </Carousel>
            </ul>
        </div>
    )
}

export default FavoritePage;