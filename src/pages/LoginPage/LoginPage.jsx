import { Container, Row, Col } from 'react-bootstrap'
import LogInForm from '../../components/UserComponents/LogInForm/LogInForm'

const LoginPage = () => {

    return (

        <Container>

            <Row>

                <Col md={{ offset: 3, span: 6 }}>

                    <h1>Log In</h1>

                    <hr />

                    <LogInForm />

                </Col>
            </Row>

        </Container>
    )
}

export default LoginPage