import BibleCard from "./../../BiblesComponents/BibleCard/BibleCard";
import { Col } from "react-bootstrap";

const BibleList = ({ bibles }) => {

    return (
        bibles.map(elm =>
            <Col key={elm._id}>
                <BibleCard {...elm} />
            </Col>
        )
    )
}

export default BibleList