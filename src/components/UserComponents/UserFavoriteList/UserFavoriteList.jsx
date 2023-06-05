
import { Col } from "react-bootstrap";
import BibleCard from "../../BiblesComponents/BibleCard/BibleCard"


const UserFavoriteList = ({ favoriteBibles }) => {

    return (
        favoriteBibles.map(elm =>
            <Col key={elm._id}>
                <BibleCard {...elm} />
            </Col>
        )
    )
}

export default UserFavoriteList


