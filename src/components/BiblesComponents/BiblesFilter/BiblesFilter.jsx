import { useEffect, useState } from "react"
import { Pagination, Col } from "react-bootstrap"
import biblesService from "./../../../services/bibles.services"
import BiblesOptions from "./../BiblesOptions/BiblesOptions"
import Loader from "../../PagesComponents/Loader/Loader"
import BibleCard from "../BibleCard/BibleCard"

const BiblesFilter = ({ queriesFilter }) => {

    const [bibles, setBibles] = useState([])


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

        setCurrentPage(1);
        setTotalPages(0);
    }

    const resetPage = () => {
        setCurrentPage(1);
        setTotalPages(0);
    }

    const handleOnChange = (event, page) => {
        setCurrentPage(page)
        setQueries({ ...queries, page: page })
        queriesFilter(queries)
    }
    return (
        <>
            {
                isLoading ?
                    <Loader />
                    :
                    <>

                        <BiblesOptions getQueries={getQueries} resetQueries={resetQueries} resetPage={resetPage} />

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

                        {
                            totalPages !== 0 &&
                            <Pagination
                                pages={totalPages}
                                activePage={currentPage}
                                className={'pagination'}
                                onChange={handleOnChange}
                                variant="shaded"
                            />
                        }


                    </>
            }
        </>
    )

}
export default BiblesFilter