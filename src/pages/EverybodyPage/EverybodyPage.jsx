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
                console.log(data)
                const collaborators = data.filter(user => user.userRole == "Collaborator");
                setCollaborators(collaborators);

            })
    }

    useEffect(() => {
        loadUsers()
    }, [])
    const loadUsers = () => {
        userService
            .getAllUsers()
            .then(({ data }) => {
                console.log(data)
                const users = data.filter(user => user.userRole == "Visitor");
                setUsers(users);

            })
    }

    return (

        !collaborators || !users ? <Loader /> :
            <div>
                <h1 className="detailTitle">All the users</h1>
                <hr />
                <Container>
                    <Row xs={1} md={2} lg={4} className="g-4">
                        <CollaboratorList collaborators={collaborators} />
                        <UsersList users={users} />
                    </Row>
                    <hr />
                    < Link to="/" >
                        <Button className="finalRetunButton" variant="outline-secondary" >return</Button>
                    </Link >
                </Container>
            </div>
    )
}

export default EverybodyPage