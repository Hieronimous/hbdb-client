
import { Col } from "react-bootstrap";

import BibleCard from "../../BiblesComponents/BibleCard/BibleCard"


const UserCollaborationsList = ({ ownerBibles }) => {

    return (
        ownerBibles.map(elm =>
            <Col key={elm._id}>
                <BibleCard {...elm} />
            </Col>
        )
    )
}

export default UserCollaborationsList


