import { Container, Row, Col } from 'react-bootstrap'
import RegisterForm from '../../components/UserComponents/RegisterForm/RegisterForm'

const RegisterPage = () => {

    return (

        <Container>

            <Row>

                <Col md={{ offset: 3, span: 6 }}>

                    <h1>Register</h1>

                    <hr />

                    <RegisterForm />

                </Col>
            </Row>

        </Container>
    )
}

export default RegisterPage