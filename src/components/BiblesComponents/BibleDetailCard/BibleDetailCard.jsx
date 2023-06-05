import { Button, Col, Row, Container } from "react-bootstrap"
import { Link, useC } from "react-router-dom"
import './BibleDetailCard.css'
import biblesService from '../../../services/bibles.services';
import { useNavigate } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../../contexts/auth.context";


const BibleDetailCard = ({ bible }) => {

    const navigate = useNavigate();
    const { user } = useContext(AuthContext)

    const handledelete = event => {
        const isConfirmed = window.confirm('Are you sure you want to delete this Bible?');

        if (isConfirmed) {
            biblesService
                .deleteBible(bible._id)
                .then(() => {
                    navigate(`/bibles`);
                })
                .catch(err => console.log(err));
        }
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col className="d-flex justify-content-start col-9">
                        <h1 className="detailTitle">{bible.title}</h1>
                    </Col>

                    <Col className="d-flex justify-content-end align-items-center col-3">

                        <Link to="/bibles">
                            <Button className="Buttons" variant="outline-warning">Back to all Bibles</Button>
                        </Link>

                        {user._id === bible.owner && (
                            <Link to="/mycolaborations">
                                <Button className="Buttons" variant="outline-warning">Return to my collaborations</Button>
                            </Link>
                        )}


                    </Col>
                </Row>
            </Container>
            <hr />
            <Container>
                <Row>

                    {user._id === bible.owner && <>
                        <Col className="d-flex justify-content-end">
                            <Button className="Buttons" as={Link} to={`/edit/${bible._id}`} variant="outline-warning"  >Update info</Button>{' '}
                            <Button className="Buttons" variant="outline-warning" as={Link} onClick={handledelete}  >Delete</Button>{' '}
                        </Col>
                    </>}
                </Row>

            </Container>

            <Row>
                <Col md={{ span: 5 }} >
                    <img className="detailImage" src={bible.image} style={{ width: '80%' }} alt="bibleImage" />
                </Col>

                <Col className="detailText" md={{ span: 6 }}>
                    <h1 className="specsTitle">Specifications</h1>
                    <hr />
                    {bible.title && <h2>{bible.title}</h2>}
                    {bible.format && <h5><strong>Format: </strong> {bible.format}</h5>}
                    {bible.century && <h5><strong>Century: </strong> {bible.century}</h5>}
                    {bible.scriptGeoculturalArea && <h5><strong>Script Geocultural Area: </strong> {bible.scriptGeoculturalArea}</h5>}
                    {bible.bibliotheca && <h5><strong> Library:</strong> {bible.bibliotheca}</h5>}
                    {bible.shelfmark && <h5><strong>Shelfmark: </strong> {bible.shelfmark}</h5>}
                    {(bible.topic || bible.noteToTitle || bible.responsiblePerson || bible.language || bible.date || bible.scribe || bible.writingPlace || bible.colophon) && <hr />}
                    {bible.topic && <h6><strong>Topic: </strong> {bible.topic}</h6>}
                    {bible.noteToTitle && <h6><strong>Note to title:</strong> {bible.noteToTitle}</h6>}
                    {bible.responsiblePerson && <h6><strong>Responsible Person: </strong> {bible.responsiblePerson}</h6>}
                    {bible.language && <p><strong>Language: </strong> {bible.language}</p>}
                    {bible.date && <p> <strong>Date: </strong> {bible.date} </p>}
                    {bible.scribe && <h6><strong>Scribe: </strong> {bible.scribe}</h6>}
                    {bible.writingPlace && <h6><strong>Writing Place: </strong> {bible.writingPlace}</h6>}
                    {bible.colophon && <h6><strong>Colophon: </strong> {bible.colophon}</h6>}
                    {(bible.measurements || bible.material || bible.numberOfFolios || bible.foliation || bible.foliation || bible.script
                        || bible.textDistribution || bible.specialWritingFeatures || bible.textSpecialFeatures || bible.quireType || bible.catchwords
                        || bible.quireSignatures || bible.ruling || bible.watermarks || bible.blankFolios) && <hr />}
                    {bible.measurements && <h6><strong>Measurements: </strong> {bible.measurements}</h6>}
                    {bible.material && <h6><strong>Material: </strong> {bible.material}</h6>}
                    {bible.numberOfFolios && <h6><strong>Number of folios: </strong> {bible.numberOfFolios}</h6>}
                    {bible.foliation && <h6><strong>Foliation: </strong> {bible.foliation}</h6>}
                    {bible.script && <h6><strong>Script: </strong> {bible.script}</h6>}
                    {bible.textDistribution && <h6><strong>Text Distribution: </strong> {bible.textDistribution}</h6>}
                    {bible.specialWritingFeatures && <h6><strong>Special Writing Features: </strong> {bible.specialWritingFeatures}</h6>}
                    {bible.textSpecialFeatures && <h6><strong>Text special features: </strong> {bible.textSpecialFeatures}</h6>}
                    {bible.quireType && <h6><strong>Quire type: </strong> {bible.quireType}</h6>}
                    {bible.catchwords && <h6><strong>Catchwords: </strong> {bible.catchwords}</h6>}
                    {bible.quireSignatures && <h6><strong>Quire signatures: </strong> {bible.quireSignatures}</h6>}
                    {bible.ruling && <h6><strong>Ruling: </strong> {bible.ruling}</h6>}
                    {bible.watermarks && <h6><strong>Watermarks: </strong> {bible.watermarks}</h6>}
                    {bible.blankFolios && <h6><strong>Blank folios: </strong> {bible.blankFolios}</h6>}
                    {(bible.incipit || bible.explicit) && <hr />}
                    {bible.incipit && <h6>bible. &&<strong>: </strong> {bible.incipit}</h6>}
                    {bible.explicit && <h6><strong>Explicit: </strong> {bible.explicit}</h6>}
                    {bible.decoration && <hr />}
                    {bible.decoration && <h6><strong>Decoration: </strong> {bible.decoration}</h6>}
                    {bible.decorationDetails && <h6><strong>Decoration details: </strong> {bible.decorationDetails}</h6>}
                    {(bible.binding || bible.conservation) && <hr />}
                    {bible.binding && <h6><strong>Binding: </strong> {bible.binding}</h6>}
                    {bible.conservation && <h6><strong>Conservation: </strong> {bible.conservation}</h6>}
                    {bible.damageFolios && <h6><strong>Damage folios: </strong> {bible.damageFolios}</h6>}
                    {bible.mutilatedFolios && <h6><strong>Mutilated folios: </strong> {bible.mutilatedFolios}</h6>}
                    {bible.provenance && <h6><strong>Provenance: </strong> {bible.provenance}</h6>}
                    {bible.arrivalToLibrary && <h6><strong>Arrival to library: </strong> {bible.arrivalToLibrary}</h6>}
                    {bible.ancientShelfmark && <h6><strong>Ancient shelfmark: </strong> {bible.ancientShelfmark}</h6>}
                    {bible.laterAnnotations && <h6><strong>Later annotations: </strong> {bible.laterAnnotations}</h6>}
                    {(bible.references || bible.nliFilmNumber || bible.publishedEdition || bible.bibliography) && <hr />}
                    {bible.references && <h6><strong>References: </strong> {bible.references}</h6>}
                    {bible.nliFilmNumber && <h6><strong>NLI Film number: </strong> {bible.nliFilmNumber}</h6>}
                    {bible.publishedEdition && <h6><strong>Published edition: </strong> {bible.publishedEdition}</h6>}
                    {bible.bibliography && <h6><strong>Bibliography: </strong> {bible.bibliography}</h6>}
                    {bible.contents && <hr />}
                    {bible.contents && <h6><strong>Contents: </strong> {bible.contents}</h6>}
                    {(bible.locationCountry || bible.locationCity) && <hr />}
                    {bible.locationCountry && <h6><strong>Location Country: </strong> {bible.locationCountry}</h6>}
                    {bible.locationCity && <h6><strong>Location City: </strong> {bible.locationCity}</h6>}
                    {bible.digitLink && <hr />}
                    <div>
                        {bible.digitLink && <Link to={bible.digitLink} className='nav-link' target="_blank"><Button variant="warning" >Link to Digitization</Button></Link>}
                    </div>
                </Col>
                <Link to="/bibles">
                    <Button className="finalRetunButton" variant="outline-secondary" >Back to all Bibles</Button>
                </Link>
            </Row>
        </div >
    )
}
export default BibleDetailCard


