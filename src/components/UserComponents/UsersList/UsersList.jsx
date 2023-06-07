import UserCard from "../UserCard/UserCard";
import { Col } from "react-bootstrap";


const UsersList = ({ users, loadUsers }) => {

    return (

        users.map(elm =>
            <Col key={elm._id}>
                <UserCard {...elm} loadUsers={loadUsers} />
            </Col>
        )
    )
}

export default UsersList