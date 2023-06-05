import CollaboratorCard from "../CollaboratorCard/CollaboratorCard";
import { Col } from "react-bootstrap";


const CollaboratorList = ({ collaborators }) => {

    return (

        collaborators.map(elm =>
            <Col key={elm._id}>
                <CollaboratorCard {...elm} />
            </Col>
        )
    )
}

export default CollaboratorList