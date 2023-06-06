import { Link } from "react-router-dom";
import { Card, Button, Col } from "react-bootstrap";
import userService from "../../../services/user.services";
import { useNavigate, } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../../contexts/auth.context";
import "./CollaboratorCard.css"

const CollaboratorCard = ({ avatar, firstName, lastName, userRole, currentInstitution, _id }) => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext)

    const handledelete = event => {
        const isConfirmed = window.confirm('Are you sure you want to delete this your profile?');
        if (isConfirmed) {

            userService.deleteUser(user._id)
                .then(() => {
                    navigate(`/everybody`); // arreglar no redirige
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <>
            <Card className="CollaboratorCard">

                <Card.Img className="image" variant="top" src={avatar} />
                <Card.Body>
                    <Card.Title className="d-flex justify-content-center"><h3><b>{firstName} {lastName}</b></h3></Card.Title>
                    <Card.Title className="d-flex justify-content-center">{currentInstitution}</Card.Title>
                </Card.Body>

                <Card.Body>
                    <Col className="d-flex justify-content-center">
                        <div >
                            {user.userRole == "Admin" && <>
                                <Button className="Buttons" variant="secondary" as={Link} onClick={handledelete}  >Delete Collaborator</Button>{' '}</>}
                        </div>


                        {user &&
                            <Button className="Buttons" as={Link} to={`/details/${_id}`} variant="outline-secondary" size="sm" >More about me</Button>

                        }

                    </Col>
                </Card.Body >
            </Card >
        </>
    )
}

export default CollaboratorCard