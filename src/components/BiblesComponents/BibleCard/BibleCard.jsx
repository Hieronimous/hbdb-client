import { Link } from "react-router-dom";
import { Card, ListGroup, Button } from "react-bootstrap";
import FavBible from "../FavBible/FavBible";
import biblesService from '../../../services/bibles.services';
import { useNavigate, } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../../contexts/auth.context";


import './BibleCard.css'

const BibleCard = ({ image, title, bibliotheca, date, shelfmark, scriptGeoculturalArea, _id, owner, }) => {
    const navigate = useNavigate();

    const { user } = useContext(AuthContext)

    const handledelete = event => {

        const isConfirmed = window.confirm('Are you sure you want to delete this Bible?');

        if (isConfirmed) {

            biblesService
                .deleteBible(_id)
                .then(() => {
                    navigate(`/bibles`);
                    // TODO: ACTUALIZAR LA LISTA DE BIBLIAS MEDIANTE EL loadBibles() DEL PADRE
                })
                .catch(err => console.log(err));
        }
    }

    return (

        <Card className="BibleCard">
            <Card.Img className="image" variant="top" src={image} />
            <Card.Body>
                <Card.Title><b>{title}</b></Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <p><strong>Library: </strong> {bibliotheca}</p>
                <p><strong>Shelfmark: </strong> {shelfmark} </p>
                <p><strong>Date: </strong> {date} </p>
                <p><strong>Geocultural Area: </strong> {scriptGeoculturalArea}</p>
            </ListGroup>

            <Card.Body>

                <div >
                    <div>
                        {user &&
                            <>
                                <Button className="Buttons" as={Link} to={`/details/${_id}`} variant="outline-secondary" size="sm" >Details</Button>

                                {user._id === owner && <>
                                    <Button className="Buttons" as={Link} to={`/edit/${_id}`} variant="outline-secondary" size="sm" >Update info</Button>
                                    <Button className="Buttons" variant="outline-secondary" as={Link} onClick={handledelete} size="sm" >Delete</Button>
                                </>}

                                <FavBible />
                            </>
                        }
                    </div>
                </div>
            </Card.Body>
        </Card>
    )

}

export default BibleCard