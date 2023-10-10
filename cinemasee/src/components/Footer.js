
import Card from 'react-bootstrap/Card';

function Footer() {
    return (
        <Card className="text-center">
            <Card.Header>ABOUT US</Card.Header>
            <Card.Body>
                <div className='footer'>
                    <div className='footer-element'>
                        <Card.Title>Cinema-See</Card.Title>
                        <Card.Text>
                            We are a web application to provide a huge database of movie, TV shows and way more..
                        </Card.Text>
                        <Card.Title>What is used</Card.Title>
                        <Card.Text>
                            React, React-Router, Bootstrap
                        </Card.Text>
                    </div>
                    <div className='footer-element'>
                        <Card.Title>E-mail</Card.Title>
                        <Card.Text>
                            molham.aaaa@gmail.com
                        </Card.Text>
                        <Card.Title>Telephone Number</Card.Title>
                        <Card.Text>
                            +316xxxxxxxxx
                        </Card.Text>
                    </div>
                </div>
            </Card.Body>
            <Card.Footer className="text-muted">THANK YOU FOR VISITING</Card.Footer>
        </Card>
    );
}

export default Footer;