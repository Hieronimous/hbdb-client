import CollaboratorCard from "../CollaboratorCard/CollaboratorCard";
import { Col } from "react-bootstrap";


const CollaboratorList = ({ collaborators, loadCollaborators }) => {

    return (

        collaborators?.map(elm =>
            <Col key={elm._id}>
                <CollaboratorCard {...elm} loadCollaborators={loadCollaborators} />
            </Col>
        )
    )
}

export default CollaboratorList