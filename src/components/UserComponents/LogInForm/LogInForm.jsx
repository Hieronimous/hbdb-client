import { useContext, useState } from "react"
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap"
import authService from './../../../services/auth.services'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../../../contexts/auth.context"
import Loader from "../../PagesComponents/Loader/Loader"
import './LogInForm.css'

const LogInForm = () => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()
    const [errors, setErrors] = useState([]);

    const { authenticateUser, storeToken, isLoading } = useContext(AuthContext)

    const handleInputChange = e => {
        const { value, name } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (isLoading) {
            return <Loader />
        }

        return (
            authService
                .login(loginData)
                .then(({ data }) => {
                    storeToken(data.authToken)
                    authenticateUser()
                    navigate('/profile')
                })
                .catch(err => setErrors(err.response.data.errorMessages))
        )
    }

    const { password, email } = loginData

    return (
        <Form onSubmit={handleSubmit}>
            <Container>
                <Row>

                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={password} onChange={handleInputChange} name="password" />
                    </Form.Group>
                    <hr />
                    <div className="d-grid">
                        <Button variant="warning" type="submit">Log In</Button>
                        <br />
                    </div>
                </Row>
                {errors?.length > 0 && errors.map(elm => <p>{elm}</p>)}
                <Row className="decorationLog">


                    <img
                        src='https://64.media.tumblr.com/7ea123505b3b0d75eee645a8d4b3edc0/e73b224adcc65676-c0/s1280x1920/6a2fcf9ba3a4e30647355b3f1053a67b96dc7d29.pnj'
                        className='w-60 rounded-4 shadow-4'
                        alt='marginImage'
                    />

                </Row>
            </Container>

        </Form >


    )
}

export default LogInForm