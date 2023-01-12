import { useState } from "react";
import './SearchBar.css';
function SearchBar({ onSubmit }) {

    const [term, setTerm] = useState('');

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        onSubmit(term);
    }

    return (
        <div className="search-bar">

            <form onSubmit={handleFormSubmit}>
                <label>Enter Search Term</label>
                <input value={term} onChange={(event) => {
                    setTerm(event.target.value);
                }} />
            </form>
        </div>
    );
}

export default SearchBar;