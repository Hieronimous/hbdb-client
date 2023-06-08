import { Container, Button, Row } from "react-bootstrap";
import usersService from "../../services/user.services";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth.context";
import './MyFavBibles.css'
import { Link } from "react-router-dom";
import Loader from "../../components/PagesComponents/Loader/Loader";
import UserFavoriteList from "../../components/UserComponents/UserFavoriteList/UserFavoriteList";

const MyFavoriteBiblesPage = () => {
    const [favoriteBibles, setFavoriteBibles] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        getMyFavorite();
    }, []);

    const getMyFavorite = () => {
        usersService
            .getOneUser(user._id)
            .then(({ data }) => {
                const { favoriteBibles } = data;
                setFavoriteBibles(favoriteBibles);
            })
            .catch(err => console.log(err));
    };

    return (
        !favoriteBibles ? (
            <Loader />
        ) : (
            <div className="favoriteBox">
                <h1 className="detailTitle">My favorite Bibles</h1>
                <hr />
                <Container>
                    <Row xs={1} md={2} lg={4} className="g-4">
                        {favoriteBibles.length >= 1 ? (
                            favoriteBibles.map(bible => {
                                return <UserFavoriteList favoriteBible={bible} />;
                            })
                        ) : (
                            <h3>You don't have any favorite Bibles yet</h3>
                        )}
                    </Row>
                    <hr />
                    <Link to="/profile">
                        <Button className="finalReturnButton" variant="warning">
                            Return
                        </Button>
                    </Link>
                </Container>
            </div>
        )
    );
};

export default MyFavoriteBiblesPage;
