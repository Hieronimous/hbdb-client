import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import userService from "../../../services/user.services";
import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/auth.context";
import "./UserCard.css"

const UserCard = ({ avatar, firstName, lastName, _id }) => {
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
        const isConfirmed = window.confirm('Are you sure you want to delete this your profile?');
        if (isConfirmed) {

            userService.deleteUser(userData._id)
                .then(() => {
                    navigate(`/everybody`);
                })
                .catch(err => console.log(err));
        }
    }

    return (
        <>
            <Card className="UserCard">
                <Card.Img className="image" variant="top" src={avatar} />
                <Card.Body>
                    <Card.Title><h3><b>{firstName} {lastName}</b></h3></Card.Title>
                </Card.Body>
                <Card.Body>
                    <div >
                        {user.userRole == "Admin" && <>
                            <Button className="Buttons" variant="danger" as={Link} onClick={handledelete}  >Delete user</Button>{' '}</>}
                    </div>
                </Card.Body >
            </Card >
        </>
    )
}

export default UserCard