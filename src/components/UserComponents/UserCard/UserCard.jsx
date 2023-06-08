import { Link } from "react-router-dom";
import { Card, Button, Col } from "react-bootstrap";
import userService from "../../../services/user.services";
import { useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/auth.context";
import { USER_DELETE_CONFIRM } from "../../../consts/user-messages-consts";
import "./UserCard.css"

const UserCard = ({ avatar, firstName, lastName, _id, loadUsers }) => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext)
    const [userData, setUserData] = useState([{ userRole: '' }])

    useEffect(() => {
        userService
            .getOneUser(_id)
            .then(response => {
                setUserData(response.data);
            })
            .catch(err => console.log(err));
    }, [_id]);

    console.log(userData)

    const handledelete = event => {
        const isConfirmed = window.confirm(USER_DELETE_CONFIRM);
        if (isConfirmed) {

            userService.deleteUser(userData._id)
                .then(() => {
                    loadUsers()
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <>
            <Card className="UserCard">
                <Card.Img className="image" variant="top" src={avatar} />
                <Card.Body>
                    <Card.Title className="d-flex justify-content-center"><h3><b>{firstName} {lastName}</b></h3></Card.Title>
                </Card.Body>
                <Card.Body>
                    <Col className="d-flex justify-content-center">
                        <div >

                            {user.userRole == "Admin" && <>
                                <Button className="Buttons" variant="danger" as={Link} onClick={handledelete}  >Delete user</Button>{' '}</>}
                        </div>
                    </Col>
                </Card.Body >
            </Card >
        </>
    )
}

export default UserCard