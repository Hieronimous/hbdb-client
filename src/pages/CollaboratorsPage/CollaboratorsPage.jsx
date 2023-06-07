import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Button } from "react-bootstrap";
import userService from "../../services/user.services";
import CollaboratorList from "../../components/UserComponents/CollaboratorList/CollaboratorList";
import Loader from "../../components/PagesComponents/Loader/Loader";

const CollaboratorsListPage = () => {

    const [collaborators, setCollaborators] = useState()

    useEffect(() => {
        loadCollaborators()
    }, [])

    const loadCollaborators = () => {
        userService
            .getAllUsers()
            .then(({ data }) => {
                console.log(data)
                const collaborators = data.filter(user => user.userRole.includes("Collaborator"));
                setCollaborators(collaborators);
            })
    }

    return (

        !collaborators ? <Loader /> :
            <div>
                <h1 className="detailTitle">Our Collaborators</h1>
                <hr />
                <Container>
                    <Row xs={1} md={2} lg={4} className="g-4">
                        <CollaboratorList collaborators={collaborators} loadCollaborators={loadCollaborators} />
                    </Row>
                    <hr />
                    < Link to="/" >
                        <Button className="finalRetunButton" variant="outline-secondary" >return</Button>
                    </Link >
                </Container>
            </div>
    )
}

export default CollaboratorsListPage
