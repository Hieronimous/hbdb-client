import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Button } from "react-bootstrap";
import userService from "../../services/user.services";
import CollaboratorList from "../../components/UserComponents/CollaboratorList/CollaboratorList";
import UsersList from "../../components/UserComponents/UsersList/UsersList"
import Loader from "../../components/PagesComponents/Loader/Loader";

const EverybodyPage = () => {

    const [collaborators, setCollaborators] = useState([])
    const [users, setUsers] = useState([])

    useEffect(() => {
        loadCollaborators()
    }, [])

    const loadCollaborators = () => {

        userService
            .getAllUsers()
            .then(({ data }) => {
                const collaborators = data.filter(user => user.userRole == "Collaborator");
                setCollaborators(collaborators)
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        loadUsers()
    }, [])

    const loadUsers = () => {
        userService
            .getAllUsers()
            .then(({ data }) => {
                const users = data.filter(user => user.userRole == "Visitor");
                setUsers(users);
            })
            .catch(err => console.log(err));
    }

    return (

        !collaborators || !users ? <Loader /> :
            <div>
                <h1 className="detailTitle">All the users</h1>
                <hr />
                <Container>
                    <h2><b>Collaborators</b></h2>
                    <hr />
                    <Row xs={1} md={2} lg={4} className="g-4">
                        <CollaboratorList collaborators={collaborators} loadCollaborators={loadCollaborators} />
                    </Row>
                    <br />
                    <h2><b>Visitors</b></h2>
                    <hr />
                    <Row xs={1} md={2} lg={4} className="g-4">
                        <UsersList users={users} loadUsers={loadUsers} />
                    </Row>

                    < Link to="/" >
                        <Button className="finalRetunButton" variant="warning" >return</Button>
                    </Link >
                </Container>
            </div>
    )
}

export default EverybodyPage
