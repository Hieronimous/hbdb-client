import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Button } from "react-bootstrap";
import biblesService from "../../services/bibles.services";
import LibrariesList from "../../components/BiblesComponents/BibleList/BibleList";
import "./LibrariesListPage.css"
import Loader from "../../components/PagesComponents/Loader/Loader";


const BiblesListPage = () => {

    const [bibles, setBibles] = useState()

    useEffect(() => {
        loadBibles()
    }, [])

    const loadBibles = () => {
        biblesService
            .getAllBibles()
            .then(({ data }) => setBibles(data))
            .catch(err => console.log(err))
    }


    return (
        !bibles ? <Loader /> :
            <div>
                <h1 className="detailTitle">The Hebrew Bibles</h1>
                <hr />
                <Container>
                    <Link to="/new-entry">
                        <Button variant="outline-warning" >New entry</Button>
                    </Link>
                    <hr />
                    <Row xs={1} md={2} lg={4} className="g-4">
                        <BibleList bibles={bibles} />
                    </Row>
                    <hr />
                    < Link to="/bibles" >
                        <Button className="finalRetunButton" variant="outline-secondary" >return</Button>
                    </Link >
                </Container>
            </div>
    )
}

export default BiblesListPage
