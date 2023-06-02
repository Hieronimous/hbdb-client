
import React, { useState } from 'react';
import './FavBible.css';

import favBibleImg from './../../../assets/fullS.png';
import unfavBible from './../../../assets/emptyS.png';


const FavBible = () => {
    const [fav, setFav] = useState(false);


    const handleClick = () => {
        setFav(!fav);
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