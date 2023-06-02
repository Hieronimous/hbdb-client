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
import ColaboratorsListPage from '../pages/ColaboratorsPage/ColaboratorsPage'
import MyColaborationsPage from '../pages/MyColaborationsPage/MyColaborationsPage'


const AppRoutes = () => {

    return (
        <Routes>

            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/bibles" element={<BiblesListPage />} />
            <Route path="/colaborators" element={<ColaboratorsListPage />} />
            <Route path="/countries" element={<h1>countries</h1>} />
            <Route path="/libraries" element={<h1>libraries</h1>} />
            <Route path="*" element={<h1>404</h1>} />

            <Route element={<PrivateRoute />}>
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/details/:bible_id" element={<BibleDetailsPage />} />
                <Route path="/edit/:bible_id" element={<EditBibleForm />} />
                <Route path="/new-entry" element={<NewBiblePage />} />
                <Route path="/editProfile/:user_id" element={<UserEditForm />} />
                <Route path="/mycolaborations" element={<MyColaborationsPage />} />
                <Route path="/myfavorites" element={<h1>my favorites</h1>} />
            </Route>
        </Routes>
    )
}

export default AppRoutes