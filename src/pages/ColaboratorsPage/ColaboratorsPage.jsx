import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Button } from "react-bootstrap";
import userService from "../../services/user.services";
import ColaboratorList from "../../components/UserComponents/ColaboratorList/ColaboratorList";
import Loader from "../../components/PagesComponents/Loader/Loader";

const ColaboratorsListPage = () => {

    const [colaborators, setColaborators] = useState()

    useEffect(() => {
        loadColaborators()
    }, [])

    const loadColaborators = () => {
        userService
            .getAllUsers()
            .then(({ data }) => setColaborators(data))
            .catch(err => console.log(err))
    }


    return (

        !colaborators ? <Loader /> :
            <div>
                <h1 className="detailTitle">Our Colaborators</h1>
                <hr />
                <Container>
                    <Row xs={1} md={2} lg={4} className="g-4">
                        <ColaboratorList colaborators={colaborators} />
                    </Row>
                    <hr />
                    < Link to="/" >
                        <Button className="finalRetunButton" variant="outline-secondary" >return</Button>
                    </Link >
                </Container>
            </div>
    )
}

export default ColaboratorsListPage
