import React from 'react'
import useFetch from './Use-fetch';
import '../App.css';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useFavorite } from './favorite-context';




export const AllDetails = () => {
    const { id } = useParams();
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=0665c6c71e9e8a9e72a2cd9f0db72bef`
    const { data: movie, loading: itemsLoading, error: itemsError } = useFetch(apiUrl);



    const { addFavoriteItem, removeFromFavoriteItems, isFavorite } = useFavorite();
    const isMovieFavorite = isFavorite(movie.id)
    const toggleFavorite = () => {
        if (isMovieFavorite) {
            removeFromFavoriteItems(movie.id)
        } else {
            addFavoriteItem({ title: movie.title, description: movie.overview, imgUrl: movie.poster_path, id: movie.id })
        }
    }



    if (itemsLoading) {
        return <div>Loading...</div>;
    }

    if (itemsError) {
        return <div>Error: {itemsError.message}</div>;
    }



    return (
        <div className='full-details'>
            <Card style={{ width: '26rem' }}>
                <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
                <Card.Body>
                    <Card.Title>{movie.title || movie.name}</Card.Title>
                </Card.Body>
            </Card>
            <Card className="text-center" style={{ width: '50rem' }}>
                <Card.Header>Release Date: {movie.release_date}</Card.Header>
                <Card.Body>
                    <Card.Title>Description</Card.Title>
                    <Card.Text>
                        {movie.overview}
                    </Card.Text>
                    <Button href={movie.homepage} variant="primary">Original Link</Button>
                    <Card.Header>Other Information</Card.Header>
                </Card.Body>
                <Card.Text>1. Popularity: {movie.popularity} watches</Card.Text>
                <Card.Text>2. Run Time: {movie.runtime} minutes</Card.Text>
                <Card.Text>
                    3. Spoken Languages:
                    <ul className='other-info-list'>
                        {movie.spoken_languages.map((language) => (
                            <li key={language.iso_639_1}>{language.name}</li>
                        ))}
                    </ul>
                </Card.Text>
                <Card.Text>
                    4. Genres:
                    <ul className='other-info-list'>
                        {movie.genres.map((genre) => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                </Card.Text>
                <Card.Text>
                    5. Production Companies:
                    <ul className='other-info-list'>
                        {movie.production_companies.map((company) => (
                            <li key={company.id}>{company.name}</li>
                        ))}
                    </ul>
                </Card.Text>
                <Button variant="primary" onClick={toggleFavorite} style={{ backgroundColor: isMovieFavorite ? "red" : "blue", color: "white" }}>
                    {isMovieFavorite ? "Remove from favorites" : "Add to favorites"}
                </Button>
                <Card.Footer className="text-muted">{movie.status}</Card.Footer>
            </Card>
        </div>
    );
}

export default AllDetails;