import { useState } from "react"

const BibleSearch = ({ filterBibles }) => {

    const [wordQuery, setWordQuery] = useState('')

    const handleQueryChange = e => {
        const inputValue = e.target.value
        setWordQuery(inputValue)
        filterBibles(inputValue)
    }

    return (
        <form className="BibleSearch">
            <input type="text" placeholder="Search" value={wordQuery} onChange={handleQueryChange} />
        </form>
    )
}

export default BibleSearch