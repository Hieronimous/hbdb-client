import { useEffect, useState } from "react"
import { Col } from "react-bootstrap"
import biblesService from "./../../../services/bibles.services"
import BiblesOptions from "./../BiblesOptions/BiblesOptions"
import Loader from "../../PagesComponents/Loader/Loader"
import BibleCard from "../BibleCard/BibleCard"

const BiblesFilter = ({ queriesFilter, resetBibles }) => {

    const [bibles, setBibles] = useState([])
    const [biblesBackup, setBiblesBackup] = useState([])


    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [queries, setQueries] = useState({
        format: '',
        century: '',
        scriptGeoculturalArea: '',
        locationCountry: '',
        locationCity: '',
        sort: {},
        page: 1,
    })

    useEffect(() => loadBibles(), [])

    const loadBibles = queries => {

        biblesService
            .getAllBibles({ ...queries, page: currentPage })
            .then(({ data }) => {
                setBibles(data.bibles)
                setBiblesBackup(data.bibles)
                setCurrentPage(data.currentPage)
                setTotalPages(data.totalPages)
                setIsLoading(false)
            })
            .catch(err => console.log(err))

    }

    const getQueries = (newQuery) => queriesFilter(newQuery)

    const resetQueries = () => {
        setQueries({
            format: '',
            century: '',
            scriptGeoculturalArea: '',
            locationCountry: '',
            locationCity: '',
            sort: {},
            page: 1,
        });
        setBibles(biblesBackup)

        setCurrentPage(1);
        setTotalPages(0);
    }

    const resetPage = () => {
        setCurrentPage(1);
        setTotalPages(0);
    }

    return (
        <>
            {
                isLoading ?
                    <Loader />
                    :
                    <>

                        <BiblesOptions getQueries={getQueries} resetQueries={resetQueries} resetPage={resetPage} resetBibles={resetBibles} />

                        {
                            bibles?.length > 0 ?
                                <div >
                                    {bibles.map(elm => {
                                        return <div key={elm._id} >
                                            <Col key={elm._id}>
                                                <BibleCard {...elm} />
                                            </Col>
                                        </div>
                                    })}
                                </div>
                                :
                                <p ></p>
                        }
                    </>
            }
        </>
    )

}
export default BiblesFilter