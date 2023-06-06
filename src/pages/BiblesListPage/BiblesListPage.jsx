import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Button, Col } from "react-bootstrap";
import biblesService from "../../services/bibles.services";
import BibleList from "../../components/BiblesComponents/BibleList/BibleList";
import "./BiblesListPage.css"
import Loader from "../../components/PagesComponents/Loader/Loader";
import BibleSearch from "../../components/BiblesComponents/BibleSearch/BibleSearch";
import BiblesFilter from "../../components/BiblesComponents/BiblesFilter/BiblesFilter";


const BiblesListPage = () => {

    const [bibles, setBibles] = useState()
    const [biblesBackup, setBiblesBackup] = useState()


    useEffect(() => {
        loadBibles()
    }, [])

    const loadBibles = () => {
        biblesService
            .getAllBibles()
            .then(({ data }) => {
                setBibles(data);
                setBiblesBackup(data)
            })
            .catch(err => console.log(err))
    }

    const resetBibles = () => {
        setBibles(biblesBackup)
    }


    const queriesFilter = queries => {
        const key = Object.keys(queries)[0];
        const value = Object.values(queries)[0];

        const filteredBibles = biblesBackup.filter(bible => {
            if (key === 'language') {
                return bible.language === value;
            } else if (key === 'format') {
                return bible.format === value;
            } else if (key === 'century') {
                return bible.century === value;
            } else if (key === 'locationCountry') {
                return bible.locationCountry === value;
            } else if (key === 'locationCity') {
                return bible.locationCity === value;
            } else if (key === 'scripGeoculturalArea') {
                return bible.scripGeoculturalArea === value;
            }
            return false;
        });

        setBibles(filteredBibles);
    };


    const filterBibles = query => {
        const filteredBibles = biblesBackup.filter(bible => {
            return Object.values(bible).some(value =>
                value.toString().toLowerCase().includes(query.toLowerCase())
            );
        });
        setBibles(filteredBibles);
    };


    return (
        !bibles ? <Loader /> :
            <div>
                <h1 className="detailTitle">The Hebrew Bibles</h1>
                <hr />

                <Container>
                    <Row>
                        <Col md={{ span: 6, offset: 4 }}>
                            <BibleSearch filterBibles={filterBibles} />
                        </Col>
                    </Row>
                    <Row>

                        <BiblesFilter queriesFilter={queriesFilter} bibles={bibles} resetBibles={resetBibles} />
                    </Row>


                    <Row xs={1} md={2} lg={4} className="g-4">
                        <BibleList bibles={bibles} />
                    </Row>
                    <hr />
                    < Link to="/" >
                        <Button className="finalRetunButton" variant="outline-secondary" >return</Button>
                    </Link >
                </Container>
            </div>
    )
}

export default BiblesListPage
