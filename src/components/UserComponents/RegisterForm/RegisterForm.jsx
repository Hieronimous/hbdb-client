import { useState } from "react"
import { Form, Button } from "react-bootstrap"
import authService from './../../../services/auth.services'
import { useNavigate } from "react-router-dom"
import uploadServices from "../../../services/upload.services"

const RegisterForm = ({ }) => {

    const [registerData, setRegisterdata] = useState({
        username: '', email: '', password: '', firstName: '', lastName: '', userRole: '', currentInstitution: '', avatar: ''
    })

    const roleSelect = ["", "Visitor", "Colaborator"]

    const [loadingImage, setLoadingImage] = useState(false)

    const navigate = useNavigate()

    const handleInputChange = e => {
        const { value, name } = e.target
        setRegisterdata({ ...registerData, [name]: value })
    }

    const handleSubmit = event => {
        event.preventDefault()

        authService
            .signup(registerData)
            .then(({ data }) => navigate('/login'))
            .catch(err => console.log(err))
    }
    const handleFileUpload = event => {

        const formData = new FormData()

        formData.append('image', event.target.files[0])

        uploadServices
            .uploadImage(formData)
            .then(res => {
                console.log(res)
                setRegisterdata({ ...registerData, avatar: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingImage(false)
            })

    }
    const { username, email, password, firstName, lastName, userRole, currentInstitution } = registerData

    return (

        <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="username">
                <Form.Label>User name</Form.Label>
                <Form.Control type="text" value={username} onChange={handleInputChange} name="username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} onChange={handleInputChange} name="password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="username">
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" value={firstName} onChange={handleInputChange} name="firstName" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="username">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" value={lastName} onChange={handleInputChange} name="lastName" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="language">
                <Form.Label>Visitor/Colaborator</Form.Label>
                <Form.Control as="select" value={userRole} onChange={handleInputChange} name="userRole" defaultValue='Visitor' required>
                    {roleSelect.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="currentInstitution">
                <Form.Label>Current Institution</Form.Label>
                <Form.Control type="text" value={currentInstitution} placeholder="Colaborator actual working institution" onChange={handleInputChange} name="currentInstitution" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="image" required>
                <Form.Label>Profile Image</Form.Label>
                <Form.Control type="file" onChange={handleFileUpload} />
            </Form.Group>

            <div className="d-grid">
                <Button variant="warning" type="submit">SignUp</Button>
            </div>

        </Form>
    )
}
export default RegisterForm