import React, { useState, useEffect } from 'react';
import '../App.css';
import MovieRender from './Movie-render';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import responsive from './responsive-carousel';
import { useParams } from 'react-router-dom';


export const Search = () => {
    const { searchQuery } = useParams();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiUrl = `https://api.themoviedb.org/3/search/multi?api_key=0665c6c71e9e8a9e72a2cd9f0db72bef&query=${searchQuery}`;


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const jsonData = await response.json();
                const filteredData = jsonData.results.filter(
                    (item) => item.id && item.overview && (item.title || item.name) && item.poster_path
                );
                setData(filteredData);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchData();
    }, [apiUrl]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='home-page'>
            <ul >
                <Carousel className='carousel' responsive={responsive}>
                    {data.map((item) => (
                        <li key={item.id}>
                            <MovieRender title={item.title || item.name} description={item.overview} imgUrl={`https://image.tmdb.org/t/p/w500${item.poster_path}`} id={item.id} />
                        </li>
                    ))}
                </Carousel>
            </ul>
        </div>
    );
};

export default Search;