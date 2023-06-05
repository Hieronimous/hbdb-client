import { useState, useEffect, useContext } from "react"
import { Form, Button, Container, Col, Row } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import uploadServices from "../../../services/upload.services"
import userService from "../../../services/user.services"
import { AuthContext } from "../../../contexts/auth.context"
import './EditUserForm.css'


const UserEditForm = ({ }) => {

    const { user_id } = useParams();
    const { storeToken, authenticateUser } = useContext(AuthContext)
    const [userData, setUserData] = useState({
        username: '', email: '', firstName: '', lastName: '', userRole: '', avatar: '', currentInstitution: ''
    })

    const { username, email, firstName, lastName, userRole, currentInstitution } = userData
    const roleSelect = ["", "Visitor", "Collaborator"]
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
            <Container fluid className='mt-5' onSubmit={handleSubmit}>
                <section className='text-center text-lg-start'>
                    <div className='container py-2'>
                        <Row className='g-0 align-items-center'>

                            <Col lg='6' className='mb-5 mb-lg-0'>
                                <div
                                    className='card cascading-right'
                                    style={{ background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)' }}
                                >
                                    <div className='card-body p-5 shadow-5 text-center'>
                                        <h2 className='fw-bold mb-5'>Edit profile</h2>
                                        <form>
                                            <Col>
                                                <Form.Group className="mb-3" controlId="username">
                                                    <Form.Label>User name</Form.Label>
                                                    <Form.Control type="text" value={username} onChange={handleInputChange} name="username" />
                                                </Form.Group>
                                            </Col>
                                            <Row className='mb-4'>


                                                <Col>
                                                    <Form.Group className="mb-3" controlId="username">
                                                        <Form.Label>First name</Form.Label>
                                                        <Form.Control type="text" value={firstName} onChange={handleInputChange} name="firstName" />
                                                    </Form.Group>
                                                </Col>
                                                <Form.Group className="mb-3" controlId="image" required>
                                                    <Form.Label>Profile Image</Form.Label>
                                                    <Form.Control type="file" onChange={handleFileUpload} />
                                                </Form.Group>
                                                <Col>
                                                    <Form.Group className="mb-3" controlId="lastName">
                                                        <Form.Label>Last Name</Form.Label>
                                                        <Form.Control type="text" value={lastName} onChange={handleInputChange} name="lastName" />
                                                    </Form.Group>
                                                </Col>
                                            </Row>
                                            <Form.Group className="mb-3" controlId="email">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="userRole">
                                                <Form.Label>Visitor/Collaborator</Form.Label>
                                                <Form.Control
                                                    as="select"
                                                    value={userRole}
                                                    onChange={handleInputChange}
                                                    name="userRole"
                                                    defaultValue="Visitor"
                                                    required>
                                                    {roleSelect.map((option, index) => (
                                                        <option key={index} value={option}>
                                                            {option}
                                                        </option>
                                                    ))}
                                                </Form.Control>
                                            </Form.Group>

                                            {userRole === "Collaborator" && <>
                                                <Form.Group className="mb-3" controlId="currentInstitution">
                                                    <Form.Label>Current Institution</Form.Label>
                                                    <Form.Control type="text" value={currentInstitution} placeholder="Collaborator current institution" onChange={handleInputChange} name="currentInstitution" />
                                                </Form.Group> </>}

                                            <div className='mb-4'>
                                                <Button className="Buttons" variant="warning" type="submit" disable={loadingImage}> {loadingImage ? 'Loading...' : 'Edit Profile'}</Button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Col>
                            <Col className='imageCol'>
                                <Col lg='6' className='mb-5 mb-lg-0'>
                                    <div className='marginImage'>
                                        <img
                                            src='https://64.media.tumblr.com/313711a376cc56cf4c7c788f4e7a28e6/e73b224adcc65676-3f/s540x810/b6ced342742b01d3cde1f4fdcb1ac79043be339b.pnj'
                                            className='w-60 rounded-4 shadow-4'
                                            alt='marginImage'
                                        /></div>
                                </Col>
                            </Col>

                        </Row>
                    </div>
                </section>
            </Container>
        </div>
    )
}
export default UserEditForm