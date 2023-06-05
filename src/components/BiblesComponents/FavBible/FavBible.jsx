
import React, { useState } from 'react';
import userService from './../../../services/user.services'
import './FavBible.css';
import Loader from '../../PagesComponents/Loader/Loader';

import favBibleImg from './../../../assets/fullS.png';
import unfavBible from './../../../assets/emptyS.png';


const FavBible = () => {
    const [fav, setFav] = useState(false);

    // const [useView, setUserView] = useState

    // const handleSubmitFavorites = e => {
    //     e.preventDefault()
    //     userService
    //         .userAddFriend(user._id, id)
    //         .then(({ data }) => {
    //             const updateUser = data
    //             setUserView(updateUser)
    //         })
    //         .catch(err => console.log(err))
    // }

    // const handleSubmitDeleteFriend = e => {
    //     e.preventDefault()
    //     userService
    //         .userDeleteFriend(user._id, id)
    //         .then(({ data }) => {
    //             const updateUser = data
    //             setUserView(updateUser)
    //         })
    //         .catch(err => console.log(err))
    // }

    const handleClick = () => {

        setFav(!fav);
        // !userView ?
        //     <Loader /> :
        //     userView.favoriteBibles.includes(id) ?

        //         // una estrella o la otra


    };

    return (
        <img
            src={fav ? favBibleImg : unfavBible}
            onClick={handleClick}
            className="favStar"
            alt="favStar"
        />
    );
};

export default FavBible;