import UserCard from "../UserCard/UserCard";
import { Col } from "react-bootstrap";


const UsersList = ({ users }) => {

    return (

        users.map(elm =>
            <Col key={elm._id}>
                <UserCard {...elm} />
            </Col>
        )
    )
}

export default UsersList