import React, { useState, useContext } from 'react';
import userService from './../../../services/user.services';
import './FavBible.css';
import { AuthContext } from "../../../contexts/auth.context";
import favBibleImg from './../../../assets/fullS.png';
import unfavBible from './../../../assets/emptyS.png';

const FavBible = ({ id, isFavorite }) => {
    const { user } = useContext(AuthContext);
    const [fav, setFav] = useState(isFavorite);

    const handleToggleFav = () => {
        if (fav) {
            handleDeleteFav();
        } else {
            handleAddFav();
        }
    };

    const handleAddFav = () => {

        userService
            .addFav(user._id, id)
            .then(({ data }) => {
                const updatedUser = data;
                setFav(updatedUser.favoriteBibles.includes(id));
            })
            .catch(err => console.log(err));
    };

    const handleDeleteFav = () => {
        userService
            .deleteFav(user._id, id)
            .then(({ data }) => {
                const updatedUser = data;
                setFav(updatedUser.favoriteBibles.includes(id));
            })
            .catch(err => console.log(err));
    };

    return (
        <img
            src={fav ? favBibleImg : unfavBible}
            onClick={handleToggleFav}
            className="favStar"
            alt="favStar"
        />
    );
};

export default FavBible;
