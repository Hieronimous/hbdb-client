import { Link } from "react-router-dom";
import { Card, Button, Col, Row } from "react-bootstrap";
import userService from "../../../services/user.services";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/auth.context";
import "./CollaboratorCard.css"
import { USER_DELETE_CONFIRM } from "../../../consts/user-messages-consts";

const CollaboratorCard = ({ avatar, firstName, lastName, currentInstitution, _id, loadCollaborators, loadUsers }) => {
    const { user } = useContext(AuthContext)

    const handledelete = event => {
        const isConfirmed = window.confirm(USER_DELETE_CONFIRM);
        if (isConfirmed) {

            userService
                .deleteUser(_id)
                .then(() => {
                    loadCollaborators()
                    loadUsers()
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
                    <Row>
                        <Col className="d-flex justify-content-center">

                            {user && <Button className="Buttons" as={Link} to={`/collaboratorDetails/${_id}`} variant="outline-secondary" size="sm" >More about me</Button>}

                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <div >
                                {user.userRole == "Admin" && <Button className="Buttons" variant="secondary" as={Link} onClick={handledelete}  >Delete Collaborator</Button>}
                            </div>

                        </Col>
                    </Row>
                </Card.Body >
            </Card >
        </>
    )
}

export default CollaboratorCard