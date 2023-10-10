import Button from 'react-bootstrap/Button';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import useFetch from './Use-fetch';
import apiUrls from './cinema-urls';
import { useApi } from './Api-context';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




function NavCinema() {
    const [searchQuery, setSearchQuery] = useState('')
    const navigate = useNavigate();

    const handleSearchQueryChange = (e) => {
        setSearchQuery(e.target.value);
    }

    useEffect(() => {
        if (searchQuery) {
            navigate(`/search/${searchQuery}`);
        }
    }, [searchQuery, navigate]);

    const { handleApiUrl } = useApi();
    const genresUrl = apiUrls.genres;
    const { data: myData, loading: genresLoading, error: genresError } = useFetch(genresUrl);

    if (genresLoading) {
        // Data is still loading
        return <div>Loading genres...</div>;
    }

    if (genresError || !myData || !myData.genres || !Array.isArray(myData.genres)) {
        // Handle errors or missing data
        return <div>Error loading genres or data is missing.</div>;
    }

    const genres = myData.genres;
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand as={Link} to="/" onClick={() => handleApiUrl('home')}>Cinema-See</Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >


                        <NavDropdown title="Type" id="navbarScrollingDropdown">
                            <NavDropdown.Item onClick={() => handleApiUrl('movies')}>
                                Movies
                            </NavDropdown.Item>
                            <NavDropdown.Item onClick={() => handleApiUrl('series')}>
                                Series
                            </NavDropdown.Item>

                        </NavDropdown>
                        <NavDropdown title="Genre" id="navbarScrollingDropdown">
                            {genres.map((genre) => (
                                <NavDropdown.Item key={genre.id} onClick={() => handleApiUrl(genre.id)}>
                                    {genre.name}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                        <Nav.Link as={Link} to="favorites">Favorite</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            value={searchQuery}
                            onChange={handleSearchQueryChange} // Update the state as the user types
                        />
                        <Button variant="outline-success" as={Link} to={`/search/${searchQuery}`}>
                            Search
                        </Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavCinema;