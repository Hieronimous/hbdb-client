import { useState, useEffect, useContext } from "react"
import { Form, Button, Container, Col, Row } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import uploadServices from "../../../services/upload.services"
import userService from "../../../services/user.services"
import { AuthContext } from "../../../contexts/auth.context"


const UserEditForm = ({ }) => {

    const { user_id } = useParams();
    const { storeToken, authenticateUser } = useContext(AuthContext)
    const [userData, setUserData] = useState({
        username: '', email: '', firstName: '', lastName: '', avatar: ''
    })

    const { username, email, firstName, lastName, currentInstitution } = userData

    useEffect(() => {
        loadUser()
    }, [user_id])

    const loadUser = () => {
        userService
            .getOneUser(user_id)
            .then(response => {
                setUserData(response.data);
            })
            .catch(err => console.log(err));
    }

    const [loadingImage, setLoadingImage] = useState(false)

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const handleSubmit = event => {
        event.preventDefault()

        userService
            .editUser(user_id, userData)
            .then(({ data }) => {
                storeToken(data.authToken)
                authenticateUser()
                navigate('/profile')
            })
            .catch(err => console.log(err))
    }


    const handleFileUpload = event => {

        const formData = new FormData()

        formData.append('image', event.target.files[0])

        uploadServices
            .uploadImage(formData)
            .then(res => {
                console.log(res)
                setUserData({ ...userData, avatar: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingImage(false)
            })
    }

    return (
        <div className="editUserForm">
            <Container>

                <Row>
                    <Col md={{ span: 6 }}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="username">
                                <Form.Label>User name</Form.Label>
                                <Form.Control type="text" value={username} onChange={handleInputChange} name="username" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="username">
                                <Form.Label>First name</Form.Label>
                                <Form.Control type="text" value={firstName} onChange={handleInputChange} name="firstName" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="username">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="text" value={lastName} onChange={handleInputChange} name="lastName" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="currentInstitution">
                                <Form.Label>Current Institution</Form.Label>
                                <Form.Control type="text" value={currentInstitution} placeholder="Colaborator actual working institution" onChange={handleInputChange} name="currentInstitution" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="image">
                                <Form.Label>Profile Image</Form.Label>
                                <Form.Control type="file" onChange={handleFileUpload} />
                            </Form.Group>

                            <div className="d-grid">
                                <Button variant="warning" type="submit">Edit Profile</Button>
                            </div>

                        </Form>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}
export default UserEditForm