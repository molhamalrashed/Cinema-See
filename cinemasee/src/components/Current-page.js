import React from 'react';
import '../App.css';
import useFetch from './Use-fetch';
import MovieRender from './Movie-render';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import responsive from './responsive-carousel';
import { useApi } from './Api-context';


export const CurrentPage = () => {

    const { apiUrl } = useApi()

    const { data: myItems, loading: itemsLoading, error: itemsError } = useFetch(apiUrl);

    const items = myItems.results;


    if (itemsLoading) {
        return <div>Loading...</div>;
    }

    if (itemsError) {
        return <div>Error: {itemsError.message}</div>;
    }

    if (!Array.isArray(items)) {
        return <div>There is a problem with your request</div>;
    }

    return (
        <div className='home-page'>
            <ul >
                <Carousel className='carousel' responsive={responsive}>
                    {items.map((item) => (
                        <li key={item.id}>
                            <MovieRender title={item.title || item.name} description={item.overview} imgUrl={`https://image.tmdb.org/t/p/w500${item.poster_path}`} id={item.id} />
                        </li>
                    ))}
                </Carousel>
            </ul>
        </div>
    );
};

export default CurrentPage;
