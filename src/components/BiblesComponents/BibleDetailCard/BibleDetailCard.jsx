import { Button, Col, Row } from "react-bootstrap"
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

            <h1 className="detailTitle">{bible.title}</h1>

            {user._id === bible.owner && <>
                <Link to="/mycolaborations">
                    <Button className="Buttons" variant="outline-warning" >Return to my colaborations</Button>
                </Link>
            </>}
            <Link to="/bibles">
                <Button className="Buttons" variant="outline-warning" >Back to all Bibles</Button>
            </Link>
            <Button className="Buttons" as={Link} to={`/edit/${bible._id}`} variant="outline-warning"  >Update info</Button>{' '}
            <Button className="Buttons" variant="outline-warning" as={Link} onClick={handledelete}  >Delete</Button>{' '}

            <hr />

            <Row>
                <Col md={{ span: 5 }} >
                    <img className="detailImage" src={bible.image} style={{ width: '80%' }} alt="bibleImage" />
                </Col>

                <Col className="detailText" md={{ span: 6 }}>
                    <h1>Specifications</h1>
                    <hr />
                    {bible.title && <h2>{bible.title}</h2>}
                    {bible.format && <h5><strong>Format: </strong> {bible.format}</h5>}
                    {bible.century && <h5><strong>Century: </strong> {bible.century}</h5>}
                    {bible.scriptGeoculturalArea && <h5><strong>Script Geocultural Area: </strong> {bible.scriptGeoculturalArea}</h5>}
                    {bible.bibliotheca && <h5><strong> Library:</strong> {bible.bibliotheca}</h5>}
                    {bible.shelfmark && <h5><strong>Shelfmark: </strong> {bible.shelfmark}</h5>}
                    <hr />
                    {bible.topic && <h6><strong>Topic: </strong> {bible.topic}</h6>}
                    {bible.noteToTitle && <h6><strong>Note to title:</strong> {bible.noteToTitle}</h6>}
                    {bible.responsiblePerson && <h6><strong>Responsible Person: </strong> {bible.responsiblePerson}</h6>}
                    {bible.language && <p><strong>Language: </strong> {bible.language}</p>}
                    {bible.date && <p> <strong>Date: </strong> {bible.date} </p>}
                    {bible.scribe && <h6><strong>Scribe: </strong> {bible.scribe}</h6>}
                    {bible.writingPlace && <h6><strong>Writing Place: </strong> {bible.writingPlace}</h6>}
                    {bible.colophon && <h6><strong>Colophon: </strong> {bible.colophon}</h6>}
                    <hr />
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
                    {bible.incipit && <hr />}
                    {bible.incipit && <h6>bible. &&<strong>: </strong> {bible.incipit}</h6>}
                    {bible.explicit && <h6><strong>Explicit: </strong> {bible.explicit}</h6>}
                    <hr />
                    {bible.decoration && <h6><strong>Decoration: </strong> {bible.decoration}</h6>}
                    {bible.decorationDetails && <h6><strong>DecorationDetails: </strong> {bible.decorationDetails}</h6>}
                    <hr />
                    {bible.binding && <h6><strong>Binding: </strong> {bible.binding}</h6>}
                    {bible.conservation && <h6><strong>Conservation: </strong> {bible.conservation}</h6>}
                    {bible.damageFolios && <h6><strong>Damage folios: </strong> {bible.damageFolios}</h6>}
                    {bible.mutilatedFolios && <h6><strong>Mutilated folios: </strong> {bible.mutilatedFolios}</h6>}
                    {bible.provenance && <h6><strong>Provenance: </strong> {bible.provenance}</h6>}
                    {bible.arrivalToLibrary && <h6><strong>Arrival to library: </strong> {bible.arrivalToLibrary}</h6>}
                    {bible.ancientShelfmark && <h6><strong>Ancient shelfmark: </strong> {bible.ancientShelfmark}</h6>}
                    {bible.laterAnnotations && <h6><strong>Later annotations: </strong> {bible.laterAnnotations}</h6>}
                    <hr />
                    {bible.references && <h6><strong>References: </strong> {bible.references}</h6>}
                    {bible.microfilmDigitalCopy && <h6><strong>Microfilm digital copy: </strong> {bible.microfilmDigitalCopy}</h6>}
                    {bible.publishedEdition && <h6><strong>Published edition: </strong> {bible.publishedEdition}</h6>}
                    {bible.bibliography && <h6><strong>Bibliography: </strong> {bible.bibliography}</h6>}
                    <hr />
                    {bible.contents && <h6><strong>Contents: </strong> {bible.contents}</h6>}
                    <hr />
                    {bible.locationCountry && <h6><strong>Location Country: </strong> {bible.locationCountry}</h6>}
                    {bible.locationCity && <h6><strong>Location City: </strong> {bible.locationCity}</h6>}
                    {bible.locationDetails && <h6><strong>Location Details: </strong> {bible.locationDetails}</h6>}
                    <div>
                        {bible.digitLink && <Link to={bible.digitLink} className='nav-link' target="_blank"><Button variant="warning" >Link to Digitization</Button></Link>}
                    </div>
                </Col>
                <Link to="/bibles">
                    <Button className="finalRetunButton" variant="outline-secondary" >Back to all Bibles</Button>
                </Link>
            </Row>
        </div>
    )
}
export default BibleDetailCard


