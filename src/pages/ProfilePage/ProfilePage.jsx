import { useContext, useEffect, useState } from "react"
import { AuthContext } from './../../contexts/auth.context'
import { Container } from 'react-bootstrap'
import ProfileComponents from "../../components/UserComponents/ProfileComponents/ProfileComponents"
import userService from "../../services/user.services"


const ProfilePage = () => {

    const { user } = useContext(AuthContext)

    const [currentUser, setCurrentUser] = useState()

    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = () => {
        userService
            .getOneUser(user._id)
            .then(({ data }) => setCurrentUser(data))
            .catch(err => console.log(err))
    }

    return (
        currentUser && <Container>
            < ProfileComponents user={currentUser} />
        </Container>
    )
}

export default ProfilePage