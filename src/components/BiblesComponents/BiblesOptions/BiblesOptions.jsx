import React, { useState } from "react";
import { Form, Button, Col, Row, Container, Accordion } from "react-bootstrap";
import './BiblesOptions.css'
import data from './../../../assets/CountriesandCities.json'
import * as BIBLES_CONSTS from './../../../consts/bibles-consts'

const BiblesOptions = ({ resetQueries, getQueries, resetBibles }) => {

    const countries = [...new Set(data.map((item) => item.locationCountry))];
    const [selectedCountry, setSelectedCountry] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const filteredCities = data
        .filter((item) => item.locationCountry === selectedCountry)
        .map((item) => item.locationCity);

    const resetOptions = () => {
        resetQueries();
        const form = document.getElementById('filter');
        const selectElements = form.getElementsByTagName('select');
        for (let i = 0; i < selectElements.length; i++) {
            selectElements[i].selectedIndex = 0;
        }

        resetBibles()

    }

    const handleCountryChange = (e) => {
        const country = e.target.value;
        setSelectedCountry(country);
        setSelectedCity("");
        resetBibles();
        getQueries({ locationCountry: country, locationCity: "" });
    };

    const handleCityChange = (e) => {
        const city = e.target.value;
        setSelectedCity(city);
        resetBibles();
        getQueries({ locationCity: city });
    };

    const handleOption = e => {
        const id = e.target.id;
        const { value } = e.target;
        resetBibles();
        getQueries({ [id]: value });
    }

    return (
        <div >
            <Accordion className="accordion" >
                <Accordion.Item eventKey="0">
                    <Accordion.Header><span>Filter Bibles by</span></Accordion.Header>
                    <Accordion.Body className="filtering-options">
                        <div id="filter">
                            <Container >
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="century">
                                            <Form.Label labelAlignment="left">Century</Form.Label>
                                            <Form.Control as="select" onChange={handleOption} name="century" required defaultValue=''>
                                                <option value="" disabled>Select</option>
                                                {BIBLES_CONSTS.CENTURY_SELECT.map((option, index) => (
                                                    <option key={index} value={option}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="format">
                                            <Form.Label labelAlignment="left">Format</Form.Label>
                                            <Form.Control as="select" onChange={handleOption} placeholder='Select' name="format" required defaultValue=''>
                                                <option value="" disabled>Select</option>
                                                {BIBLES_CONSTS.FORMAT_SELECT.map((option, index) => (
                                                    <option key={index} value={option}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="language">
                                            <Form.Label>Language</Form.Label>
                                            <Form.Control as="select" onChange={handleOption} placeholder='Select' name="language" required defaultValue=''>
                                                <option value="" disabled>Select</option>
                                                {BIBLES_CONSTS.LANGUAGE_SELECT.map((option, index) => (
                                                    <option key={index} value={option}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="scriptGeoculturalArea" >
                                            <Form.Label labelAlignment="left">Script Geocultural Area</Form.Label>
                                            <Form.Control as="select" onChange={handleOption} name="scriptGeoculturalArea" required defaultValue=''>
                                                <option value="" disabled>Select</option>
                                                {BIBLES_CONSTS.GEOCULTURAL_SELECT.map((option, index) => (
                                                    <option key={index} value={option}>
                                                        {option}
                                                    </option>
                                                ))}
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="locationCountry" require>
                                            <Form.Label labelAlignment="left">Country</Form.Label>
                                            <Form.Control
                                                as="select"
                                                onChange={handleCountryChange}
                                                name="locationCountry"
                                                required
                                                value={selectedCountry}
                                                defaultValue=''>
                                                <option value="" disabled>Select</option>
                                                {countries.map((country) => (
                                                    <option key={country} value={country}>
                                                        {country}
                                                    </option>
                                                ))}
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="locationCity" require>
                                            <Form.Label labelAlignment="left">City</Form.Label>
                                            <Form.Control
                                                as="select"
                                                onChange={handleCityChange}
                                                name="locationCity"
                                                value={selectedCity}
                                                defaultValue=''
                                            >
                                                <option value="">Select City</option>
                                                {filteredCities.map((city) => (
                                                    <option key={city} value={city}>
                                                        {city}
                                                    </option>
                                                ))}
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                </Row>
                            </Container>
                            <Col className="d-flex justify-content-center">
                                <Button variant="warning" onClick={resetOptions}>
                                    Clean
                                </Button>
                            </Col>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default BiblesOptions;
