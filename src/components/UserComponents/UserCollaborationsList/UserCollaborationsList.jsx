
import { Col } from "react-bootstrap";

import BibleCard from "../../BiblesComponents/BibleCard/BibleCard"


const UserCollaborationsList = ({ ownerBibles, loadBibles }) => {

    return (

        <Col key={ownerBibles._id}>
            <BibleCard {...ownerBibles} loadBibles={loadBibles} />
        </Col>
    )

}

export default UserCollaborationsList


