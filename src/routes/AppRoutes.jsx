import { Routes, Route } from 'react-router-dom'
import LandingPage from '../pages/LandingPage/LandingPage'
import BiblesListPage from '../pages/BiblesListPage/BiblesListPage'
import BibleDetailsPage from '../pages/BibleDetailsPage/BibleDetailsPage'
import NewBiblePage from '../pages/NewBiblePage/NewBiblePage'
import EditBibleForm from '../components/BiblesComponents/EditBibleForm/EditBibleForm'
import RegisterPage from '../pages/RegisterPage/RegisterPage'
import LoginPage from '../pages/LoginPage/LoginPage'
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import PrivateRoute from './PrivateRoutes'
import UserEditForm from '../components/UserComponents/EditUserForm/EditUserForm'
import CollaboratorsListPage from '../pages/CollaboratorsPage/CollaboratorsPage'
import MyCollaborationsPage from '../pages/MyCollaborationsPage/MyCollaborationsPage'
import MyFavoriteBiblesPage from '../pages/MyFavBibles/MyFavBibles'
import EverybodyPage from '../pages/EverybodyPage/EverybodyPage'
import CollaboratorDetailPage from './../pages/CollaboratorDetailPage/CollaboratorDetailPage'

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/bibles" element={<BiblesListPage />} />
            <Route path="/collaborators" element={<CollaboratorsListPage />} />
            <Route path="*" element={<h1>404</h1>} />

            <Route element={<PrivateRoute />}>
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/details/:bible_id" element={<BibleDetailsPage />} />
                <Route path="/edit/:bible_id" element={<EditBibleForm />} />
                <Route path="/new-entry" element={<NewBiblePage />} />
                <Route path="/editProfile/:user_id" element={<UserEditForm />} />
                <Route path="/mycollaborations" element={<MyCollaborationsPage />} />
                <Route path="/favorite" element={<MyFavoriteBiblesPage />} />
                <Route path="/everybody" element={<EverybodyPage />} />
                <Route path="/collaboratorDetails/:user_id" element={<CollaboratorDetailPage />} />
            </Route>
        </Routes>
    )
}

export default AppRoutes