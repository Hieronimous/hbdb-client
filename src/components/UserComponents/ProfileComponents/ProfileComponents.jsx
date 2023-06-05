import { Button, Row, Col, Container } from "react-bootstrap"
import { useNavigate, Link } from 'react-router-dom'
import './ProfileComponents.css'
import userService from "../../../services/user.services"


const ProfileComponents = ({ user }) => {

    const navigate = useNavigate();

    const handledelete = () => {
        const isConfirmed = window.confirm('Are you sure you want to delete your profile?');
        if (isConfirmed) {
            userService
                .deleteUser(user._id)
                .then(() => {
                    // Perform any necessary logout action here
                    // Example: logoutUser();
                    navigate('/');
                })
                .catch(err => console.log(err));
        }
    };

    // useEffect(() => {
    //     // Perform any necessary cleanup action here
    //     return () => {
    //         // Example: resetUserState();
    //     };
    // }, []);


    return (
        <div>
            <Container>
                <h1>Welcome {user.username}!</h1>
                <hr />
                <div>
                    <Row>
                        <Col md={{ span: 5 }} className="personalInfo">
                            {user && <img className="userAvatar" src={user.avatar} alt=" avatar" />}
                        </Col>

                        <Col md={{ span: 6 }} className="personalInfo2">
                            <h4><b>Your personal information</b></h4>
                            <hr />

                            <h4><b>First name: </b>{user.firstName}</h4>
                            <h4><b>Last name: </b>{user.lastName}</h4>
                            <h4><b>Email: </b>{user.email}</h4>

                            {user.userRole == "Collaborator" && <>
                                <h4><b>Institution: </b>{user.currentInstitution}</h4>
                                {/* arreglar */}
                                <hr /></>}
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 12 }} className="d-flex justify-content-center">
                            {user.userRole == "Collaborator" && <>

                                <Button className="Buttons" as={Link} to={`/new-entry`} variant="warning">New entry</Button>{' '}
                                <Button className="Buttons" as={Link} to={`/mycollaborations`} variant="warning">My collaborations</Button>{' '}</>}
                            <Button className="Buttons" as={Link} to={`/favorites`} variant="warning">Favorites Bibles</Button>{' '}
                            <Button className="Buttons" as={Link} to={`/editProfile/${user._id}`} variant="warning">Edit my profile</Button>{' '}
                            {user.userRole == "Admin" && <Button className="Buttons" as={Link} to={`/everybody`} variant="danger">All the users</Button>}
                        </Col>
                    </Row>
                    <Row>
                        <Col md={{ span: 12 }} className="d-flex justify-content-center">
                            {user && <>
                                <Button className="Buttons" variant="secondary" as={Link} onClick={handledelete}  >Delete profile</Button>{' '}</>}
                            <Button className="Buttons" variant="outline-light" as={Link} to={`/`}  >Return</Button>{' '}
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center decorationLog"  >
                            <img
                                src='https://64.media.tumblr.com/d0d09cf6c510de0365a62d2ba6c48b8b/e73b224adcc65676-bd/s400x600/5cfc1e21d1ccdab4b19aa7dac46380e0d6e620c9.jpg'
                                alt='marginImage'
                            />
                        </Col>
                    </Row>
                </div>
            </Container >
        </div >
    )
}
export default ProfileComponents