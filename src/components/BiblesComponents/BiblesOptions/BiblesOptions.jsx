import React, { useState } from "react";
import { Form, Button, Col, Row, Container, Accordion } from "react-bootstrap";
import './BiblesOptions.css'
import data from './../../../assets/CountriesandCities.json'

const BiblesOptions = ({ resetQueries, getQueries, resetPage }) => {

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
        resetPage();
    }

    const handleCountryChange = (e) => {
        const country = e.target.value;
        setSelectedCountry(country);
        setSelectedCity("");
        resetPage();
        getQueries({ locationCountry: country, locationCity: "" });
    };

    const handleCityChange = (e) => {
        const city = e.target.value;
        setSelectedCity(city);
        resetPage();
        getQueries({ locationCountry: selectedCountry, locationCity: city });
    };

    const handleOption = e => {
        const id = e.target.id;
        const { value } = e.target;
        resetPage();
        getQueries({ [id]: value });
    }

    const languagesSelect = ["", "Hebrew", "Aramaic", "Hebrew & Aramaic", "Aramaic & Latin", "Hebrew & Latin", "Hebrew & vernacular", "Aramaic & vernacular"];
    const formatSelect = ["", "Codex", "Scroll", "Fragment"];
    const centurySelect = ["", "Unknown", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"];
    const scriptGeoculturalAreaSelect = ["", "Unknown", "Sefarad", "Orient", "Ashkenaz", "Italy", "Byzantium", "Yemen", "Does not apply"];

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
                                            <Form.Control as="select" onChange={handleOption} name="century" required>
                                                <option value="" disabled>Select</option>
                                                {centurySelect.map((option, index) => (
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
                                            <Form.Control as="select" onChange={handleOption} placeholder='Select' name="format" required>
                                                <option value="" disabled>Select</option>
                                                {formatSelect.map((option, index) => (
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
                                            <Form.Control as="select" onChange={handleOption} placeholder='Select' name="language" required>
                                                <option value="" disabled>Select</option>
                                                {languagesSelect.map((option, index) => (
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
                                            <Form.Control as="select" onChange={handleOption} name="scriptGeoculturalArea" required>
                                                <option value="" disabled>Select</option>
                                                {scriptGeoculturalAreaSelect.map((option, index) => (
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
                                                value={selectedCountry}>
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
