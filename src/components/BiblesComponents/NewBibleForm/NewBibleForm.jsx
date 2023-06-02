import { Button, Form, Container, Col, Row } from 'react-bootstrap'
import { useState } from 'react'
import './NewBibleForm.css'
import biblesService from '../../../services/bibles.services'
import { useNavigate, Link } from 'react-router-dom'
import uploadServices from '../../../services/upload.services'


const NewBibleForm = () => {

    const [bibleData, setBibleData] = useState({
        bibliotheca: '',
        shelfmark: '',
        image: '',
        digitLink: '',
        title: '',
        noteToTitle: '',
        language: '',
        format: '',
        responsiblePerson: '',
        date: '',
        century: '',
        numberOfFolios: '',
        textDistribution: '',
        material: '',
        specialWritingFeatures: '',
        decoration: '',
        decorationDetails: '',
        measurements: '',
        topic: '',
        script: '',
        scriptGeoculturalArea: '',
        incipit: '',
        explicit: '',
        writingPlace: '',
        scribe: '',
        colophon: '',
        textSpecialFeatures: '',
        quireType: '',
        conservation: '',
        blankFolios: '',
        damageFolios: '',
        mutilatedFolios: '',
        foliation: '',
        catchwords: '',
        quireSignatures: '',
        ruling: '',
        watermarks: '',
        binding: '',
        provenance: '',
        arrivalToLibrary: '',
        ancientShelfmark: '',
        laterAnnotations: '',
        references: '',
        microfilmDigitalCopy: '',
        publishedEdition: '',
        bibliography: '',
        contents: '',
        locationCountry: '',
        locationCity: '',
        locationDetails: '',

    })

    const languagesSelect = ["", "Hebrew", "Aramaic", "Hebrew & Aramaic", "Aramaic & Latin", "Hebrew & Latin", "Hebrew & vernacular", "Aramaic & vernacular"]
    const formatSelect = ["", "Codex", "Scroll", "Fragment"]
    const centurySelect = ["", "Unknown", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"]
    const scriptGeoculturalAreaSelect = ["", "Unknown", "Sefarad", "Orient", "Ashkenaz", "Italy", "Byzantium", "Yemen", "Does not apply"]

    const [loadingImage, setLoadingImage] = useState(false)

    const handleInputChange = event => {
        const { name, value } = event.target
        setBibleData({ ...bibleData, [name]: value })
    }
    const navigate = useNavigate();

    const handleSubmit = event => {

        event.preventDefault()
        setLoadingImage(true)
        navigate('/bibles')

        biblesService
            .saveBible(bibleData)
            .then(() => { })
            .catch(err => console.log(err))
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
    return (
        <div className='form'>
            <Form onSubmit={handleSubmit}>
                <Container>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label>Bible Title</Form.Label>
                                <Form.Control type="text" value={bibleData.title} onChange={handleInputChange} name="title" />
                                {/* <Form.Text className="text-muted">
                                    fields is required.
                                </Form.Text> */}
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="noteToTitle">
                                <Form.Label>Note to title</Form.Label>
                                <Form.Control type="text" value={bibleData.noteToTitle} onChange={handleInputChange} name="noteToTitle" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="bibliotheca">
                                <Form.Label>Library</Form.Label>
                                <Form.Control type="text" value={bibleData.bibliotheca} onChange={handleInputChange} name="bibliotheca" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="shelfmark">
                                <Form.Label>Shelfmark</Form.Label>
                                <Form.Control type="text" value={bibleData.shelfmark} onChange={handleInputChange} name="shelfmark" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="image">
                                <Form.Label>Bible Image</Form.Label>
                                <Form.Control type="file" onChange={handleFileUpload} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="digitLink">
                                <Form.Label>Link to Digitization</Form.Label>
                                <Form.Control type="text" value={bibleData.digitLink} onChange={handleInputChange} name="digitLink" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="language">
                                <Form.Label>Language</Form.Label>
                                <Form.Control as="select" value={bibleData.language} onChange={handleInputChange} name="language" defaultValue='Hebrew' required>
                                    {languagesSelect.map((option, index) => (
                                        <option key={index} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="format">
                                <Form.Label>Format</Form.Label>
                                <Form.Control as="select" value={bibleData.format} onChange={handleInputChange} name="format" defaultValue='Codex' required>
                                    {formatSelect.map((option, index) => (
                                        <option key={index} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="responsiblePerson">
                                <Form.Label>Responsible Person</Form.Label>
                                <Form.Control type="text" value={bibleData.responsiblePerson} onChange={handleInputChange} name="responsiblePerson" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="date">
                                <Form.Label>Date</Form.Label>
                                <Form.Control type="text" value={bibleData.date} onChange={handleInputChange} name="date" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="century">
                                <Form.Label>Century</Form.Label>
                                <Form.Control as="select" value={bibleData.century} onChange={handleInputChange} name="century" defaultValue="Unknown" required>
                                    {centurySelect.map((option, index) => (
                                        <option key={index} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="numberOfFolios">
                                <Form.Label>Number of folios</Form.Label>
                                <Form.Control type="text" value={bibleData.numberOfFolios} onChange={handleInputChange} name="numberOfFolios" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="textDistribution">
                                <Form.Label>Text distribution</Form.Label>
                                <Form.Control type="text" value={bibleData.textDistribution} onChange={handleInputChange} name="textDistribution" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="material">
                                <Form.Label>Material</Form.Label>
                                <Form.Control type="text" value={bibleData.material} onChange={handleInputChange} name="material" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="specialWritingFeatures">
                                <Form.Label>Special writing features</Form.Label>
                                <Form.Control type="text" value={bibleData.specialWritingFeatures} onChange={handleInputChange} name="specialWritingFeatures" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="decoration">
                                <Form.Label>Decoration</Form.Label>
                                <Form.Control type="text" value={bibleData.decoration} onChange={handleInputChange} name="decoration" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="decorationDetails">
                                <Form.Label>Decoration details</Form.Label>
                                <Form.Control type="text" value={bibleData.decorationDetails} onChange={handleInputChange} name="decorationDetails" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="measurements">
                                <Form.Label>Measurements</Form.Label>
                                <Form.Control type="text" value={bibleData.measurements} onChange={handleInputChange} name="measurements" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="topic">
                                <Form.Label>Topic</Form.Label>
                                <Form.Control type="text" value={bibleData.topic} onChange={handleInputChange} name="topic" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="script">
                                <Form.Label>Script</Form.Label>
                                <Form.Control type="text" value={bibleData.script} onChange={handleInputChange} name="script" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="scriptGeoculturalArea">
                                <Form.Label>Script Geocultural Area</Form.Label>
                                <Form.Control as="select" value={bibleData.scriptGeoculturalArea} onChange={handleInputChange} name="scriptGeoculturalArea" defaultValue={"Unknown"} required>
                                    {scriptGeoculturalAreaSelect.map((option, index) => (
                                        <option key={index} value={option}>
                                            {option}
                                        </option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="incipit">
                                <Form.Label>Incipit</Form.Label>
                                <Form.Control type="text" value={bibleData.incipit} onChange={handleInputChange} name="incipit" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="explicit">
                                <Form.Label>Explicit</Form.Label>
                                <Form.Control type="text" value={bibleData.explicit} onChange={handleInputChange} name="explicit" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="writingPlace">
                                <Form.Label>Writing place</Form.Label>
                                <Form.Control type="text" value={bibleData.writingPlace} onChange={handleInputChange} name="writingPlace" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="scribe">
                                <Form.Label>Scribe</Form.Label>
                                <Form.Control type="text" value={bibleData.scribe} onChange={handleInputChange} name="scribe" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="colophon">
                                <Form.Label>Colophon</Form.Label>
                                <Form.Control type="text" value={bibleData.colophon} onChange={handleInputChange} name="colophon" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="textSpecialFeatures">
                                <Form.Label>Text special features</Form.Label>
                                <Form.Control type="text" value={bibleData.textSpecialFeatures} onChange={handleInputChange} name="textSpecialFeatures" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="quireType">
                                <Form.Label>Quire type</Form.Label>
                                <Form.Control type="text" value={bibleData.quireType} onChange={handleInputChange} name="quireType" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="conservation">
                                <Form.Label>Conservation</Form.Label>
                                <Form.Control type="text" value={bibleData.conservation} onChange={handleInputChange} name="conservation" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="blankFolios">
                                <Form.Label>Blank folios</Form.Label>
                                <Form.Control type="text" value={bibleData.blankFolios} onChange={handleInputChange} name="blankFolios" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="damageFolios">
                                <Form.Label>Damage folios</Form.Label>
                                <Form.Control type="text" value={bibleData.damageFolios} onChange={handleInputChange} name="damageFolios" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="mutilatedFolios">
                                <Form.Label>Mutilated folios</Form.Label>
                                <Form.Control type="text" value={bibleData.mutilatedFolios} onChange={handleInputChange} name="mutilatedFolios" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="foliation">
                                <Form.Label>Foliation</Form.Label>
                                <Form.Control type="text" value={bibleData.foliation} onChange={handleInputChange} name="foliation" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="catchwords">
                                <Form.Label>Catchwords</Form.Label>
                                <Form.Control type="text" value={bibleData.catchwords} onChange={handleInputChange} name="catchwords" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="quireSignatures">
                                <Form.Label>Quire signatures</Form.Label>
                                <Form.Control type="text" value={bibleData.quireSignatures} onChange={handleInputChange} name="quireSignatures" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="ruling">
                                <Form.Label>Ruling</Form.Label>
                                <Form.Control type="text" value={bibleData.ruling} onChange={handleInputChange} name="ruling" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="watermarks">
                                <Form.Label>Watermarks</Form.Label>
                                <Form.Control type="text" value={bibleData.watermarks} onChange={handleInputChange} name="watermarks" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="binding">
                                <Form.Label>Binding</Form.Label>
                                <Form.Control type="text" value={bibleData.binding} onChange={handleInputChange} name="binding" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="provenance">
                                <Form.Label>Provenance</Form.Label>
                                <Form.Control type="text" value={bibleData.provenance} onChange={handleInputChange} name="provenance" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="arrivalToLibrary">
                                <Form.Label>Arrival to library</Form.Label>
                                <Form.Control type="text" value={bibleData.arrivalToLibrary} onChange={handleInputChange} name="arrivalToLibrary" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="ancientShelfmark">
                                <Form.Label>Ancient shelfmark</Form.Label>
                                <Form.Control type="text" value={bibleData.ancientShelfmark} onChange={handleInputChange} name="ancientShelfmark" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="laterAnnotations">
                                <Form.Label>Later annotations</Form.Label>
                                <Form.Control type="text" value={bibleData.laterAnnotations} onChange={handleInputChange} name="laterAnnotations" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="references">
                                <Form.Label>References</Form.Label>
                                <Form.Control type="text" value={bibleData.references} onChange={handleInputChange} name="references" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="microfilmDigitalCopy">
                                <Form.Label>Microfilm digital copy</Form.Label>
                                <Form.Control type="text" value={bibleData.microfilmDigitalCopy} onChange={handleInputChange} name="microfilmDigitalCopy" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="publishedEdition">
                                <Form.Label>Published edition</Form.Label>
                                <Form.Control type="text" value={bibleData.publishedEdition} onChange={handleInputChange} name="publishedEdition" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="bibliography">
                                <Form.Label>Bibliography</Form.Label>
                                <Form.Control type="text" value={bibleData.bibliography} onChange={handleInputChange} name="bibliography" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="contents">
                                <Form.Label>Contents</Form.Label>
                                <Form.Control type="text" value={bibleData.contents} onChange={handleInputChange} name="contents" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="locationCountry">
                                <Form.Label>Location country</Form.Label>
                                <Form.Control type="text" value={bibleData.locationCountry} onChange={handleInputChange} name="locationCountry" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="locationCity">
                                <Form.Label>Location city</Form.Label>
                                <Form.Control type="text" value={bibleData.locationCity} onChange={handleInputChange} name="locationCity" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <div className='d-grid'>
                        <Button variant="warning" type="submit" disable={loadingImage}> {loadingImage ? 'Loading...' : 'Crate'}</Button>
                    </div>
                    <hr />
                    <div>
                        <Button variant="outline-secondary" as={Link} to={`/bibles`}> Cancel</Button>
                    </div>
                </Container>
            </Form>

        </div>
    )
}

export default NewBibleForm