import { Container, Col, Button, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import './CollaboratorDetailCard.css'


const CollaboratorDetailCard = ({ user }) => {

    return (
        <>
            <Container>
                <Row className="box">
                    <Col md={{ span: 4 }} >
                        <img className="detailImage" variant="top" src={user.avatar} />
                    </Col>
                    <Col md={{ offset: 1, span: 6 }} >
                        <h2><b>{user.firstName} {user.lastName}</b></h2>
                        <h3><b>Institution: </b>{user.currentInstitution}</h3>
                        <hr />
                        <h4><b>More about me</b></h4>
                        <h5>{user.collaboratorDetail}</h5>

                        <Link to="/collaborators">
                            <Button className="buttons" variant="warning" >Return</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default CollaboratorDetailCard