import { Button, Row, Col, Container } from "react-bootstrap"
import { useNavigate, Link } from 'react-router-dom'
import './ProfileComponents.css'
import userService from "../../../services/user.services"


const ProfileComponents = ({ user }) => {

    const navigate = useNavigate();
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

    console.log("role", user)

    return (
        <div>
            <Container>
                <h1>Welcome {user.username}!</h1>
                <hr />
                <Row>
                    <Col md={{ span: 3 }} >
                        {user && <img className="userAvatar" src={user.avatar} alt="avatar" />}
                    </Col>

                    <Col md={{ span: 6 }}>
                        <hr />
                        <h4><b>First name: </b>{user.firstName}</h4>
                        <h4><b>Last name: </b>{user.lastName}</h4>
                        <h4><b>Email: </b>{user.email}</h4>

                        {user.userRole == "Colaborator" && <>
                            <h4><b>Institution: </b>{user.currentInstitution}</h4>
                            <Button className="Buttons" as={Link} to={`/mycolaborations`} variant="warning">My colaborations</Button>{' '}</>}
                        <hr />

                        <Button className="Buttons" as={Link} to={`/favorites`} variant="warning">Favorites Bibles</Button>{' '}
                        <hr />
                        <Button className="Buttons" as={Link} to={`/editProfile/${user._id}`} variant="secondary">Edit profile</Button>{' '}
                        <Button className="Buttons" variant="danger" as={Link} onClick={handledelete}  >Delete profile</Button>{' '}
                    </Col>
                </Row>
                <br />
            </Container>

            <Button className="Buttons" variant="outline-secondary" as={Link} to={`/`}  >Return</Button>{' '}
        </div >
    )
}

export default ProfileComponents