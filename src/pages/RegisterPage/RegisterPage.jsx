import { Container, Row, Col } from 'react-bootstrap'
import RegisterForm from '../../components/UserComponents/RegisterForm/RegisterForm'

const RegisterPage = () => {

    return (
        <Container>
            <Row>
                <Col md={{ offset: 1, span: 9 }}>
                    <RegisterForm />
                </Col>
            </Row>
        </Container>
    )
}

export default RegisterPage