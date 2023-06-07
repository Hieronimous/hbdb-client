import Loader from "../../components/PagesComponents/Loader/Loader"
import CollaboratorDetailCard from "../../components/UserComponents/CollaboratorDetailCard/CollaboratorDetailCard"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts/auth.context"
import { useParams } from "react-router-dom"
import userService from "../../services/user.services"

const CollaboratorDetailPage = () => {

    const { user_id } = useParams()
    const [userData, setUserData] = useState([])

    useEffect(() => {
        loadUser()
    }, [])

    const loadUser = () => {
        userService
            .getOneUser(user_id)
            .then(user => {
                setUserData(user.data);
            })
            .catch(err => console.log(err));
    }


    return (
        !userData ? <Loader /> : <CollaboratorDetailCard user={userData} />
    )
}

export default CollaboratorDetailPage