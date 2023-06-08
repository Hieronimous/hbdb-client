import { Button, Form, Container, Col, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import './EditBibleForm.css';
import biblesService from '../../../services/bibles.services';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../../contexts/auth.context";
import uploadServices from '../../../services/upload.services'
import data from './../../../assets/CountriesandCities.json'
import * as BIBLES_CONSTS from './../../../consts/bibles-consts'

const EditBibleForm = ({ }) => {
    const { bible_id } = useParams();
    const { user } = useContext(AuthContext)

    const [bibleData, setBibleData] = useState({
        bibliotheca: '', shelfmark: '', image: '', digitLink: '', title: '', noteToTitle: '', language: '', format: '',
        responsiblePerson: '', date: '', century: '', numberOfFolios: '', textDistribution: '', material: '', specialWritingFeatures: '',
        decoration: '', decorationDetails: '', measurements: '', topic: '', script: '', scriptGeoculturalArea: '', incipit: '',
        explicit: '', writingPlace: '', scribe: '', colophon: '', textSpecialFeatures: '', quireType: '', conservation: '',
        blankFolios: '', damageFolios: '', mutilatedFolios: '', foliation: '', catchwords: '', quireSignatures: '',
        ruling: '', watermarks: '', binding: '', provenance: '', arrivalToLibrary: '', ancientShelfmark: '',
        laterAnnotations: '', references: '', nliFilmNumber: '', publishedEdition: '', bibliography: '', contents: '',
        locationCountry: '', locationCity: ''
    })

    useEffect(() => {
        loadBible()
    }, [bible_id])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const loadBible = () => {
        biblesService
            .getOneBible(bible_id)
            .then(response => {
                setBibleData(response.data);
            })
            .catch(err => console.log(err));
    }
    const [loadingImage, setLoadingImage] = useState()

    const countries = [...new Set(data.map((item) => item.locationCountry))];
    const filteredCities = data.filter(
        (item) => item.locationCountry === bibleData.locationCountry
    );

    const [step, setStep] = useState(1);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setBibleData({ ...bibleData, [name]: value });
    };

    const navigate = useNavigate()

    const handleSubmit = event => {
        event.preventDefault();
        biblesService
            .editBible(bible_id, bibleData)
            .then(() => {
                navigate(`/details/${bible_id}`);
            })
            .catch(err => console.log(err));
    }

    const handleFileUpload = event => {

        const formData = new FormData()
        formData.append('image', event.target.files[0])

        uploadServices
            .uploadImage(formData)
            .then(res => {
                setBibleData({ ...bibleData, image: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingImage(false)
            })
    }

    const validateFields = () => {
        let requiredFields = [];
        let isValid = true;

        if (step === 1) {
            requiredFields = ['title', 'bibliotheca', 'format', 'scriptGeoculturalArea', 'century', 'shelfmark', 'language'];
        }

        if (step === 3) {
            requiredFields = ['locationCountry', 'locationCity'];
        }

        requiredFields.forEach(field => {
            if (!bibleData[field]) {
                isValid = false;
            }
        });

        if (!isValid) {
            alert('Please complete all the required fields');
        } else {
            handleNext();
        }
    };

    const handleNext = () => {
        setStep(step + 1);
    };

    const handlePrev = () => {
        setStep(step - 1);
    };

    return (
        <div className="form">
            <Form onSubmit={handleSubmit}>
                {step === 1 && (
                    <Container>
                        <Row>
                            <Col><h2>Identification</h2></Col>
                            <Col className="d-flex justify-content-end"><h5><p className='dot'>*</p> required fields</h5></Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="title">
                                    <Form.Label>Bible Title<p className='dot'>*</p></Form.Label>
                                    <Form.Control type="text" value={bibleData.title} onChange={handleInputChange} name="title" required />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="bibliotheca">
                                    <Form.Label>Library<p className='dot'>*</p></Form.Label>
                                    <Form.Control type="text" value={bibleData.bibliotheca} onChange={handleInputChange} name="bibliotheca" required />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="format">
                                    <Form.Label>Format<p className='dot'>*</p></Form.Label>
                                    <Form.Control as="select" value={bibleData.format} onChange={handleInputChange} name="format" defaultValue='Codex' required>
                                        <option value="" disabled>Select</option>
                                        {BIBLES_CONSTS.FORMAT_SELECT.map((option, index) => (
                                            <option key={index} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="scriptGeoculturalArea">
                                    <Form.Label>Script Geocultural Area<p className='dot'>*</p></Form.Label>
                                    <Form.Control as="select" value={bibleData.scriptGeoculturalArea} onChange={handleInputChange} name="scriptGeoculturalArea" defaultValue="" required>
                                        <option value="" disabled>Select</option>
                                        {BIBLES_CONSTS.GEOCULTURAL_SELECT.map((option, index) => (
                                            <option key={index} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="century">
                                    <Form.Label>Century<p className='dot'>*</p></Form.Label>
                                    <Form.Control as="select" value={bibleData.century} onChange={handleInputChange} name="century" defaultValue="Unknown" required>
                                        <option value="" disabled>Select</option>
                                        {BIBLES_CONSTS.CENTURY_SELECT.map((option, index) => (
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
                                <Form.Group className="mb-3" controlId="shelfmark">
                                    <Form.Label>Shelfmark<p className='dot'>*</p></Form.Label>
                                    <Form.Control type="text" value={bibleData.shelfmark} onChange={handleInputChange} name="shelfmark" required />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="image">
                                    <Form.Label>Bible Image</Form.Label>
                                    <Form.Control type="file" onChange={handleFileUpload} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <br />
                        <h2>Production</h2>
                        <hr />
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="language">
                                    <Form.Label>Language<p className='dot'>*</p></Form.Label>
                                    <Form.Control as="select" value={bibleData.language} placeholder='Select' onChange={handleInputChange} name="language" defaultValue='Hebrew' required>
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
                                <Form.Group className="mb-3" controlId="topic">
                                    <Form.Label>Topic</Form.Label>
                                    <Form.Control type="text" value={bibleData.topic} onChange={handleInputChange} name="topic" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Form.Group className="mb-3" controlId="noteToTitle">
                                <Form.Label>Note to title</Form.Label>
                                <Form.Control type="text" value={bibleData.noteToTitle} onChange={handleInputChange} name="noteToTitle" />
                                <Form.Text className="text-muted description">
                                    Reference to the title as found in the manuscript, if any
                                </Form.Text>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="date">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control type="text" value={bibleData.date} onChange={handleInputChange} name="date" />
                                    <Form.Text className="text-muted description">
                                        Exact or estimated
                                    </Form.Text>
                                </Form.Group>

                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="writingPlace">
                                    <Form.Label>Writing place</Form.Label>
                                    <Form.Control type="text" value={bibleData.writingPlace} onChange={handleInputChange} name="writingPlace" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="responsiblePerson">
                                    <Form.Label>Responsible Person</Form.Label>
                                    <Form.Control type="text" value={bibleData.responsiblePerson} onChange={handleInputChange} name="responsiblePerson" />
                                    <Form.Text className="text-muted description">
                                        Author of any other text acompanying the bible
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="scribe">
                                    <Form.Label>Scribe</Form.Label>
                                    <Form.Control type="text" value={bibleData.scribe} onChange={handleInputChange} name="scribe" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Form.Group className="mb-3" controlId="colophon">
                                <Form.Label>Colophon</Form.Label>
                                <Form.Control type="text" as="textarea"
                                    rows={4} value={bibleData.colophon} onChange={handleInputChange} name="colophon" />
                            </Form.Group>
                        </Row>
                        <hr />
                        <Row>
                            <Col>
                                <div>
                                    <Button variant="outline-secondary" as={Link} to={`/bibles`}> Cancel</Button>
                                </div>
                            </Col>
                            <Col className="d-flex justify-content-end">
                                <Button variant="warning" onClick={validateFields}>
                                    Next
                                </Button>
                            </Col>
                        </Row>
                        <br />
                        <Row >
                            <Col className="d-flex justify-content-center">
                                <h4>1/4</h4>
                            </Col>
                        </Row>
                    </Container >
                )}
                {step === 2 && (
                    <Container >
                        <h2>Codicology</h2>
                        <hr />
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="measurements">
                                    <Form.Label>Measurements</Form.Label>
                                    <Form.Control type="text" value={bibleData.measurements} onChange={handleInputChange} name="measurements" />
                                    <Form.Text className="text-muted description">
                                        E.g. 27,6x21,5 cm
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="material">
                                    <Form.Label>Material</Form.Label>
                                    <Form.Control type="text" value={bibleData.material} onChange={handleInputChange} name="material" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="numberOfFolios">
                                    <Form.Label>Number of folios</Form.Label>
                                    <Form.Control type="text" value={bibleData.numberOfFolios} onChange={handleInputChange} name="numberOfFolios" />
                                    <Form.Text className="text-muted description">
                                        Without flyleaves
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="foliation">
                                    <Form.Label>Foliation</Form.Label>
                                    <Form.Control type="text" as="textarea"
                                        rows={4} value={bibleData.foliation} onChange={handleInputChange} name="foliation" />
                                    <Form.Text className="text-muted description">
                                        Ancient or modern with description
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="script">
                                    <Form.Label>Script</Form.Label>
                                    <Form.Control type="text" value={bibleData.script} onChange={handleInputChange} name="script" />
                                    <Form.Text className="text-muted description">
                                        E.g. Sephardic square script
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="specialWritingFeatures">
                                    <Form.Label>Special writing features</Form.Label>
                                    <Form.Control type="text" value={bibleData.specialWritingFeatures} onChange={handleInputChange} name="specialWritingFeatures" />
                                    <Form.Text className="text-muted description">
                                        Presence of vowels, accents and/or masora
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="textDistribution">
                                    <Form.Label>Text distribution</Form.Label>
                                    <Form.Control type="text" value={bibleData.textDistribution} onChange={handleInputChange} name="textDistribution" />
                                    <Form.Text className="text-muted description">
                                        Number of columns and lines per column
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="quireType">
                                    <Form.Label>Quire type</Form.Label>
                                    <Form.Control type="text" value={bibleData.quireType} onChange={handleInputChange} name="quireType" />
                                    <Form.Text className="text-muted description">
                                        E.g. 8 fol.
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="catchwords">
                                    <Form.Label>Catchwords</Form.Label>
                                    <Form.Control type="text" value={bibleData.catchwords} onChange={handleInputChange} name="catchwords" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="textSpecialFeatures">
                                    <Form.Label>Text special features</Form.Label>
                                    <Form.Control type="text" as="textarea"
                                        rows={4} value={bibleData.textSpecialFeatures} onChange={handleInputChange} name="textSpecialFeatures" />
                                    <Form.Text className="text-muted description">
                                        Arrangement of poetic sections and Masora, and presence of paratextual signs, such as parasha or haftara marks.
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="quireSignatures">
                                    <Form.Label>Quire signatures</Form.Label>
                                    <Form.Control type="text" value={bibleData.quireSignatures} onChange={handleInputChange} name="quireSignatures" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="ruling">
                                    <Form.Label>Ruling</Form.Label>
                                    <Form.Control type="text" value={bibleData.ruling} onChange={handleInputChange} name="ruling" />
                                    <Form.Text className="text-muted description">
                                        Hard point, plummet/graphite, ink
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>  <Form.Group className="mb-3" controlId="watermarks">
                                <Form.Label>Watermarks</Form.Label>
                                <Form.Control type="text" value={bibleData.watermarks} onChange={handleInputChange} name="watermarks" />
                                <Form.Text className="text-muted description">
                                    With reference to Briquet
                                </Form.Text>
                            </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="blankFolios">
                                    <Form.Label>Blank folios</Form.Label>
                                    <Form.Control type="text" value={bibleData.blankFolios} onChange={handleInputChange} name="blankFolios" />
                                </Form.Group></Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col>
                                <div>
                                    <Button variant="outline-secondary" as={Link} to={`/bibles`}> Cancel</Button>
                                </div>
                            </Col>
                            <Col className="d-flex justify-content-center">
                                <Button variant="secondary" onClick={handlePrev}>
                                    Previous
                                </Button>
                            </Col>
                            <Col className="d-flex justify-content-end">
                                <Button variant="warning" onClick={handleNext}>
                                    Next
                                </Button>
                            </Col>
                        </Row>
                        <br />
                        <Row >
                            <Col className="d-flex justify-content-center">
                                <h4>2/4</h4>
                            </Col>
                        </Row>
                    </Container>
                )}
                {step === 3 && (
                    <Container>
                        <h2>Text</h2>
                        <hr />
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="incipit">
                                    <Form.Label>Incipit</Form.Label>
                                    <Form.Control type="text" as="textarea"
                                        rows={3} value={bibleData.incipit} onChange={handleInputChange} name="incipit" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="explicit">
                                    <Form.Label>Explicit</Form.Label>
                                    <Form.Control type="text" as="textarea"
                                        rows={3} value={bibleData.explicit} onChange={handleInputChange} name="explicit" />
                                </Form.Group></Col>
                        </Row>

                        <br />
                        <h2>Location</h2>
                        <hr />
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="locationCountry" require>
                                    <Form.Label>Country<p className='dot'>*</p></Form.Label>
                                    <Form.Select
                                        value={bibleData.locationCountry}
                                        onChange={handleInputChange}
                                        name="locationCountry"
                                    >
                                        <option value="">Select Country</option>
                                        {countries.map((country) => (
                                            <option key={country} value={country}>
                                                {country}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="locationCity" require>
                                    <Form.Label>City<p className='dot'>*</p></Form.Label>
                                    <Form.Select
                                        value={bibleData.locationCity}
                                        onChange={handleInputChange}
                                        name="locationCity"
                                    >
                                        <option value="">Select City</option>
                                        {filteredCities.map((item) => (
                                            <option key={item.locationCity} value={item.locationCity}>
                                                {item.locationCity}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                        <h2>History</h2>
                        <hr />
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="binding">
                                    <Form.Label>Binding</Form.Label>
                                    <Form.Control type="text" as="textarea"
                                        rows={4} value={bibleData.binding} onChange={handleInputChange} name="binding" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="conservation">
                                    <Form.Label>Conservation</Form.Label>
                                    <Form.Control type="text" as="textarea"
                                        rows={4} value={bibleData.conservation} onChange={handleInputChange} name="conservation" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="damageFolios">
                                    <Form.Label>Damage folios</Form.Label>
                                    <Form.Control type="text" value={bibleData.damageFolios} onChange={handleInputChange} name="damageFolios" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="mutilatedFolios">
                                    <Form.Label>Mutilated folios</Form.Label>
                                    <Form.Control type="text" value={bibleData.mutilatedFolios} onChange={handleInputChange} name="mutilatedFolios" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="provenance">
                                    <Form.Label>Provenance</Form.Label>
                                    <Form.Control type="text" as="textarea"
                                        rows={4} value={bibleData.provenance} onChange={handleInputChange} name="provenance" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="arrivalToLibrary">
                                    <Form.Label>Arrival to library</Form.Label>
                                    <Form.Control type="text" as="textarea"
                                        rows={4} value={bibleData.arrivalToLibrary} onChange={handleInputChange} name="arrivalToLibrary" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="ancientShelfmark">
                                    <Form.Label>Ancient shelfmark</Form.Label>
                                    <Form.Control type="text" value={bibleData.ancientShelfmark} onChange={handleInputChange} name="ancientShelfmark" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="laterAnnotations">
                                    <Form.Label>Later annotations</Form.Label>
                                    <Form.Control type="text" as="textarea"
                                        rows={4} value={bibleData.laterAnnotations} onChange={handleInputChange} name="laterAnnotations" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col>
                                <div>
                                    <Button variant="outline-secondary" as={Link} to={`/bibles`}> Cancel</Button>
                                </div>
                            </Col>
                            <Col className="d-flex justify-content-center">
                                <Button variant="secondary" onClick={handlePrev}>
                                    Previous
                                </Button>
                            </Col>
                            <Col className="d-flex justify-content-end">
                                <Button variant="warning" onClick={validateFields}>
                                    Next
                                </Button>
                            </Col>
                        </Row>
                        <br />
                        <Row >
                            <Col className="d-flex justify-content-center">
                                <h4>3/4</h4>
                            </Col>
                        </Row>
                    </Container>
                )}
                {step === 4 && (
                    <Container>
                        <br />
                        <h2>Decoration</h2>
                        <hr />
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="decoration">
                                    <Form.Label>Decoration</Form.Label>
                                    <Form.Control type="text" value={bibleData.decoration} onChange={handleInputChange} name="decoration" />
                                    <Form.Text className="text-muted description">
                                        Type of decoration
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="decorationDetails">
                                    <Form.Label>Decoration details</Form.Label>
                                    <Form.Control type="text" as="textarea"
                                        rows={3} value={bibleData.decorationDetails} onChange={handleInputChange} name="decorationDetails" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <h2>References</h2>
                        <hr />
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="references">
                                    <Form.Label>References</Form.Label>
                                    <Form.Control type="text" as="textarea"
                                        rows={4} value={bibleData.references} onChange={handleInputChange} name="references" />
                                    <Form.Text className="text-muted description">
                                        Previous manuscript descriptions
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="publishedEdition">
                                    <Form.Label>Published edition</Form.Label>
                                    <Form.Control type="text" as="textarea"
                                        rows={4} value={bibleData.publishedEdition} onChange={handleInputChange} name="publishedEdition" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>

                            <Col>
                                <Form.Group className="mb-3" controlId="nliFilmNumber">
                                    <Form.Label>NLI Film number</Form.Label>
                                    <Form.Control type="text" value={bibleData.nliFilmNumber} onChange={handleInputChange} name="nliFilmNumber" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="digitLink">
                                    <Form.Label>Link to Digitization</Form.Label>
                                    <Form.Control type="text" value={bibleData.digitLink} onChange={handleInputChange} name="digitLink" />
                                    <Form.Text className="text-muted description">
                                        Complete URL to digitization
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group className="mb-3" controlId="bibliography">
                                    <Form.Label>Bibliography</Form.Label>
                                    <Form.Control type="text" as="textarea"
                                        rows={5} value={bibleData.bibliography} onChange={handleInputChange} name="bibliography" />
                                    <Form.Text className="text-muted description">
                                        Related to the manuscript in particular
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                        </Row>
                        <h2>Contents</h2>
                        <hr />
                        <Row>
                            <Col>
                                <Form.Group className="mb-3" controlId="contents">
                                    <Form.Label>Contents</Form.Label>
                                    <Form.Control type="text" as="textarea"
                                        rows={2} value={bibleData.contents} onChange={handleInputChange} name="contents" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <hr />
                        <Row>
                            <Col>
                                <div>
                                    <Button variant="outline-secondary" as={Link} to={`/bibles`}> Cancel</Button>
                                </div>
                            </Col>
                            <Col className="d-flex justify-content-center">
                                <Button variant="secondary" onClick={handlePrev}>
                                    Previous
                                </Button>
                            </Col>
                            <Col>
                                <div className='d-grid'>
                                    <Button variant="warning" type="submit" disable={loadingImage}> {loadingImage ? 'Loading...' : 'Edit'}</Button>
                                </div>
                            </Col>
                        </Row>
                        <br />
                        <Row >
                            <Col className="d-flex justify-content-center">
                                <h4>4/4</h4>
                            </Col>
                        </Row>
                    </Container>
                )}
            </Form>
        </div>

    )
}

export default EditBibleForm