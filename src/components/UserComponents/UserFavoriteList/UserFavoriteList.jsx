
import { Col } from "react-bootstrap";
import BibleCard from "../../BiblesComponents/BibleCard/BibleCard"


const UserFavoriteList = ({ favoriteBible }) => {


    return (

        <Col key={favoriteBible._id}>
            <BibleCard {...favoriteBible} isFavorite={true} />
        </Col>

    )
}

export default UserFavoriteList


