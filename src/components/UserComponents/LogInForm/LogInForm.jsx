import { useContext, useState } from "react"
import { Form, Button } from "react-bootstrap"
import authService from './../../../services/auth.services'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../../../contexts/auth.context"
import Loader from "../../PagesComponents/Loader/Loader"

const LogInForm = () => {

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })

    const navigate = useNavigate()

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
                .catch(err => console.log(err)))
    }

    const { password, email } = loginData

    return (

        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" value={email} onChange={handleInputChange} name="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} onChange={handleInputChange} name="password" />
            </Form.Group>
            <div className="d-grid">
                <Button variant="warning" type="submit">Log In</Button>
            </div>
        </Form>
    )
}

export default LogInForm