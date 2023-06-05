import { useState } from "react";
import './BibleSearch'

const BibleSearch = ({ filterBibles }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleQueryChange = e => {
        const inputValue = e.target.value;
        setSearchQuery(inputValue);
        filterBibles(inputValue);
    };

    return (
        <form >
            <input className="searchInput" type="text" placeholder="Search" value={searchQuery} onChange={handleQueryChange} />
        </form>
    );
};

export default BibleSearch;
