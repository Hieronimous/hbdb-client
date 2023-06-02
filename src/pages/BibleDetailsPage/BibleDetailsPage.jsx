import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import biblesService from "../../services/bibles.services"
import BibleDetailCard from "../../components/BiblesComponents/BibleDetailCard/BibleDetailCard"
import Loader from "../../components/PagesComponents/Loader/Loader"

const BibleDetailsPage = () => {

    const { bible_id } = useParams()

    const [bible, setBible] = useState()

    useEffect(() => {
        loadBible()
    }, [bible_id])

    const loadBible = () => {
        biblesService
            .getOneBible(bible_id)
            .then(({ data }) => setBible(data))
            .catch(err => console.log(err));
    }

    return (
        !bible ? <Loader /> : <BibleDetailCard bible={bible} />
    )
}

export default BibleDetailsPage