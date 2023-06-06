import { Container, Col, Button, Row } from "react-bootstrap"
import { Link } from "react-router-dom"


const CollaboratorDetailCard = ({ user }) => {

    console.log("hola", user)

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <img className="image" variant="top" src={user.avatar} />
                    </Col>
                    <Col>
                        <h2><b>{user.firstName} {user.lastName}</b></h2>
                        <h3><b>Current Institution: </b>{user.currentInstitution}</h3>
                        <hr />
                        <h4><b>More about me</b></h4>
                        <h5>{user.collabotarorDetail}</h5>
                    </Col>
                </Row>

                <Link to="/collaborators">
                    <Button className="finalRetunButton" variant="outline-secondary" >Back to all Bibles</Button>
                </Link>
            </Container>
        </>
    )
}

export default CollaboratorDetailCard