import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './LandingPage.css';



const LandingPage = () => {
    return (
        <div>
            <section className="carousel-section">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://64.media.tumblr.com/415a90aeec129f84a340291e4df4fd4b/273d709354fcb3d0-82/s2048x3072/e7ecc6ba59832812cf4550b0aa350552268f7b50.pnj"
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://64.media.tumblr.com/5ea42363d081a75e21908da10ae08e03/273d709354fcb3d0-af/s2048x3072/59d6db1e6fdf308793afce2e4c8f3e27782a14b5.pnj"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://64.media.tumblr.com/8d2e118c00ed4c0a3517cfe746d20575/273d709354fcb3d0-5f/s2048x3072/9a5eefcaa9063d8ac109fa54d36fe33ef8290fa3.pnj"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </section>
            <hr />
            <section className="section-2">
                <Container>
                    <h3 className="text-center1"><b>Check the collection of Hebrew Bible manuscripts in Madrid </b></h3>
                    <Row className='threeCards'>


                        <Col>
                            <div className="card-container">
                                <Card className='libraryCard'>

                                    <div className="card-inner">
                                        <Card.Img variant="top" src="https://64.media.tumblr.com/9c49a504de6ccd0202d0fdb93e8e5dfe/e73b224adcc65676-b7/s2048x3072/063a63829ee6eec269049a6203e0337ce0bce5a8.jpg" />
                                        <Card.Body>
                                            <Card.Title className='d-flex justify-content-center'>BNE</Card.Title>
                                        </Card.Body>
                                        <Card.Body className="card-back">
                                            <Card.Text>It was founded by Felipe V at the end of 1711 and opened its doors in March 1712 as the Royal Public Library. By a royal privilege, precedent of the current legal deposit, the printers had to deposit a copy of the books printed in Spain. In 1836, the Library ceased to be the property of the crown and became dependent on the Ministry of the Interior, and received the name of the National Library for the first time.</Card.Text>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </div>
                        </Col>

                        <Col>
                            <div className="card-container">
                                <Card className='libraryCard'>
                                    <div className="card-inner">
                                        <Card.Img variant="top" src="https://64.media.tumblr.com/d90b8dd0c014a0c7cfaea415415bfa73/e73b224adcc65676-e3/s1280x1920/52122be3c99512c434f40aa1090e13472e486aa5.jpg" />
                                        <Card.Body>
                                            <Card.Title className='d-flex justify-content-center'>Escorial Library</Card.Title>
                                        </Card.Body>
                                        <Card.Body className="card-back">
                                            <Card.Text>The Laurentian Library was founded as a great Renaissance library by King Philip II in the 16th century. This space stands out for its wealth of old printed books, especially editions from the 15th and 16th centuries, housing up to 40,000 volumes and 600 incunabula inside.
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </div>
                        </Col>
                        <Col>
                            <div className="card-container">
                                <Card className='libraryCard'>
                                    <div className="card-inner">
                                        <Card.Img variant="top" src="https://64.media.tumblr.com/957a3e64fb885e9d6be9fcddbce4f452/e73b224adcc65676-0c/s1280x1920/c61c645d7addbaa7b3b4e9a7d493560c41ea26ec.jpg" />
                                        <Card.Body>
                                            <Card.Title className='d-flex justify-content-center'>Royal Palace Library</Card.Title>
                                        </Card.Body>
                                        <Card.Body className="card-back">
                                            <Card.Text> The Royal Library served as a private library for the kings of the House of Bourbon since the arrival of Felipe V. This institution must be opposed by the term of Royal Public, with which what is now the National Library was distinguished from the Private. Both institutions had a common origin. Its definitive separation took place in 1836, the year in which the Real Pública passed into the hands of the State and to be managed by the Ministry of the Interior of the Kingdom.
                                            </Card.Text>
                                        </Card.Body>
                                    </div>
                                </Card>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <hr />
            <section className="section-3">
                <h3 className="text-center2"> <b>The collaborating libraries and institutions</b></h3>

                <Container className='logoBox'>

                    <Row md={{ span: 12 }} >
                        <Col md={{ span: 3 }}>
                            <Link to={"https://www.csic.es/es"} target="_blank" rel="noopener noreferrer">
                                <img className='logo1' src="https://64.media.tumblr.com/b16628ed8b3e8af28399f8cac8f0fa3d/273d709354fcb3d0-56/s250x400/f3d7f9271df4bb24c5b1a57b41344d6d1d66094a.jpg" alt="logo 1" />
                            </Link>
                        </Col>
                        <Col md={{ span: 3 }}>
                            <Link to={"https://www.bodleian.ox.ac.uk/home"} target="_blank" rel="noopener noreferrer">
                                <img className='logo2' src="https://64.media.tumblr.com/06444fed5d3401c3764d0142a6998483/e8bff33c938be8e7-26/s1280x1920/5c8e376078192b53640eeb050bf2e0305fbdb340.pnj" alt="logo 2" />

                            </Link>
                        </Col>
                        <Col md={{ span: 3 }}>
                            <Link to={"https://pares.culturaydeporte.gob.es/archivos-estatales.html"} target="_blank" rel="noopener noreferrer">
                                <img className='logo3' src="https://64.media.tumblr.com/914c4b91d229adcf642fb40a51ed062d/e8bff33c938be8e7-e5/s1280x1920/b58584d69529bd0450f14683b24ae703e2826dcd.jpg" alt="logo 3" />

                            </Link>
                        </Col>
                        <Col md={{ span: 3 }}>
                            <Link to={"https://www.ucm.es/"} target="_blank" rel="noopener noreferrer">
                                <img className='logo4' src="https://64.media.tumblr.com/9a8f966b2729f81ff1f3b0719b9b8bcd/e8bff33c938be8e7-7a/s1280x1920/2e967680224cc9203e223ea9071f56a4e87f85d8.pnj" alt="logo 4" />

                            </Link>
                        </Col>
                    </Row>
                    <Row md={{ span: 12 }}>
                        <Col md={{ span: 3 }}>
                            <Link to={"https://whttps://www.bnf.fr/fr"} target="_blank" rel="noopener noreferrer">
                                <img className='logo5' src="https://64.media.tumblr.com/169ba21fa869b9433fc2f6294beeb0a0/273d709354fcb3d0-f2/s250x400/fa9822b5077a01ee51b9cc2dd91b2c7050835d3e.pnj" alt="logo 5" />

                            </Link>
                        </Col>
                        <Col md={{ span: 3 }}>
                            <Link to={"https://www.bl.uk/"} target="_blank" rel="noopener noreferrer">
                                <img className='logo6' src="https://64.media.tumblr.com/775e0f2e1bf0b83cc1087a7b0ca0715e/e8bff33c938be8e7-a6/s250x400/f0de25ee71b67489144d8dcd019206a17cd0944f.pnj" alt="logo 6" />

                            </Link>
                        </Col >
                        <Col md={{ span: 3 }}>
                            <Link to={"https://www.patrimonionacional.es/"} target="_blank" rel="noopener noreferrer">
                                <img className='logo7' src="https://64.media.tumblr.com/cf48b7dab4623979e17ee35b85b80ae5/e8bff33c938be8e7-fb/s640x960/3b36d742abd377540490d00d0932f75ec3343fde.jpg" alt="logo 7" />

                            </Link>
                        </Col>
                        <Col md={{ span: 3 }}>
                            <Link to={"https://www.bne.es/es"} target="_blank" rel="noopener noreferrer">
                                <img className='logo8' src="https://64.media.tumblr.com/65319b9bfeeeff19a9c80e63942e1856/e8bff33c938be8e7-11/s400x600/75815d0cdee301b488d1425d0e8d391c03749cb0.jpg" alt="logo 8" />

                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div >
    );
};

export default LandingPage