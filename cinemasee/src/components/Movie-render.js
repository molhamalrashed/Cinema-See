import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css';
import { useFavorite } from './favorite-context';
import RegularHeart from './regular-heart';
import SolidHeart from './solid-heart';
import { Link } from 'react-router-dom';


function MovieRender({ title, description, imgUrl, id }) {


    //this part to handle the add to favorite feature 
    const { addFavoriteItem, removeFromFavoriteItems, isFavorite } = useFavorite();
    const isMovieFavorite = isFavorite(id)
    const toggleFavorite = () => {
        if (isMovieFavorite) {
            removeFromFavoriteItems(id)
        } else {
            addFavoriteItem({ title, description, imgUrl, id })
        }
    }


    //this part to show more or less of the movie card
    const [showFullDescription, setShowFullDescription] = useState(false);
    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imgUrl} />
            <Card.Body>
                <Card.Title>{showFullDescription ? title : `${title.slice(0, 20)}...`}</Card.Title>
                <Card.Text>
                    {showFullDescription ? description : `${description.slice(0, 50)}...`}
                </Card.Text>
                <Button className='show-btn' variant="primary" onClick={toggleDescription}>
                    {showFullDescription ? 'Show less' : 'Show more'}
                </Button>
                <button className='favorite-btn' onClick={toggleFavorite}>
                    {isMovieFavorite ? <SolidHeart /> : <RegularHeart />}
                </button>
                <Button as={Link} to={`/details/${id}`} className='all-details'>All details </Button>
            </Card.Body>
        </Card>
    );
}

export default MovieRender;
