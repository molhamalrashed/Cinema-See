import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../App.css';

function MovieRender({ title, description, imgUrl }) {
    const [showFullDescription, setShowFullDescription] = useState(false);

    const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imgUrl} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {showFullDescription ? description : `${description.slice(0, 50)}...`}
                </Card.Text>
                <Button variant="primary" onClick={toggleDescription}>
                    {showFullDescription ? 'Show less' : 'Show more'}
                </Button>
                <Button className='all-details'>All details </Button>
            </Card.Body>
        </Card>
    );
}

export default MovieRender;
