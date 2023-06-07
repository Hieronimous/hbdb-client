import BibleCard from "./../../BiblesComponents/BibleCard/BibleCard";
import { Col } from "react-bootstrap";

const BibleList = ({ bibles, loadBibles, favBibles }) => {

    return (
        bibles.map(elm => {

            return (
                <Col key={elm._id}>
                    <BibleCard {...elm} loadBibles={loadBibles} isFavorite={favBibles.includes(elm._id)} />
                </Col>
            )
        }
        )
    )
}

export default BibleList