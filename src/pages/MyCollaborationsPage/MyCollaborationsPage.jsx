import { Container, Button, Row } from "react-bootstrap";
import './MyCollaborationsPage.css'
import biblesService from "../../services/bibles.services";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth.context";
import { Link } from "react-router-dom";
import Loader from "../../components/PagesComponents/Loader/Loader";
import UserCollaborationsList from "../../components/UserComponents/UserCollaborationsList/UserCollaborationsList";

const MyCollaborationsPage = () => {

    const [ownerBibles, setOwnerBibles] = useState([])

    const { user } = useContext(AuthContext)


    useEffect(() => {
        loadBibles()
    }, [])

    const loadBibles = () => {

        biblesService
            .getAllBibles()
            .then(({ data }) => {
                const updatedData = data.filter(bible => bible.owner == user._id)
                setOwnerBibles(updatedData)
            })
            .catch(err => console.log(err))
    }

    return (

        !ownerBibles ? (
            <Loader />
        ) : (
            <div>
                <h1 className="detailTitle">My collaborations</h1>
                <hr />
                <Link to="/new-entry">
                    <Button variant="outline-warning" >New entry</Button>
                </Link>
                <hr />
                <Container className="myCollaborations">
                    <Row xs={1} md={2} lg={4} className="g-4">
                        {ownerBibles.length ? (
                            ownerBibles.map(ownerBibles => {
                                return <UserCollaborationsList ownerBibles={ownerBibles} loadBibles={loadBibles} />;
                            })
                        ) : (
                            <h3 >You don't have any collaborations yet</h3>
                        )}
                    </Row>
                    <hr />
                    < Link to="/profile" >
                        <Button className="finalRetunButton" variant="warning" >return</Button>
                    </Link >
                </Container>
            </div>
        )
    )
}

export default MyCollaborationsPage

