import Loader from "../../components/PagesComponents/Loader/Loader"
import CollaboratorDetailCard from "../../components/UserComponents/CollaboratorDetailCard/CollaboratorDetailCard"
import { useContext } from "react"
import { AuthContext } from "../../contexts/auth.context"

const CollaboratorDetailPage = () => {

    const { user } = useContext(AuthContext)



    return (
        !user ? <Loader /> : <CollaboratorDetailCard user={user} />
    )
}

export default CollaboratorDetailPage