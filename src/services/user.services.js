import axios from 'axios'

class UserService {
    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/user`
        })
        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    getAllUsers() {
        return this.api.get('/getAllUsers')
    }

    getOneUser(user_id) {
        return this.api.get(`/getOneUser/${user_id}`)
    }

    editUser(user_id, userData) {
        return this.api.put(`/editProfile/${user_id}`, userData)
    }

    addfav(user_id, bible_id) {
        return this.api.put(`/favorite/${user_id}/${bible_id}`)
    }

    deleteUser(user_id) {
        return this.api.delete(`/deleteUser/${user_id}`)
    }
}

const userService = new UserService()

export default userService