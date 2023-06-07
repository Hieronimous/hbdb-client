import React from 'react';
import './LandingComponent.css';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import YouTube from 'react-youtube';


const LandingComponent = () => {

    const videoOptions = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div className="LandingPage">
            <section className="full-width-carousel">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://64.media.tumblr.com/63e116643c83366a7631127605efcc56/e8bff33c938be8e7-9c/s2048x3072/e3e3431cb7c5b6e3990bc24a2d4157e166f513d7.pnj"
                            alt="Slide 1"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://64.media.tumblr.com/3b0cca564ca60ae3723a3802650e5ad5/e8bff33c938be8e7-e6/s2048x3072/0822ef930fea91f8f2be7db43c9ed668de597599.pnj"
                            alt="Slide 2"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://64.media.tumblr.com/5d63594e740d25dbe7949843b1dff5cb/e8bff33c938be8e7-2c/s2048x3072/0bc1337aa7566ffe48451c8cb9b37dbe6630cd0d.pnj"
                            alt="Slide 3"
                        />
                    </Carousel.Item>
                </Carousel>
            </section>
            <section className="middle-section">
                <div className="text-container">
                    <p>
                        The hebrew Biibles Data Base is ...
                    </p>
                </div>
            </section>

            <section className="carousel-with-content">
                <Container>
                    <Row>
                        <Col md={6} className="order-md-2">
                            <Carousel >
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://64.media.tumblr.com/957a3e64fb885e9d6be9fcddbce4f452/e73b224adcc65676-0c/s1280x1920/c61c645d7addbaa7b3b4e9a7d493560c41ea26ec.jpg"
                                        alt="Slide 4"
                                    />
                                    <Carousel.Caption>
                                        <h3>Royal Palace Library</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://64.media.tumblr.com/d90b8dd0c014a0c7cfaea415415bfa73/e73b224adcc65676-e3/s1280x1920/52122be3c99512c434f40aa1090e13472e486aa5.jpg"
                                        alt="Slide 5"
                                    />
                                    <Carousel.Caption>
                                        <h3>Escorial Library</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://64.media.tumblr.com/9c49a504de6ccd0202d0fdb93e8e5dfe/e73b224adcc65676-b7/s2048x3072/063a63829ee6eec269049a6203e0337ce0bce5a8.jpg"
                                        alt="Slide 6"
                                    />
                                    <Carousel.Caption>
                                        <h3>BNE</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col md={6} className="order-md-1">
                            <div className="librariesText">
                                <p>Check the complete collection of Hebrew Bible manuscripts in Madrid</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>


        </div>
    );
};

export default LandingComponent;
