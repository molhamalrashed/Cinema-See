import React from 'react';
import '../App.css';
import { useFavorite } from './favorite-context';
import responsive from './responsive-carousel';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieRender from './Movie-render';



export function FavoritePage() {

    const { favoriteItems } = useFavorite();



    return (
        <div className='home-page'>
            <ul>
                <Carousel className='carousel' responsive={responsive}>
                    {favoriteItems.map((item) => (
                        <li key={item.id}>
                            <MovieRender title={item.title} description={item.overview || item.description} imgUrl={`https://image.tmdb.org/t/p/w500${item.poster}`} id={item.id} />
                        </li>
                    ))}
                </Carousel>
            </ul>
        </div>
    )
}

export default FavoritePage;
