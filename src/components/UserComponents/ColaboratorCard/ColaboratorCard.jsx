import { Link } from "react-router-dom";
import { Card, ListGroup, Button } from "react-bootstrap";
import FavBible from "../../BiblesComponents/FavBible/FavBible";
import { useNavigate, } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../../contexts/auth.context";


const ColaboratorCard = ({ avatar, firstName, lastName, _id }) => {
    const navigate = useNavigate();

    const { user } = useContext(AuthContext)

    return (
        <Card className="ColaboratorCard">
            <Card.Img className="image" variant="top" src={avatar} />
            <Card.Body>
                <Card.Title><b>{firstName} {lastName}</b></Card.Title>
            </Card.Body>

            <Card.Body>
                <div >
                    {user &&
                        <>
                            {/* <Button className="Buttons" as={Link} to={`/details/${_id}`} variant="outline-secondary" size="sm" >Details</Button> */}
                            <FavBible />
                        </>
                    }
                </div>
            </Card.Body >
        </Card >
    )
}

export default ColaboratorCard