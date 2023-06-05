import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import userService from "../../../services/user.services";
import { useNavigate, } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../../../contexts/auth.context";
import "./UserCard.css"

const UserCard = ({ avatar, firstName, lastName, userRole, currentInstitution, _id }) => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext)

    const handledelete = event => {
        const isConfirmed = window.confirm('Are you sure you want to delete this your profile?');
        if (isConfirmed) {

            userService.deleteUser(user._id)
                .then(() => {
                    navigate(`/users`);
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
                            <Button className="Buttons" variant="secondary" as={Link} onClick={handledelete}  >Delete profile</Button>{' '}</>}
                    </div>
                </Card.Body >
            </Card >
        </>
    )
}

export default UserCard