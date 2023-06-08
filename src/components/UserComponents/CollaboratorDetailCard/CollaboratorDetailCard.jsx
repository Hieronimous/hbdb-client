import { Container, Col, Button, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import './CollaboratorDetailCard.css'
import { useEffect } from "react"


const CollaboratorDetailCard = ({ user }) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Container>
                <Row className="box">
                    <Col md={{ span: 4 }} >
                        <img className="detailImage" variant="top" src={user.avatar} />
                    </Col>
                    <Col md={{ offset: 1, span: 6 }} >
                        <h2 className="detailName"><b>{user.firstName} {user.lastName}</b></h2>
                        <h3 className="detailName"><b>Institution: </b>{user.currentInstitution}</h3>
                        <hr />
                        <h4 ><b>More about me</b></h4>
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