import axios from 'axios'

class BiblesService {
    constructor() {

        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/bibles`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    getAllBibles() {
        return this.api.get('/getAllBibles')
    }

    getOneBible(bible_id) {
        return this.api.get(`/getOneBible/${bible_id}`)
    }

    saveBible(bibleData) {
        return this.api.post('/saveBible', bibleData)
    }

    editBible(bible_id, bibleData) {
        return this.api.put(`/edit/${bible_id}`, bibleData)
    }

    deleteBible(bible_id) {
        return this.api.delete(`/deleteBible/${bible_id}`)
    }
}

const biblesService = new BiblesService()

export default biblesService

